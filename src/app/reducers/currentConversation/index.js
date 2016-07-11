import * as contactActions from 'app/actions/contact';

const DEFAULT = null;

export default function currentConversation(state=DEFAULT, action={}) {
  switch(action.type) {
    case contactActions.SELECT: return action.payload.id;
    default: return state;
  }
}
