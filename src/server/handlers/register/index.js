import { ValidationError } from 'sequelize';

import { returnUser, returnErrors, returnServerError } from '../helpers';

export default models => async ctx => {
  try {
    const user = await models.User.create(ctx.request.body);
    returnUser(ctx, user);
  } catch (e) {
    if (e instanceof ValidationError) {
      returnErrors(ctx, e.errors.map(err => ({
        field: err.path,
        msg: err.message,
      })));
    } else {
      returnServerError(ctx);
    }
  }
}
