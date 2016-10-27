import Child from './child';
import AnotherChild from './anotherChild';

export default class GetWrappedInstance extends React.Component{
    constructor() {
        super();
        this.state = {isEqual: false}
    }

    componentDidMount() {
        // console.log(this.AnotherChildComponent.getWrappedInstance());
        console.log(this.AnotherChildComponent.refs.WrappedComponent);
        this.setState({isEqual: this.childComponent.getWrappedInstance() === this.childComponent.refs.WrappedComponent});
    }
    render() {
        return <div>
            GetWrappedInstance

            <Child ref={ref => this.childComponent = ref}/>
            <AnotherChild ref={ref => this.AnotherChildComponent = ref}/>
            <p>this.childComponent.getWrappedInstance() === this.childComponent.refs.WrappedComponent</p>
            <p>结果: {this.state.isEqual.toString()}</p>
            <br/>
            <p>如果没有使用{'{withRef: true}'}，调用getWrappedInstance方法会报错:</p>
            <p>Uncaught Error: To access the wrapped instance, you need to specify {'{ withRef: true }'} as the fourth argument of the connect() call.</p>
            <p>this.AnotherChildComponent.refs.WrappedComponent的的值是undefined</p>
        </div>
    }
}

