import { returnUser, returnNoUser, returnServerError } from '../helpers';

export default models => async ctx => {
  const { username, password } = ctx.request.body;

  try {
    const user = await models.User.findOne({
      where: { username },
      include: [{
        model: models.User,
        as: 'contacts',
      }],
    });

    if (user && user.authenticate(password)) {
      returnUser(ctx, user);
    } else {
      returnNoUser(ctx);
    }
  } catch(e) {
    console.error(e);
    returnServerError(ctx);
  }
}
