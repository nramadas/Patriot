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
  ctx.body = {};
};

export const returnUser = (ctx, user) => {
  ctx.body = {
    id: user.id,
    username: user.username,
  };
};
