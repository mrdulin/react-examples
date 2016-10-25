import Child from './child';

export default class GetWrappedInstance extends React.Component{
    constructor() {
        super();
        this.state = {isEqual: false}
    }

    componentDidMount() {
        this.setState({isEqual: this.childComponent.getWrappedInstance() === this.childComponent.refs.WrappedComponent});
    }
    render() {
        return <div>
            GetWrappedInstance

            <Child ref={ref => this.childComponent = ref}/>
            <p>this.childComponent.getWrappedInstance() === this.childComponent.refs.WrappedComponent</p>
            <p>结果: {this.state.isEqual.toString()}</p>
        </div>
    }
}

