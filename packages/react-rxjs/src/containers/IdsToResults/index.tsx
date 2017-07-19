import * as React from 'react';
import { requestBooks } from '../../actions/book';
import { connect } from 'react-redux';

interface IProps {
  bookModules: any
}

interface IActions {
  requestBooks: (names: string[]) => void;
}

type Props = IProps & IActions;

class Container extends React.PureComponent<Props, any> {

  public static defaultProps: IProps = {
    bookModules: {}
  }

  public render() {
    console.count('render count');
    const { bookModules } = this.props;

    return (
      <section>
        <button type='button' onClick={() => this.onRequestBook(['react', 'angular', 'javascript'])}>get books</button>

        {
          Object.keys(bookModules).map((name: any, idx: number, self: any) => {
            const bookModule: any = bookModules[name];
            const books: any[] = bookModule.Books;
            const isLoading: boolean = bookModule.isLoading;
            return (
              <div key={name}>
                <h3>{name}</h3>
                {
                  isLoading ? <p>模块加载中...</p> :
                    (
                      books ?
                        <ul>
                          {
                            books.map((book: any, idx: number) => {
                              return (
                                <li key={idx}>{book.Title}</li>
                              );
                            })
                          }
                        </ul> : <div>
                          <p>{bookModule.message}</p>
                          <button type='button' onClick={() => this.onRequestBook([name])}>重新尝试请求数据</button>
                        </div>
                    )
                }
              </div>
            )
          })
        }

      </section>
    );
  }

  private onRequestBook(names: string[]) {
    this.props.requestBooks(names);
  }
}

export default connect(
  ({ bookModules }) => ({ bookModules }),
  ({ requestBooks })
)(Container);
