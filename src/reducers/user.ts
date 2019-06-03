export interface User {
  name: string;
}

export const initUser = {
  name: ''
};

const defaultAction = {
  type: '',
  payload: {}
};

const user = (state = initUser, action = defaultAction) => {
  if (action.type === 'user/set') {
    return {
      ...state,
      ...action.payload
    };
  }
  return state;
};

export default user;
