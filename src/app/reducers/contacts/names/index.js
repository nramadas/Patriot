import * as authenticationActions from 'app/actions/authentication';

const DEFAULT = {};

export default function names(state=DEFAULT, action={}) {
  switch(action.type) {
    case authenticationActions.SUCCESS: {
      const { contacts } = action.payload;

      return {
        ...state,
        ...contacts.reduce((prev, { id, username }) => ({
          ...prev,
          [id]: username,
        }), {}),
      }
    }
    default: return state;
  }
}
