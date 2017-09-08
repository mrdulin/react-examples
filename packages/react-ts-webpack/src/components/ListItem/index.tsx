import * as React from 'react';

import {onDivElementClick} from 'types';

export interface IListItemProps<T> {
  item: T;
  children?: React.ReactNode;
  onClick: () => void;
}

abstract class ListItem<T> extends React.PureComponent<IListItemProps<T>, any> {}

export default ListItem;


