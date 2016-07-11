export const SELECT = 'CONTACT__SELECT';

export const selectContact = id => ({
  type: SELECT,
  payload: { id },
});
