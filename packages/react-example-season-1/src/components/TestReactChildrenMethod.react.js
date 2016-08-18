import React, {Component} from 'react';

class TestReactChildrenMethod extends Component{

    test1() {
        const count = React.Children.count(this.props.children);

        //当组件没有包含子元素，或者包含的直接子元素的个数大于1个时，报如下错误
        //Uncaught Invariant Violation: onlyChild must be passed a children with exactly one child.
        const onlyChild = React.Children.only(this.props.children);

        console.log(React.Children);
        console.log(count);
        console.log(this.props.children);
        // console.log(this.props.children.count);    //undefined;
        console.log(onlyChild);
        console.log(onlyChild === this.props.children);    //true
    }
    componentDidMount() {
        // this.test1();
    }
    render() {

        const childDoms = React.Children.map(this.props.children, (child) => {
            console.log(child);
            return child;
        });


        // const childDoms = this.props.children.map((child) => {
        //     console.log(child);
        //     return child;
        // })
        return <div>
            {childDoms}
        </div>
    }
}

export default TestReactChildrenMethod;
