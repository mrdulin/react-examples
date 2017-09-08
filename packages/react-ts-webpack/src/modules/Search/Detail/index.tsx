import * as React from 'react';
import {connect, MapStateToPropsParam} from 'react-redux';
import {Dispatch} from 'redux';
import {RouteComponentProps} from 'react-router';
import {IState} from 'reducers';
import {ISearchDetailActions, ISearchReducerState} from '../interfaces';
import Book from 'models/Book';
import {IonInit} from 'interfaces/common';
import * as Actions from '../actions';

interface IDetailProps {
  item: Book;
}

type DetailProps = IDetailProps & RouteComponentProps<any, any> & ISearchDetailActions; 

class Detail extends React.PureComponent<DetailProps, any> implements IonInit {
  public static defaultProps: IDetailProps = {
    item: new Book()
  };
  
  private id: number | string;
  
  public constructor(props: DetailProps) {
    super(props);  
    this.id = props.params.id;
    
    this.onInit();
  }
  
  public onInit(): void {
    this.props.getBookById(this.id);
  }
  
  public render(): React.ReactElement<DetailProps> {
    const book: Book = this.props.item;
    
    return (
      <section>
        {
          book.id === -1 ? 
          <p>找不到书籍</p> :
          <p>{book.title}</p>
        }
      </section>
    );
  }
}

const mapStateToProps = (state: IState, ownProps: DetailProps): IDetailProps => {
  const {search}: {search: ISearchReducerState<Book>} = state;
  const item: Book = search.item;
  return {
    item
  };
};

const mapDispatchToProps = (dispatch: Dispatch<IState>): ISearchDetailActions => {
  return {
    getBookById: (id: string | number): any => {
      return dispatch(Actions.getBookById({id}));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
