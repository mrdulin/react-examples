import React, {Component} from 'react';

class InsertAnElementOnMouseOver extends Component{
    state = {
        insert: false
    }

    render() {
        return (
            <div>
                <h2>鼠标移动到一个元素时，插入另一个元素</h2>
                <div onMouseOver={() => this.onMouseOverHandler()}>鼠标移动到我</div>
                {this.state.insert ? <div>被插入的元素</div> : null}
            </div>
        );
    }

    onMouseOverHandler() {
        this.setState({insert: true});
    }
}

export default InsertAnElementOnMouseOver;
