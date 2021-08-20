import React, {Component} from 'react';

class ReactRouter04 extends Component{
    render() {
        const {main, sidebar} = this.props;
        return <div>
            ReactRouter04
            <div>
                {main}
            </div>
            <div>
                {sidebar}
            </div>
        </div>
    }
}

export default ReactRouter04;