export const ADD_MESSAGE = 'CONVERSATION__ADD_MESSAGE';

export const addMessage = (contactId, sender, body) => ({
  type: ADD_MESSAGE,
  payload: { contactId, sender, body },
});
