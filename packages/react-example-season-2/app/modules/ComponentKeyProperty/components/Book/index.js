import style from './style.module.scss';
import {PropTypes} from 'react';

class Book extends React.Component {
	static defaultProps = {
		book: {
			image: '',
			title: ''
		}
	};

	static propTypes = {
		book: PropTypes.shape({
			image: PropTypes.string,
			title: PropTypes.string
		})
	};

	componentDidMount() {
		const {book, category} = this.props;
		if(category === 'react') {
			console.log(book);
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		if(nextProps.book.id === this.props.book.id) {
			return false;
		}
		return true;
	}

	render() {
		const {book, category} = this.props;

		return (
			<li className={style.book}>
				<div className={style.bookTopPart}>
					<img className={style.bookImage} src={book.image} alt='book image'/>
				</div>
				<div className={style.bookBottomPart}>
					<h2 className={style.bookTitle}>{book.title}</h2>
				</div>
			</li>
		)
	}
}

export default Book;
