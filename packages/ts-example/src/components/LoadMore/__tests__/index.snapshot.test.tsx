import * as React from "react";
import {
  create,
  ReactTestInstance,
  TestRendererOptions,
} from "react-test-renderer";

import LoadMore from "..";

describe("component - LoadMore test suites", () => {
  const onLoadMore = (cb: () => void): void => {
    console.log("onLoadMore");
  };

  it("renders correctly when isBottom=true, hasMore=true, isLoading=true", () => {
    const component: ReactTestInstance = create(
      <LoadMore hasMore={true} onLoadMore={onLoadMore} />
    );

    // const componentInstance = component.getInstance();
    // Object.defineProperty(componentInstance, 'isBottom', {
    //   get: jest.fn(() => true)
    // });
    // componentInstance.setState({isLoading: true});
    //
    // console.log(componentInstance.state);
    // expect(componentInstance.props.hasMore).toBeTruthy();
    // expect(componentInstance.isBottom).toBeTruthy();
    const tree = component.toJSON();

    console.log(tree);
    // expect(tree.props.hasMore).toBeTruthy();

    expect(tree).toMatchSnapshot();
  });

  // it('does not render when isBottom=false, hasMore=false, isLoading=false', () => {
  //
  //   const component: ReactTestInstance = create(
  //     <LoadMore hasMore={false} onLoadMore={onLoadMore}/>
  //   );
  //   expect(component.toJSON()).toMatchSnapshot();
  //
  // });
  //
  // it('does not render when isBottom=false, hasMore=true, isLoading=false', () => {
  //
  //   const component: ReactTestInstance = create(
  //     <LoadMore hasMore={false} onLoadMore={onLoadMore}/>
  //   );
  //   expect(component.toJSON()).toMatchSnapshot();
  // });
  //
  // it('renders correctly when isBottom=true, hasMore=true, isLoading=false', () => {
  //
  //   const component: ReactTestInstance = create(
  //     <LoadMore hasMore={true} onLoadMore={onLoadMore}/>
  //   );
  //
  //   const componentInstance = component.getInstance();
  //   Object.defineProperty(componentInstance, 'isBottom', {
  //     get: jest.fn(() => true)
  //   });
  //
  //   expect(componentInstance.isBottom).toBeTruthy();
  //   expect(componentInstance.props.hasMore).toBeTruthy();
  //   expect(component.toJSON()).toMatchSnapshot();
  //
  //
  // });
});
