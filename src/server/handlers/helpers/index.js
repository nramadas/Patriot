export const returnErrors = (ctx, errors) => {
  ctx.status = 400;
  ctx.body = { errors };
};

export const returnNoUser = ctx => {
  returnErrors(ctx, [
    { field: 'username', msg: 'incorrect username or password' }
  ]);
};

export const returnServerError = ctx => {
  ctx.status = 500;
  ctx.body = {
    errors: [{ field: '', msg: 'Something wen\'t wrong' }],
  };
};

export const returnUser = (ctx, user) => {
  ctx.body = {
    user: {
      id: user.id,
      username: user.username,
    },
    contacts: (user.contacts || []).map(c => ({
      id: c.id,
      username: c.username,
    })),
  };
};
