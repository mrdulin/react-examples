import RouterHOC from '../hoc/';
import {connect} from 'react-redux';

class MyComponent extends React.Component{
    componentDidMount() {
        console.dir(this.props.RouterHOC);
    }
    render() {
        return <div>
            <button onClick={this.clickHandler}>测试</button>
        </div>
    }
    clickHandler = e => {
        console.log(this.props.redirect);
        this.props.redirect('/getWrappedInstance')
    }
}

const mapStateToProps = state => ({
    RouterHOC: state.RouterHOC
})

export default RouterHOC(connect(mapStateToProps)(MyComponent));