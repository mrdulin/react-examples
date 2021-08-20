import * as React from "react";
import { ShallowRenderer, createRenderer } from "react-test-renderer/shallow";

import LoadMore from "..";

describe("component - LoadMore test suites", () => {
  describe("shallow rendering test suites", () => {
    let renderer: ShallowRenderer;
    let instance: React.ReactElement<any>;

    beforeEach(() => {
      renderer = createRenderer();
    });

    it("renders correctly with initial props", () => {
      renderer.render(<LoadMore hasMore={false} onLoadMore={() => {}} />);
      instance = renderer.getRenderOutput();

      expect(instance.type).toBe("a");
    });

    it("renders correctly with hasMore=true, isBottom=true, isLoading=false", () => {
      renderer.render(<LoadMore hasMore={true} onLoadMore={() => {}} />);
      instance = renderer.getRenderOutput();

      // console.log('instance', instance);

      // 不能这么搞
      // (instance as any).setState({isLoading: false});
      // expect((instance as any).state.isLoading).toBeFalsy();
    });
  });
});
