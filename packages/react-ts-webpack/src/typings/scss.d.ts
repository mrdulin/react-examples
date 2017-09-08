/**
 * Created by dulin on 2017/6/29.
 */
declare module '*.module.scss' {
  interface IClassnames {
    [classname: string]: string;
  }
  const style: IClassnames;

  export = style;
}
