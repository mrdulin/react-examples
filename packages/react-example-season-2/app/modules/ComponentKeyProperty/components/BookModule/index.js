import style from './style.module.scss';
import {PropTypes} from 'react';
import Book from '../Book';

class BookModule extends React.Component{
  static defaultProps = {
    title: '',
    subTitle: '',
    books: []
  };

  static propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    books: PropTypes.array
  };

  componentDidMount() {

  }

  render() {
    const {title, subTitle, books = []} = this.props;

    return (
      <div className={style.bookModule}>
        <h1 className={style.bookModuleHeader}>
          <span className={style.bookModuleTitle}>{title}</span>
          <small className={style.bookModuleSubtitle}>{subTitle}</small>
        </h1>
        <section>
          <ul className={style.bookModuleList}>
            {
              books.map((book, idx) => <Book key={idx} book={book} category={title}/>)
            }
          </ul>
        </section>
      </div>
    )
  }
}

export default BookModule;
