// 统一的请求方法
import { getAPIRequestUrl } from '@config/APIConfig';
import { timeout } from './promise';

export async function fetchAPI(
  APICode = '', // 接口编号
  params = {}, // 请求数据
  shouldHandleError = true, // 是否处理错误（非必传,默认为true）
  shouldLoading = true, // 是否显示loading（非必传,默认为true）
  requestTimeout = 15 * 1000 // 超时时间（非必传,默认15秒）
) {
  const url = getAPIRequestUrl(APICode);

  const data = JSON.stringify(params);

  const config = {
    body: data,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    method: 'POST'
  };

  try {
    const response = await timeout(requestTimeout)(fetch(url, config)).catch(
      e => {
        alert(e.message);
      }
    );
    const res = await response.json();

    // console.log({ "请求地址": url, "请求数据": params, "返回报文": res });

    return res;
  } catch (e) {
    if (shouldHandleError) {
      alert(e.message);
      return null;
    }
    return e;
  }
}
