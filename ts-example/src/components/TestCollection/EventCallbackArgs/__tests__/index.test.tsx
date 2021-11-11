import * as React from "react";
import * as TestUtils from "react-dom/test-utils";
import * as Shallow from "react-test-renderer/shallow";
import Component from "..";

describe("component - EventCallbackArgs test suites", () => {
  const dom: any = {};

  describe("test utils", () => {
    it("should be get the correct value by trigger the click event", (done: jest.DoneCallback) => {
      expect.assertions(1);

      const clickCallback = (msg: string): void => {
        expect(msg).toBe("react is awesome");
        done();
      };

      const comp: any = TestUtils.renderIntoDocument(
        <Component onClick={clickCallback} />
      );
      dom.root = TestUtils.findRenderedDOMComponentWithClass(comp, "root");

      TestUtils.Simulate.click(dom.root);
    });

    it("should be save the correct value to state when trigger input change event", () => {
      const comp: any = TestUtils.renderIntoDocument(<Component />);
      dom.input = TestUtils.findRenderedDOMComponentWithTag(comp, "input");

      expect(comp.state.value).toBe("");

      const value: string = "angular is awesome";
      const eventData: TestUtils.SyntheticEventData = {
        target: { value } as any,
      };
      TestUtils.Simulate.change(dom.input, eventData);

      expect(comp.state.value).toBe(value);
    });
  });

  describe("shallow rendering", () => {
    let renderer: Shallow.ShallowRenderer;
    let instance: React.ReactElement<any>;

    beforeEach(() => {
      renderer = Shallow.createRenderer();
    });

    it("renders correctly", () => {
      renderer.render(<Component />);
      instance = renderer.getRenderOutput();

      expect(instance.type).toBe("div");
      expect(instance.props.className).toBe("root");
      const inputInstance = instance.props.children;

      expect(inputInstance.type).toBe("input");
      expect(inputInstance.props.onChange).toBeDefined();
      expect(inputInstance).toEqual(
        <input type="text" onChange={inputInstance.props.onChange} value="" />
      );
    });

    it("should be get the correct value by trigger the click event", (done: jest.DoneCallback) => {
      const clickCallback = (msg: string) => {
        expect(msg).toBe("react is awesome");
        done();
      };

      renderer.render(<Component onClick={clickCallback} />);
      instance = renderer.getRenderOutput();
      instance.props.onClick();
    });
  });
});
