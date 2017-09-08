import * as React from 'react';
import ListItem, { IListItemProps } from '../';
import Contacts from 'models/Contacts';
import * as style from './style.module.scss';
import log from 'decorators/log';
import { Readonly } from 'types';

type DISPLAY_NAME = 'ContactsListItem';
const DISPLAY_NAME: DISPLAY_NAME = 'ContactsListItem';

type Props = Readonly<IListItemProps<Contacts>>;

export default class extends ListItem<Contacts> {

  public static displayName: DISPLAY_NAME = DISPLAY_NAME;

  public static defaultProps: Props = {
    item: new Contacts(),
    onClick: (): void => { }
  };

  public shouldComponentUpdate(nextProps: Props): boolean {
    const item: Contacts = this.props.item;
    const nextItem: Contacts = nextProps.item;

    if (item.showIntro === nextItem.showIntro) {
      return false;
    }
    return true;
  }

  @log('count')
  public render(): React.ReactElement<Props> {
    const { item }: { item: Contacts } = this.props;

    return (
      <div className={style.contacts}>
        <div className={style.contactsLeft}>
          <img src={item.avatar} alt="avatar" />
        </div>
        <div className={style.contactsRight}>
          <h2 className={style.contactsName}>{item.name}</h2>
          <button type="button" onClick={this.props.onClick}>展示简介</button>
          <p style={{ display: item.showIntro ? 'block' : 'none' }} className={style.contactsIntro}>{item.intro}</p>
        </div>
      </div>
    );
  }
}
