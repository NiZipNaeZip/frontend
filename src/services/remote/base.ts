import axios from 'axios';

const BASEURL = 'https://jipyo.link:8081';

const basePublicHeaders = {
  Accept: `*/*`,
  'Content-Type': `application/json`,
};

interface Request {
  url: string;
  headers?: object;
  method: 'get' | 'post' | 'put' | 'delete';
}

interface RequestWithParams extends Request {
  params?: object;
}

interface RequestWithData extends Request {
  data?: object;
}

const sendRequest = ({ url, params, method, headers }: RequestWithParams) => {
  const baseHeaders = basePublicHeaders;
  return axios[method](BASEURL + url, {
    headers: { ...baseHeaders, ...headers },
    params,
  }).then((response) => {
    return { ...response.data, axiosStatus: response.status };
  });
};

const sendRequestForData = ({ url, data, method, headers }: RequestWithData) => {
  const baseHeaders = basePublicHeaders;
  return axios[method](BASEURL + url, data, {
    headers: { ...baseHeaders, ...headers },
  }).then((response) => {
    return response.data;
  });
};

const sendRequestForDelete = ({ url, data, headers }: Omit<RequestWithData, 'method'>) => {
  const baseHeaders = basePublicHeaders;
  return axios
    .delete(BASEURL + url, {
      headers: { ...baseHeaders, ...headers },
      data: data,
    })
    .then((response) => {
      return response.data;
    });
};

export const publicAPI = {
  get: ({ url, params, headers }: Omit<RequestWithParams, 'method'>) =>
    sendRequest({ url, params, method: 'get', headers }),
  post: ({ url, data, headers }: Omit<RequestWithData, 'method'>) =>
    sendRequestForData({
      url,
      data,
      method: 'post',
      headers,
    }),
  put: ({ url, data, headers }: Omit<RequestWithData, 'method'>) =>
    sendRequestForData({
      url,
      data,
      method: 'put',
      headers,
    }),
  delete: ({ url, data, headers }: Omit<RequestWithData, 'method'>) =>
    sendRequestForDelete({
      url,
      data,
      headers,
    }),
};
