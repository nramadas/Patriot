import * as searchActions from 'app/actions/search';

const DEFAULT = {
  pending: false,
  results: [],
  errors: null,
};

export default function results(state=DEFAULT, action={}) {
  switch(action.type) {
    case searchActions.RESULTS_PENDING: {
      return {
        pending: true,
        results: [],
        errors: null,
      };
    }
    case searchActions.RESULTS_SUCCESS: {
      const { results } = action.payload;
      return {
        results,
        pending: false,
        errors: null,
      };
    }
    case searchActions.RESULTS_FAILURE: {
      return {
        pending: false,
        results: [],
        errors: null,
      };
    }
    default: return state;
  }
}
