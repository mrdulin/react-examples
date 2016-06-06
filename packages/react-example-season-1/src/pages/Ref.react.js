import React, {Component, PropTypes} from 'react';
import TextInput  from '../components/TextInput.react';

class Ref extends Component {
    render() {
        return (
            <div>
                <h2>ref attribute demo</h2>
                {/*在dom元素上添加ref属性，ref callback的参数是这个dom元素*/}
                <input type="text" ref={ref => this.myTextInput = ref} />
                {/*在组件上添加ref属性，ref callback的参数是这个组件class的实例*/}
                <TextInput ref={textInputInstance => this.textInputComponent = textInputInstance}></TextInput>
                <input type="button" value="Focus the text input" onClick={e => this.handleClick(e)}/>
            </div>
        );
    }

    handleClick(e) {
        // console.log(this.myTextInput);
        if(this.myTextInput !== null) {
            this.myTextInput.focus();
        }

        this.timeout = setTimeout(() => {
            this.textInputComponent.focusInputMethod1();
        }, 2000);

    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }
}

export default Ref;
