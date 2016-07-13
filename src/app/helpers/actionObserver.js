export default function actionObserver(observers) {
  return ({ dispatch, getState }) => next => action => {
    observers.forEach(({ actionType, observer, run }) =>
      action.type === actionType
        ? observer(dispatch, action, run)
        : null
    );

    return next(action);
  };
}

let timer = null;
actionObserver.DEBOUNCE = ms => (dispatch, action, cb) => {
  clearTimeout(timer);
  timer = setTimeout(() => dispatch(cb(action)), ms);
};

export const DEBOUNCE = actionObserver.DEBOUNCE;
