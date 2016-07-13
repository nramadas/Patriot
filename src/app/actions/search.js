export const QUERY = 'SEARCH__QUERY';
export const FETCH_RESULTS = 'SEARCH__FETCH_RESULTS';
export const RESULTS_PENDING = 'SEARCH__RESULTS_PENDING';
export const RESULTS_SUCCESS = 'SEARCH__RESULTS_SUCCESS';
export const RESULTS_FAILURE = 'SEARCH__RESULTS_FAILURE';

export const query = query => ({
  type: QUERY,
  payload: { query },
});

export const fetchResults = username => ({
  type: FETCH_RESULTS,
  payload: { username },
});

export const resultsPending = () => ({
  type: RESULTS_PENDING,
});

export const resultsSuccess = results => ({
  type: RESULTS_SUCCESS,
  payload: { results },
});

export const resultsFailure = () => ({
  type: RESULTS_FAILURE,
});

export const searchContacts = username => async (dispatch, getState) => {
  dispatch(query(username));
  dispatch(resultsPending());
  dispatch(fetchResults(username));
};
