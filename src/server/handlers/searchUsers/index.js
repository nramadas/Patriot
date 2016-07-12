export default models => async ctx => {
  const username = ctx.request.query.q;

  try {
    const users = await models.User.findAll({
      where: { username: { $ilike: `%${username}%`} },
    });

    ctx.body = {
      users: users.map(({ id, username }) => ({ id, username })),
    };
  } catch(e) {
    ctx.status = 500;
    ctx.body = {
      users: [],
    };
  }
}
