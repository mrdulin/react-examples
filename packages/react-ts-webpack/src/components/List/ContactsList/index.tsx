import * as React from 'react';
import List, {IListPropsBase, onItemClick} from '../';
import Contacts from 'models/Contacts';
import * as style from './style.module.scss';

export default class extends List<IListPropsBase> {

  public static defaultProps: IListPropsBase = {
    children: null
  };

  public constructor() {
    super();
  }

  public render(): React.ReactElement<IListPropsBase> {
    return (
      <div className={style.list}>
        {this.props.children}
      </div>
    );
  }
}
