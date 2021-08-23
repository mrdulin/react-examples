import * as React from 'react';

class App extends React.PureComponent<any, any> {
  public render() {
    return (
      <section>
        {this.props.children}
      </section>
    );
  }
}

export default App;
