import * as conversationActions from 'app/actions/conversation';

const DEFAULT = {};

export default function conversations(state=DEFAULT, action={}) {
  switch(action.type) {
    case conversationActions.ADD_MESSAGE: {
      const { contactId } = action.payload;
      const currentMessages = state[contactId] || [];

      return {
        ...state,
        [contactId]: currentMessages.concat([action.payload]),
      };
    }
    default: return state;
  }
}
