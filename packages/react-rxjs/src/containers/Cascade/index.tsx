import * as React from 'react';
import { ajax } from 'rxjs/observable/dom/ajax';
import { requestPage } from '../../actions/page';
import { connect } from 'react-redux';
import * as Rx from 'rxjs';
import { ISubjectObject, ISubscriptionObject } from '../../interfaces';

interface IProps {
  page: any;
}

interface IActions {
  requestPage: (params: any) => void;
}

type Props = IProps & IActions;

class Container extends React.PureComponent<Props, any>{

  private subjects: ISubjectObject<any> = {};
  private subscriptions: ISubscriptionObject = {};

  public static defaultProps: IProps = {
    page: {}
  };

  public constructor() {
    super();
    this.subjects.start$ = new Rx.Subject();
    this.subscriptions.start$$ = this.subjects.start$.sampleTime(1000).subscribe(this.onStartObserver);
  }

  public componentWillUnmount() {
    this.subscriptions.start$$.unsubscribe();
  }

  public render(): React.ReactElement<Props> {
    const { page: { content, error, errMsg } } = this.props;

    return (
      <section>
        {
          error ? <p>{errMsg}</p> :
            <section>
              <h2>{content.title}</h2>
            </section>
        }

        <button type='button' onClick={this.onStart}>start</button>
      </section>
    );
  }

  private onStartObserver = (type: string): void => {
    this.props.requestPage({ type });
  }

  private onStart = (): void => {
    const type: string = 'o2o';
    this.subjects.start$.next(type);
  }
}

export default connect(
  ({ page }) => ({ page }),
  ({ requestPage })
)(Container);
