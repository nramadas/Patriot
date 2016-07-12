import * as authenticationActions from 'app/actions/authentication';

const DEFAULT = {
  username: '',
  id: '',
  pending: false,
  validationErrors: null,
  loggedIn: false,
};

export default function authentication(state=DEFAULT, action={}) {
  switch(action.type) {
    case authenticationActions.PENDING: {
      return {
        ...state,
        pending: true,
      };
    }
    case authenticationActions.SUCCESS: {
      const { id, username } = action.payload;
      return {
        ...state,
        id,
        username,
        validationErrors: null,
        pending: false,
        loggedIn: true,
      };
    }
    case authenticationActions.FAILURE: {
      const { errors } = action.payload;
      return {
        ...state,
        pending: false,
        validationErrors: errors,
      };
    }
    default: return state;
  }
}
