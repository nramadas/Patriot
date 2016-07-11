import searchUsers from 'app/helpers/searchUsers';

export const QUERY = 'SEARCH__QUERY';

export const query = query => ({
  type: QUERY,
  payload: { query },
});

export const searchContacts = username => async (dispatch, getState) => {
  dispatch(query(username));

  await searchUsers(username);
};
