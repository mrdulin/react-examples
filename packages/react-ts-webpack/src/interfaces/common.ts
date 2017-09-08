/**
 * Created by dulin on 2017/6/29.
 */
export interface IPaging {
  readonly page: number;
  readonly total: number;
  readonly hasMore: boolean;
  readonly pageSize: number;
}

export interface IkeyOfObject {
  [propName: string]: any;
}

export interface IonInit {
  onInit: () => void;
}

