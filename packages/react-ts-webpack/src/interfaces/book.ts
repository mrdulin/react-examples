/**
 * Created by dulin on 2017/6/30.
 */
export interface ISearchBook {
  ID: number;
  Title: string;
  SubTitle: string;
  Description: string;
  Image: string;
  isbn: string;
  [propName: string]: any;
}



