import * as React from 'react';

export type onItemClick<T> = (item: T, idx?: number) => void;

export interface IListPropsBase {
  children?: any;
}

export interface IListProps<T> extends IListPropsBase {
  items: T[];
  onClick?: onItemClick<T>;
}

abstract class List<T> extends React.PureComponent<T, any> { }

export default List;



