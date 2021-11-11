import * as React from 'react';
import * as TestUtils from 'react-dom/test-utils';
import * as Shallow from 'react-test-renderer/shallow';

import SearchList from '../SearchList';
import SearchListItem from '../../ListItem/SearchListItem';
import Book from 'models/Book';

import { IListItemProps } from '../../ListItem';

// 名词解释:

// ReactComponent: React.Component的子类
// DOM element: 网页DOM tree中的element节点
// ReactDOMComponent: ReactDOM对于DOM element tree的虚拟表示，即虚拟DOM
// ReactElement: 调用ReactComponent实例的render，会返回ReactElement实例，本质上是plain js object

const DATA_COUNT = 4;
const datas: Book[] = [];
let instance: any;
const dom: any = {};

type SearchListItemReactElement = React.ReactElement<IListItemProps<Book>>;

for (let i = 0; i < DATA_COUNT; i++) {
  const book: Book = new Book({
    ID: i + 1,
    Title: `react - ${i}`,
    SubTitle: '',
    Description: '',
    Image: '',
    isbn: `${i}`
  });
  datas.push(book);
}

describe('component - SearchList test suites', () => {

  describe('test utils', () => {

    beforeEach(() => {
      instance = TestUtils.renderIntoDocument(<SearchList items={datas} />);
    });

    it('loads without error', () => {
      expect(instance).toBeDefined();
    });

    it('renders item count correctly', () => {
      dom.listComp = TestUtils.findRenderedDOMComponentWithClass(instance, 'list');
      dom.itemComps = TestUtils.scryRenderedComponentsWithType(instance, SearchListItem);


      expect(dom.itemComps).toHaveLength(datas.length);
      expect(instance.props.items).toHaveLength(datas.length);

      Array.from(dom.itemComps).map((itemComp: React.Component<IListItemProps<Book>, any>, idx: number) => {
        expect(TestUtils.isCompositeComponent(itemComp)).toBeTruthy();
        expect(itemComp.props.item).toEqual(datas[idx]);
      });

    });

  });

  describe('shallow rendering', () => {

    let renderer: Shallow.ShallowRenderer;
    let result: React.ReactElement<any>;

    beforeEach(() => {
      renderer = Shallow.createRenderer();
      renderer.render(<SearchList items={datas} />);
      result = renderer.getRenderOutput();
    });

    it('renders correctly', () => {

      const itemElements = result.props.children.filter((component: React.ReactElement<any>) => component.type === SearchListItem);

      expect(result).toEqual(
        <div className="list">
          <SearchListItem item={datas[0]} key={datas[0].id} onClick={itemElements[0].props.onClick}/>
          <SearchListItem item={datas[1]} key={datas[1].id} onClick={itemElements[1].props.onClick}/>
          <SearchListItem item={datas[2]} key={datas[2].id} onClick={itemElements[2].props.onClick}/>
          <SearchListItem item={datas[3]} key={datas[3].id} onClick={itemElements[3].props.onClick}/>
        </div>
      );

    });

    it('renders item count correctly', () => {

      expect(result.type).toBe('div');

      const itemElements = result.props.children.filter((component: React.ReactElement<any>) => component.type === SearchListItem);
      expect(itemElements).toHaveLength(datas.length);

      itemElements.forEach((itemElement: SearchListItemReactElement, idx: number) => {
        expect(TestUtils.isElement(itemElement)).toBeTruthy();
        expect(itemElement.props.item).toEqual(datas[idx]);
      });

    });

  });

});
