export const RESULTS_PENDING = 'SEARCH__RESULTS_PENDING';
export const RESULTS_SUCCESS = 'SEARCH__RESULTS_SUCCESS';
export const RESULTS_FAILURE = 'SEARCH__RESULTS_FAILURE';

export const resultsPending = username => ({
  type: RESULTS_PENDING,
  payload: { username },
});

export const resultsSuccess = results => ({
  type: RESULTS_SUCCESS,
  payload: { results },
});

export const resultsFailure = () => ({
  type: RESULTS_FAILURE,
});
