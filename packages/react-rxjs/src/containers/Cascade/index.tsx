import * as React from 'react';
import { ajax } from 'rxjs/observable/dom/ajax';
import { requestPage } from '../../actions/page';
import { clearModuleById } from '../../actions/module';
import { connect } from 'react-redux';
import * as Rx from 'rxjs';
import { ISubjectObject, ISubscriptionObject } from '../../interfaces';

interface IProps {
  page: any;
  modules: any;
}

interface IActions {
  requestPage: (params: any) => void;
  clearModuleById: (id: string) => void;
}

type Props = IProps & IActions;

class Container extends React.PureComponent<Props, any>{

  private subjects: ISubjectObject<any> = {};
  private subscriptions: ISubscriptionObject = {};

  public static defaultProps: IProps = {
    page: {},
    modules: {}
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
    const { modules } = this.props;

    console.count('render count');

    return (
      <section>
        {
          error ? <p>{errMsg}</p> :
            <section>
              <h2>{content.title}</h2>
              {
                Object.keys(modules).map((id: string, idx: number) => {
                  const module = modules[id];

                  return (
                    <div key={id}>
                      <h3>moduleId: {id}</h3>
                      {
                        module.error ? <p>{module.errMsg}</p> : <p>module content: {modules[id].name}</p>
                      }
                      <button type='button' onClick={() => this.onClear(id)}>clear</button>
                    </div>
                  )
                })
              }
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

  private onClear(id: string) {
    this.props.clearModuleById(id);
  }
}

export default connect(
  ({ page, modules }) => ({ page, modules }),
  ({ requestPage, clearModuleById })
)(Container);
