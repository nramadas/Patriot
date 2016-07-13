import makeRequest from 'app/helpers/makeRequest';
import ValidationError from 'app/helpers/ValidationError';

export const PENDING = 'AUTHENTICATION__PENDING';
export const SUCCESS = 'AUTHENTICATION__SUCCESS';
export const FAILURE = 'AUTHENTICATION__FAILURE';

export const setPending = () => ({
  type: PENDING,
});

export const setSuccess = (id, username, contacts) => ({
  type: SUCCESS,
  payload: { id, username, contacts },
});

export const setFailure = errors => ({
  type: FAILURE,
  payload: { errors },
});

export const register = (username, password, passwordConfirmation) => async (dispatch, getState) => {
  if (getState().user.pending) return;

  dispatch(setPending());

  try {
    const { user, contacts } = await makeRequest('POST', '/register', {
      username,
      password,
      passwordConfirmation,
    });

    dispatch(setSuccess(user.id, user.username, contacts));
  } catch(e) {
    if (e instanceof ValidationError) {
      return dispatch(setFailure(e.errors));
    }

    throw e;
  }
};

export const login = (username, password) => async (dispatch, getState) => {
  if (getState().user.pending) return;

  dispatch(setPending());

  try {
    const { user, contacts } = await makeRequest('POST', '/login', {
      username,
      password,
    });
    dispatch(setSuccess(user.id, user.username, contacts));
  } catch(e) {
    if (e instanceof ValidationError) {
      return dispatch(setFailure(e.errors));
    }

    throw e;
  }
};
