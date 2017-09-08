import * as React from 'react';
import { ValidationMap, element } from 'prop-types';

import Rolling from 'components/Rolling';

class CompCollection extends React.Component<any, any> {

  public render(): React.ReactElement<any> {

    return (
      <div>
        <Rolling />
      </div>
    );
  }
}

export {
  CompCollection
};
