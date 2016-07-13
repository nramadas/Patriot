import * as searchActions from 'app/actions/search';

const DEFAULT = '';

export default function query(state=DEFAULT, action={}) {
  switch(action.type) {
    case searchActions.RESULTS_PENDING: return action.payload.username;
    default: return state;
  }
}
