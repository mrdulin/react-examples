/**
 * Created by dulin on 2017/6/23.
 */

const API: string = 'http://it-ebooks-api.info/v1';
const DOUBAN_API: string = __PROD__ ? '真实的服务器端API' : '/douban/api';

export default {
  API,
  DOUBAN_API
};
