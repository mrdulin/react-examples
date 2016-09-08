import React from 'react';

class Form extends React.Component {

    state = {
        input1Value: 'Hello!',
        textarea1Value: 'This is a description',
        textarea3Value: 'Test defaultValue'
    }

    render() {
        return (
            <div id='form-demo'>
                <form onSubmit={(e) => this.submit(e)}>
                    <div>
                        <label>
                            input1:
                            <input name="input1" type="text" value={this.state.input1Value} onChange={(e) => this.inputChange(e)}/>
                        </label>
                    </div>

                    <div>
                        {/*如果没有给设置了value的表单控件指定onChange事件，会报如下warning*/}
                        {/*Warning: Failed form propType: You provided a `value` prop to a form field without an `onChange` handler.*/}
                        {/*This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`. Check the render method of `Form`*/}
                        <textarea name="textarea1" value={this.state.textarea1Value} onChange={(e) => this.textarea1Change(e)}></textarea>
                    </div>

                    <div>
                        {/*在HTML中，<textarea>的值通常是由其子节点设置的*/}
                        {/*在react中使用会报Warning*/}
                        {/*Warning: Use the `defaultValue` or `value` props instead of setting children on <textarea>.*/}
                        {/*反模式：别这样做！*/}
                        {/*在一个有value和defaultValue的环境中，<textarea>的子节点所扮演的角色是有歧义的。有鉴于此，你设置<textarea>值的时候不应使用子节点*/}
                        <textarea name="textarea2">This is html way</textarea>
                    </div>

                    <div>
                        <textarea ref="textarea3" name="textarea3" defaultValue={this.state.textarea3Value} onChange={(e) => this.textarea3Change(e)}></textarea>
                    </div>
                    <div>
                        <button type="submit">提交</button>
                    </div>
                </form>
            </div>
        );
    }

    textarea3Change(e) {
        //下面两种方式都可以
        // this.setState({textarea3Value: e.target.value});
        this.setState({textarea3Value: this.refs.textarea3.value})
    }

    textarea1Change(e) {
        this.setState({textarea1Value: e.target.value});
    }

    submit(e) {
        const target = e.target;
        console.log('input1', target.input1.value);
        console.log('textarea1', target.textarea1.value)
        console.log('textarea3', target.textarea3.value)

        console.log(this.state);
        e.preventDefault();
    }

    inputChange(e) {
        this.setState({
            input1Value: e.target.value
        });
    }
}

export default Form;
