import * as searchActions from 'app/actions/search';

const DEFAULT = '';

export default function query(state=DEFAULT, action={}) {
  switch(action.type) {
    case searchActions.QUERY: return action.payload.query;
    default: return state;
  }
}
