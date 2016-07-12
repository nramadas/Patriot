import template from '../../templates/main';

export default models => async ctx => {
  ctx.body = template();
}
