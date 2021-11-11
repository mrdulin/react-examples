import * as React from "react";
import * as shallow from "react-test-renderer/shallow";
import * as TestUtils from "react-dom/test-utils";

import SearchListItem from "..";
import Book from "models/Book";
import { IListItemProps } from "../..";

type IProps = IListItemProps<Book>;
type RComponent = React.Component<IProps, any>;
interface IDom {
  [name: string]: any;
}

const imageUrl: string = "http://7xp9vw.com1.z0.glb.clouddn.com/image/5.jpg";
const dom: IDom = {};
const book: Book = new Book({
  ID: 1,
  Title: "react",
  Description: "react is awesome",
  SubTitle: "sss",
  Image: imageUrl,
  isbn: "123",
});

describe("component - SearchListItem test suites with test utils", () => {
  let renderer: shallow.ShallowRenderer;
  let result: React.ReactElement<IProps>;

  describe("shallow rendering", () => {
    beforeEach(() => {
      renderer = shallow.createRenderer();
    });

    it("renders correctly", () => {
      renderer.render(<SearchListItem item={book} onClick={() => {}} />);
      result = renderer.getRenderOutput();
      expect(result.type).toBe("div");
      expect(result.props.children).toHaveLength(2);
    });

    it("triggers click event correctly", (done: jest.DoneCallback) => {
      const clickCallback = () => done();

      renderer.render(<SearchListItem item={book} onClick={clickCallback} />);
      result = renderer.getRenderOutput();
      result.props.onClick();
    });
  });

  describe("util tests", () => {
    let component: any;

    it("renders text correctly", () => {
      component = TestUtils.renderIntoDocument<IProps>(
        <SearchListItem item={book} onClick={() => {}} />
      );
      dom.title = TestUtils.findRenderedDOMComponentWithTag(component, "h2");
      dom.description = TestUtils.findRenderedDOMComponentWithTag(
        component,
        "p"
      );
      dom.image = TestUtils.findRenderedDOMComponentWithTag(component, "img");

      expect(TestUtils.isDOMComponent(dom.title)).toBeTruthy();
      expect(TestUtils.isDOMComponent(dom.description)).toBeTruthy();
      expect(TestUtils.isDOMComponent(dom.image)).toBeTruthy();

      expect(dom.title.textContent).toBe(book.title);
      expect(dom.description.textContent).toBe(book.description);
      expect((dom.image as React.HTMLProps<HTMLImageElement>).src).toBe(
        book.image
      );
    });

    it("triggers click event correctly", (done: jest.DoneCallback) => {
      const clickCallback = () => done();
      component = TestUtils.renderIntoDocument<IProps>(
        <SearchListItem item={book} onClick={clickCallback} />
      );

      dom.root = TestUtils.findRenderedDOMComponentWithClass(
        component,
        "listItem"
      );

      expect(dom.root).toBeDefined();
      expect(TestUtils.isDOMComponent(dom.root)).toBeTruthy();

      TestUtils.Simulate.click(dom.root);
    });
  });
});
