import Koa from 'koa';
import KoaRouter from 'koa-router';
import KoaBodyParser from 'koa-bodyparser';
import KoaStatic from 'koa-static';
import Sequelize from 'sequelize';

import template from './templates/main';
import createUserModel from './models/User';
import createContactModel from './models/Contact';
import createContactRequest from './models/ContactRequest';

const PORT = 8888;
const server = new Koa();
const bodyparser = KoaBodyParser();
const router = new KoaRouter();
const assetFiles = KoaStatic('assets');

const sql = new Sequelize('patriot', 'niranjan', '', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});

(async function() {
  try {
    await sql.authenticate();
    const Contact = createContactModel(sql);
    const ContactRequest = createContactRequest(sql);
    const User = createUserModel(sql, Contact, ContactRequest);

    await User.sync();
    await Contact.sync();
    await ContactRequest.sync();

    // const a = await User.create({
    //   username: 'Alice',
    //   password: 'foo',
    //   passwordConfirmation: 'foo',
    // });
    //
    // const b = await User.create({
    //   username: 'Bob',
    //   password: 'foo',
    //   passwordConfirmation: 'foo',
    // });
    //
    // const c = await User.create({
    //   username: 'Carrie',
    //   password: 'foo',
    //   passwordConfirmation: 'foo',
    // });
    //
    // const d = await User.create({
    //   username: 'Dave',
    //   password: 'foo',
    //   passwordConfirmation: 'foo',
    // });
    //
    // const e = await User.create({
    //   username: 'Erin',
    //   password: 'foo',
    //   passwordConfirmation: 'foo',
    // });
    //
    // const f = await User.create({
    //   username: 'Frank',
    //   password: 'foo',
    //   passwordConfirmation: 'foo',
    // });

    router.get('/', async ctx => {
      ctx.body = template();
    });

    router.get('/searchUsers', async ctx => {
      const username = ctx.request.query.q;
      const users = await User.findAll({
        where: { username: { $ilike: `%${username}%`} },
      });

      ctx.body = {
        users: users.map(({ id, username }) => ({ id, username })),
      };
    });

    server.use(bodyparser);
    server.use(router.routes());
    server.use(router.allowedMethods());
    server.use(assetFiles);

    server.listen(PORT, () => {
      console.log(`App launching on port ${PORT}`);
    });
  } catch(e) {
    console.error(e.stack);
  }
})();