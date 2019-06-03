/**
 * 描述 设置user方法
 * 参数 user对象
 * 返回 设置user的action
 */
import { User } from '../reducers/user';

const setUser = (user: User) => ({
  type: 'user/set',
  payload: user
});

export default {
  setUser
};
