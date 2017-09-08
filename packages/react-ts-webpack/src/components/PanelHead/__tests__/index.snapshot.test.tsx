/**
 * Created by dulin on 2017/7/6.
 */
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import PanelHead from '../';

describe('component - PanelHead test suites', () => {
  
  it('renders correctly', () => {
    const component: renderer.Renderer = renderer.create(
      <PanelHead title="主标题" subTitle="副标题"/>
    );
    
    const tree = component.toJSON();
    // console.log(tree);
    expect(tree).toMatchSnapshot();
  });
  
  
});
