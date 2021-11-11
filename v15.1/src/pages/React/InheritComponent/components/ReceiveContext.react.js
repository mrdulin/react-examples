import React, {Component, PropTypes} from 'react';

class ReceiveContext extends Component{
    constructor(props, context) {
        // console.log(super(props, context));
        console.log(super(props));

        //context是父组件通过getChildContext方法和childContextTypes属性，传过来的数据
        console.log(context);

    }
    render() {
        return <div style={{color: this.context.color}}>
            牛肉面
        </div>
    }
}

ReceiveContext.contextTypes = {
    color: PropTypes.string
}

export default ReceiveContext;