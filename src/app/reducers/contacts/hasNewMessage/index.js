import * as contactActions from 'app/actions/contact';

const DEFAULT = {
  0: false,
  1: false,
  2: false,
  3: true,
  4: false,
  5: false,
};

export default function hasNewMessage(state=DEFAULT, action={}) {
  switch(action.type) {
    case contactActions.SELECT: {
      const { id } = action.payload;
      return {
        ...state,
        [id]: false,
      };
    }
    default: return state;
  }
}
