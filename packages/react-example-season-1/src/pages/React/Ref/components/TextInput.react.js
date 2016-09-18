import React, {Component, PropTypes} from 'react';

class TextInput extends Component{

    //相当于es5中，定义在构造函数原型上的方法，所有实例都可见该方法
    focusInputMethod1() {
        this.refs.textInput.focus();
    }

    //在es6的class中这样定义静态方法报错
    // statics: {
    //     focusInputMethod2: function() {}
    // }

    //es6定义静态方法，静态方法不会被实例继承，而是直接通过类来调用
    // static focusInputMethod3() {}

    render() {
        return (
            <div>
                <input type="text" ref="textInput" placeholder="text input component"/>
            </div>
        );
    }

};



// console.log('TextInput.focusInputMethod3', TextInput.focusInputMethod3);

export default TextInput;
