import { Action } from 'redux';
import get from 'get-value';
import { initUser, IUser } from './model';

const user = (state: IUser = initUser, action: Action) => {
  if (action.type === 'user/set') {
    return {
      ...state,
      ...get(action, 'payload')
    };
  }
  return state;
};

export default user;
