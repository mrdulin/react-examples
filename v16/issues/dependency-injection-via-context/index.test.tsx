import { render } from '@testing-library/react';
import React from 'react';
import { DIContext, DIValue, SharedComponent } from '.';

describe('DI via react context', () => {
  test('should pass', () => {
    render(
      <DIContext.Provider value={DIValue}>
        <SharedComponent />
      </DIContext.Provider>,
    );
  });
});
