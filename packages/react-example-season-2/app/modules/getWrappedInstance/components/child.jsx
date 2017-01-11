import {connect} from 'react-redux';

class Child extends React.Component {
    render() {
        return <div>child component</div>
    }
}

export default connect(null, null, null, {withRef: true})(Child)