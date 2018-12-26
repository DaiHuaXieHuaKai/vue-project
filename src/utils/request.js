/*
 * @Author: Brainy 
 * @Date: 2018-12-18 14:19:20 
 * @Last Modified by:   Brainy 
 * @Last Modified time: 2018-12-18 14:19:20 
 */

import {
  Message
} from 'element-ui';
import axios from 'axios';

const defaultOptions = {
  timeout: 10000,
};

axios.interceptors.request.use(config => config);

axios.interceptors.response.use((response) => {
  if (response.status === 200) {
    return response.data;
  }
}, (error) => {
  if (error && error.response) {
    switch (error.response.status) {
      case 400:
        Message.error('请求出错');
        break;
      case 403:
        Message.error('禁止请求');
        break;
      case 404:
        Message.error('资源不存在');
        break;
      case 500:
        Message.error('服务器发生错误');
        break;
      default:
        Message.error('服务器连接出错');
        break;
    }
  } else {
    Message.error('连接失败');
  }
  return Promise.resolve(error.response);
});

export default {
  get: (url, options = {}) => {
    return new Promise((resolve) => {
      axios(url, {
        method: 'get',
        params: options.data,
        ...defaultOptions,
        ...options,
      }).then((res) => {
        resolve(res);
      });
    });
  },
  post: (url, options = {}) => {
    return new Promise((resolve) => {
      axios(url, {
        method: 'post',
        data: JSON.stringify(options.data || {}),
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        ...defaultOptions,
        ...options,
      }).then((res) => {
        resolve(res);
      });
    });
  }
}