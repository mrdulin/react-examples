import * as React from 'react';
import { requestAllData } from '../../actions/promiseAll';
import { connect } from 'react-redux';

interface IProps {
  promiseAll: any
}

interface IActions {
  requestAllData: (names: string[]) => void;
}

type Props = IProps & IActions;

class Container extends React.PureComponent<Props, any> {

  public render() {
    return (
      <div>
        <p>promise.all的rxjs实现</p>
        <button type='button' onClick={this.onRequestAllData}>requestAllData</button>
      </div>
    )
  }

  private onRequestAllData = () => {
    this.props.requestAllData(['react', 'rxjs']);
  }
}

export default connect(
  ({ promiseAll }) => ({ promiseAll }),
  ({ requestAllData })
)(Container);
