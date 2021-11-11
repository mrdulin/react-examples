import * as React from "react";
import { create, ReactTestInstance } from "react-test-renderer";

import PanelHead from "..";

describe("component - PanelHead test suites", () => {
  it("renders correctly", () => {
    const component: ReactTestInstance = create(
      <PanelHead title="主标题" subTitle="副标题" />
    );

    const tree = component.toJSON();
    // console.log(tree);
    expect(tree).toMatchSnapshot();
  });
});
