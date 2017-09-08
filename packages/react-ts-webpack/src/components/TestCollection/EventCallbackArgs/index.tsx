import * as React from 'react';

interface IProps {
  onClick?: (msg: string) => void;
}

interface IState {
  value: string;
}

export default class extends React.Component<IProps, IState> {

  public static defaultProps: IProps = {
    onClick: (msg: string): void => { }
  };

  public state: IState = {
    value: ''
  };

  public render(): React.ReactElement<IProps> {
    return (
      <div onClick={() => this.onClick('react is awesome')} className="root">
        <input type="text" onChange={this.onInputChange} value={this.state.value} />
      </div>
    );
  }

  private onClick(msg: string): void {
    console.log(msg);
    if (this.props.onClick) {
      this.props.onClick(msg);
    }
  }

  private onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    this.setState({ value });
  }
}
