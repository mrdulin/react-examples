/**
 * Created by dulin on 2017/6/21.
 */
import * as React from 'react';
import { ValidationMap, element } from 'prop-types';
import { Provider } from 'react-redux';
import store from 'store';

interface IAppProps {
  children: React.ReactChildren;
}

interface IAppState {
}
interface IAppContext {
}

class App extends React.Component<IAppProps, IAppState> {

  public static defaultProps: IAppProps = {
    children: {} as React.ReactChildren
  };

  public static propTypes: ValidationMap<IAppProps> = {
    children: element
  };

  constructor(props: IAppProps, context?: IAppContext) {
    super(props, context);
  }

  public render(): React.ReactElement<IAppProps> {
    const { children } = this.props;
    return (
      <Provider store={store}>
        <div>
          {children}
        </div>
      </Provider>
    );
  }
}

export default App;
