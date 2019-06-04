/**
 * 描述 设置user方法
 * 参数 user对象
 * 返回 设置user的action
 */
import get from 'get-value';
import { IUser } from '../reducers/user';
import { fetchAPI } from '@common/utils/BasicApiRequist';

const setUser = (user: IUser) => ({
  type: 'user/set',
  payload: user
});

const getUserFromServer = async () => {
  const result = await fetchAPI('000001');
  return setUser({
    name: get(result, 'result.name')
  });
};

export default {
  setUser,
  getUserFromServer
};
