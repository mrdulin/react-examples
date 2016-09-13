import React, {Component} from 'react';

class LogicalOperators extends Component{
    render() {
        const num = 0;
        return <div>
            <p>需求：当购物车商品数量为0时，不显示括号和数量</p>
            <p>视图：</p>
            <p>购物车{num && ('('+ num +')')} - <i>错误</i></p> 
            <p>购物车{`${num && (num)}`} - <i>错误</i></p>
            <p>购物车{`${num && ('('+ num +')')}`} - <i>错误</i></p> 
            <p>购物车{num ? '('+ num +')' : ''} - <i>正确</i></p> 
            <hr/>
            <p>结论：</p>
            <p>使用&&运算无法实现需求，很奇怪。三目运算符可以实现需求</p>
        </div>
    }
}

export default LogicalOperators;