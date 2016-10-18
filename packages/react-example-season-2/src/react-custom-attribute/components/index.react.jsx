export default class ReactCustomAttribute extends React.Component{
    constructor() {
        super();
        this.state = {dataset: {}};
    }

    componentDidMount() {
        this.setState({dataset: this._p.dataset});
    }

    render() {
        return <div>
            <p ref={ref => this._p = ref} data-id='ML001' data-logClick='click' data-need-login='true' data-c-NAME='novaline.space' data-AGE='23'>我是自定义属性的DOM</p>
            <pre>{JSON.stringify(this.state.dataset, null, 4)}</pre>
        </div>
    }
}
