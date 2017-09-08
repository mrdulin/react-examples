import * as React from 'react';
import {connect} from 'react-redux';
import {IState} from 'reducers';
import {Dispatch} from 'redux';
import {Readonly} from 'types';

import * as actions from './actions';

import Contacts from 'models/Contacts';

import ContactsList from 'components/List/ContactsList';
import ContactsListItem from 'components/ListItem/ContactsListItem';

import * as style from './style.module.scss';

import log from 'decorators/log';

interface IContactProps {
  contactsList: Contacts[];
}

interface IContactState {
}

interface IContactActions {
  toggleIntro: (id: string, index: number, contacts: Contacts) => void;
}

type ReacOnlyActions = Readonly<IContactActions>;
type ReadOnlyProps = Readonly<IContactProps>;
type ReadOnlyState = Readonly<IContactState>;

type Props = ReadOnlyProps & ReacOnlyActions;

@(connect(
  (state: IState): ReadOnlyProps => {
    return state.contact;
  },
  (dispatch: Dispatch<IState>): ReacOnlyActions => {
    return {
      toggleIntro: (id: string, index: number, contacts: Contacts): void => {
        dispatch(actions.toggleIntro(id, index, contacts));
      }
    };
  }
) as any)
class Contact extends React.Component<Props, ReadOnlyState> {

  public static defaultProps: Props = {
    contactsList: [],
    toggleIntro: () => {}
  };

  public constructor(props: Props) {
    super(props);
  }

  @log('count')
  public render(): React.ReactElement<Props> {
    const {contactsList}: {contactsList: Contacts[]} = this.props;
    return (
      <article>
        <h1>This is contact page</h1>
        <ContactsList>
          {
            contactsList.map((contacts: Contacts, idx: number): React.ReactElement<Props> => {
              return <ContactsListItem key={contacts.id} item={contacts} onClick={() => this.onToggleIntro(contacts, idx)}/>;
            })
          }
        </ContactsList>
      </article>
    );
  }

  private onToggleIntro(contacts: Contacts, idx: number): void {
    this.props.toggleIntro(contacts.id, idx, contacts);
  }
}

export default Contact;
