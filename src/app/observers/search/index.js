import searchUsers from 'app/helpers/searchUsers';
import { DEBOUNCE } from 'app/helpers/actionObserver';
import * as searchActions from 'app/actions/search';

export default {
  actionType: searchActions.RESULTS_PENDING,
  observer: DEBOUNCE(200),
  run: action => async (dispatch, getState) => {
    const { username } = action.payload;

    try {
      const { users } = await searchUsers(username);
      dispatch(searchActions.resultsSuccess(users));
    } catch(e) {
      dispatch(searchActions.resultsFailure());
    }
  }
};
