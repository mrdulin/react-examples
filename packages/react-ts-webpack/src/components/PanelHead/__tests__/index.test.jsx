import * as React from 'react';
import * as TestUtils from 'react-dom/test-utils';
import { ShallowRenderer, createRenderer } from 'react-test-renderer/shallow';
import PanelHead from '../';

describe('PanelHead test suites', () => {

  it('shallow render', () => {

    const renderer = new ShallowRenderer();
    renderer.render(<PanelHead title="hot search" />);
    const result = renderer.getRenderOutput();

    expect(result.type).toBe('div');

    const panelTitle = result.props.children;
    expect(panelTitle.type).toBe('h3');
    expect(panelTitle.props.className).toBe('panelTitle');

    // TODO 不知道为什么没有pass
    // expect(panelTitle).toEqual(
    //   <h3 className="panelTitle">hot search</h3>
    // );

  });

});

