import Child from './child.react';

export default class ReactEventArgument extends React.Component{

    componentDidMount() {
        this.clickHandler(null, null, 'b2c');
    }

    render() {
        return <div>
            <Child clickHandler={this.clickHandler}></Child>
        </div>  
    }

    clickHandler = (e, v, type = 'b2c') => {
        console.log(Array.prototype.slice.call(arguments));
        console.log(e, v, type);
    
        //if I click the button, I get a wrong type, type is nativeEvent, not my argument.
    }
}   