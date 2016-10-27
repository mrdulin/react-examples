import {connect} from 'react-redux';

class AnotherChild extends React.Component {
    render() {
        return <div>AnotherChild component</div>
    }
}

export default connect()(AnotherChild);