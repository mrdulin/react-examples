/**
 * Created by dulin on 2017/6/23.
 */
// 定义action字符串字面量类型，相比于string类型，告诉编译器的类型更加精确，指定actionType必须是固定值。
// 如果是string类型，那它的值可以是任意字符串。

type QUERY_BOOK = 'SEARCH/QUERY_BOOK';
const QUERY_BOOK: QUERY_BOOK = 'SEARCH/QUERY_BOOK';

type CLEAR = 'SEARCH/CLEAR';
const CLEAR: CLEAR = 'SEARCH/CLEAR';

type GET_BOOK_DETAIL = 'SEARCH/GET_BOOK_DETAIL';
const GET_BOOK_DETAIL: GET_BOOK_DETAIL = 'SEARCH/GET_BOOK_DETAIL';

export {
  QUERY_BOOK,
  CLEAR,
  GET_BOOK_DETAIL
};

