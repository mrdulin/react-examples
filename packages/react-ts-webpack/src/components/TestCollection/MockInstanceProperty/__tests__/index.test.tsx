import * as React from 'react';
import * as Shallow from 'react-test-renderer/shallow';
import * as TestUtils from 'react-dom/test-utils';

import Component from '../';

describe('component - MockInstanceProperty test suites', () => {

  describe('test utils', () => {
    const dom: any = {};
    let comp: any;

    beforeEach(() => {
      comp = TestUtils.renderIntoDocument(<Component />);
      dom.root = TestUtils.findRenderedDOMComponentWithClass(comp, 'mock-instance-property-root');
    });

    it('will not render content when componentInstance.show is false', () => {
      expect(dom.root.children).toHaveLength(0);
    });

    it('will render content when componentInstance.show is false', () => {
      TestUtils.Simulate.click(dom.root);
      expect(dom.root.children).toHaveLength(1);

      dom.content = TestUtils.findRenderedDOMComponentWithTag(comp, 'p');
      expect(dom.content.textContent).toBe('react testing');

    });

  });

  describe('shallow render', () => {

    let renderer: Shallow.ShallowRenderer;
    let result: React.ReactElement<any>;

    beforeEach(() => {
      renderer = Shallow.createRenderer();
      renderer.render(<Component />);
      result = renderer.getRenderOutput();
    });

    it('will not render content when componentIntance.show is false', () => {
      expect(result.type).toBe('div');
      expect(result.props.className).toBe('mock-instance-property-root');
      expect(result.props.children).toBeNull();
    });

    it('will render content when componentIntance.show is true', () => {

      result.props.onClick();
      result = renderer.getRenderOutput();

      expect(result.props.children).toEqual(<p>react testing</p>);

    });

  });

});
