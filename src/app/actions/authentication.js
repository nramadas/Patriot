import makeRequest from 'app/helpers/makeRequest';
import ValidationError from 'app/helpers/ValidationError';

export const PENDING = 'AUTHENTICATION__PENDING';
export const SUCCESS = 'AUTHENTICATION__SUCCESS';
export const FAILURE = 'AUTHENTICATION__FAILURE';

export const setPending = () => ({
  type: PENDING,
});

export const setSuccess = (id, username) => ({
  type: SUCCESS,
  payload: { id, username },
});

export const setFailure = errors => ({
  type: FAILURE,
  payload: { errors },
});

export const register = (name, password, passwordConfirmation) => async (dispatch, getState) => {
  if (getState().user.pending) return;

  dispatch(setPending());

  try {
    const { id, username } = await makeRequest('POST', '/register', {
      username: name,
      password,
      passwordConfirmation,
    });

    dispatch(setSuccess(id, username));
  } catch(e) {
    if (e instanceof ValidationError) {
      return dispatch(setFailure(e.errors));
    }

    throw e;
  }
};

export const login = (name, password) => async (dispatch, getState) => {
  if (getState().user.pending) return;

  dispatch(setPending());

  try {
    const { id, username } = await makeRequest('POST', '/login', {
      username: name,
      password,
    });

    dispatch(setSuccess(id, username));
  } catch(e) {
    if (e instanceof ValidationError) {
      return dispatch(setFailure(e.errors));
    }

    throw e;
  }
};
