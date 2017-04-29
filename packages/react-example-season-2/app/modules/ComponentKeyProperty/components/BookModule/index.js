import style from './style.module.scss';
import {PropTypes} from 'react';
import Book from '../Book';
import {connect} from 'react-redux';
import {requestDoubanBook} from '../../action';
import {bindActionCreators} from 'redux';
import {AD_MAP} from '../../helper.js';

@connect(
  state => ({}),
  dispatch => ({
    actions: bindActionCreators({requestDoubanBook}, dispatch)
  })
)
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
    const {actions, title} = this.props;
    const adQuery = AD_MAP.get(title);
    if(adQuery) {
      actions.requestDoubanBook(adQuery, title);
    }
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
