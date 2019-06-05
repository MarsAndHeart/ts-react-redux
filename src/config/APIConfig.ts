const host = '/mock/5cf604717fd0727f9d6f632e/smartcheck';

const APICodeToPath = {
  '000001': '/test' // 模拟用的提交接口
};

export const getAPIRequestUrl = (APICode = '') => {
  // @ts-ignore
  return `${host}${APICodeToPath[APICode]}`;
};
