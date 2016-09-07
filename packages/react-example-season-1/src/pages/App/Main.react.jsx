import React, {Component} from 'react';

class Main extends Component{
    componentWillReceiveProps(nextProps) {
        console.log(this.props.data);
        console.log(nextProps.data);
    }
    render() {
        return <div className='main'>
            {this.props.children}
        </div>
    }
}

export default Main;