import * as React from 'react';

export default class extends React.Component<any, any> {
  public show: boolean = false;

  public toggle = (): React.ReactInstance => {
    this.show = !this.show;
    this.forceUpdate();
    return this;
  }

  public render(): React.ReactElement<any> {

    return (
      <div onClick={this.toggle} className="mock-instance-property-root">
        {this.show ? <p>react testing</p> : null}
      </div>
    );
  }
}
