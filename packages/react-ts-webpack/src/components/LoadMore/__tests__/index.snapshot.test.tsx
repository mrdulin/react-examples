/**
 * Created by dulin on 2017/7/6.
 */
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import LoadMore from '../';

interface IRenderer extends renderer.Renderer {
  getInstance(): any;
}

const create = (nextElement: React.ReactElement<any>, options?: renderer.TestRendererOptions): IRenderer => {
  return renderer.create(nextElement, options) as IRenderer;
};

describe('component - LoadMore test suites', () => {

  const onLoadMore = (cb: () => void): void => {
    console.log('onLoadMore');
  };

  it('renders correctly when isBottom=true, hasMore=true, isLoading=true', () => {

    const component: IRenderer = create(
      <LoadMore hasMore={true} onLoadMore={onLoadMore}/>
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
  //   const component: IRenderer = create(
  //     <LoadMore hasMore={false} onLoadMore={onLoadMore}/>
  //   );
  //   expect(component.toJSON()).toMatchSnapshot();
  //
  // });
  //
  // it('does not render when isBottom=false, hasMore=true, isLoading=false', () => {
  //  
  //   const component: IRenderer = create(
  //     <LoadMore hasMore={false} onLoadMore={onLoadMore}/>
  //   );
  //   expect(component.toJSON()).toMatchSnapshot();
  // });
  //
  // it('renders correctly when isBottom=true, hasMore=true, isLoading=false', () => {
  //  
  //   const component: IRenderer = create(
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
