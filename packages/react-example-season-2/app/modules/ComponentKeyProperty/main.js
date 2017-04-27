import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from './action';

import style from './style.module.scss';
import BookModule from './components/BookModule';
import Tabs from './components/Tabs';
import Tab from './components/Tab';

const querys = ['react', 'angular', 'jquery'];
const SUB_TITLE_MAP = new Map([
  ['react', 'A JavaScript library for building user interfaces'],
  ['angular', 'Superheroic JavaScript MVW Framework'],
  ['jquery', 'The Write Less, Do More, JavaScript Library.']
])

@connect(state => {
  const {page_componentKeyProperty} = state;

  return {
    ...page_componentKeyProperty
  };
}, dispatch => {
	return {actions: bindActionCreators(actionCreators, dispatch)};
})
class Container extends React.Component {
	componentDidMount() {
    const {actions} = this.props;
    actions.init(querys);
  }
	render() {
    const {bookModuleByName = {}} = this.props;
		return (
			<div>
        <div className={style.pageContent}>
          {
            Object.keys(bookModuleByName).map((moduleName, idx) => {
              const subTitle = SUB_TITLE_MAP.get(moduleName);
              const books = bookModuleByName[moduleName];
              if(!books) return null;
              const {length: bookCount} = books;
              if(!bookCount) return null;

              return <BookModule key={idx} title={moduleName} subTitle={subTitle} books={books}/>
            })
          }
        </div>
        <div className={style.pageFooter}>
          <Tabs>
            {
              querys.map((query, idx) => {
                return <Tab key={idx} label={query}/>
              })
            }
          </Tabs>
        </div>
      </div>
		)
	}
}

export default Container;
