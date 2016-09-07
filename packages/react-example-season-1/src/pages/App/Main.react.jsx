import React, {Component} from 'react';

class Main extends Component{
    state = {
        filterText: ''
    }
    componentWillReceiveProps(nextProps) {
        // console.log(nextProps.filterText);
        if(this.props.filterText !== nextProps.filterText) {
            this.setState({filterText: nextProps.filterText});
        }
    }
    render() {
        console.count('Main render');
        const children = React.Children.map(this.props.children, (child, index) => {
            return React.cloneElement(child, {filterText: this.state.filterText}); 
        });
        return <div className='main'>{children}</div>
    }
}

export default Main;