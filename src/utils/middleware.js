import { applyMiddleware } from "redux";

function multiDispatcher({ dispatch }) {
  return next => actions => {
    if (Array.isArray(actions)) {
      return actions.map(action => dispatch(action));
    }
    return next(actions);
  };
}

function errorHandler({ dispatch }) {
  return next => action => {
    if (action instanceof Error) {
      const msg = action.message || "";
      alert(msg);
      return action;
    }

    try {
      return next(action);
    } catch (error) {
      return dispatch(error);
    }
  };
}

function promise({ dispatch }) {
  return next => action => {
    if (action && typeof action.then === "function") {
      const finishLoadingAndDispatch = (input) => {
        dispatch(input);
      };
      return action.then(finishLoadingAndDispatch).catch(finishLoadingAndDispatch);
    }
    return next(action);
  };
}

function thunkState({ dispatch, getState }) {
  return next => action => {
    if (action && typeof action === "function") {
      return dispatch(action(getState()));
    }
    return next(action);
  };
}

const filterNil = () => (next) => (action) => {
  if (action != null) {
    next(action);
  }
};

export default applyMiddleware(
  multiDispatcher,
  errorHandler,
  promise,
  thunkState,
  filterNil,
);
