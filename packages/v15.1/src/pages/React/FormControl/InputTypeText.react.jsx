import React, {Component} from 'react';

class InputTypeText extends Component{
    state = {
        value: 'novaline',
        text: 'test test test',
        textNull: null,
        textUndefined: undefined,
        textEmptyString: '',
    }

    constructor() {
        super();
        this.handleTextChange = ::this.handleTextChange;
    }

    handleTextChange(e) {
        console.log(this.state.text);
        console.log(e.target.value);
        this.setState({text: e.target.value});
    }

    render() {
        const {value, text, textNull, textUndefined, textEmptyString} = this.state;
        return <div>
            <div>
                <h3>例1：</h3>
                <label htmlFor="">input-value(non-empty): </label>
                <input type="text" value={value}/>
                <p>报错：<code>Warning: Failed form propType: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`. Check the render method of `InputTypeText`.</code></p>
                <p>设置了<code>input</code>的<code>value</code>属性，则这是一个controlled component，用户将不能与之交互，不能改变它的值。</p>
                <div>
                    数据：<pre>this.state.value: {value}</pre>
                </div>
            </div>
            <div>
                <h3>例2：</h3>
                <label htmlFor="">input-defaultValue：</label>
                <input type="text" defaultValue={value}/>
                <p>设置了<code>defaultValue</code>属性，则这是一个uncontrolled component，用户输入的值将直接反应在视图上。</p>
                <div>
                    数据：<pre>this.state.value: {value}</pre>
                </div>
            </div>
            <div>
                <h3>例3：</h3>
                <label htmlFor="">input-value(null)：</label>
                <input type="text" value={textNull}/>
                <p>本来你想要一个controlled component，即设置了<code>value</code>属性值的input，用户不能改变其值。但是意外地，<code>value</code>属性被设置为<code>null</code>，这时候用户依旧可以改变其值。</p>
                <div>
                    数据：<pre>this.state.textNull: {JSON.stringify(textNull)}</pre>
                </div>
            </div>
            <div>
                <h3>例4：</h3>
                <label htmlFor="">input-value(undefined)：</label>
                <input type="text" value={textUndefined}/>
                <p>本来你想要一个controlled component，即设置了<code>value</code>属性值的input，用户不能改变其值。但是意外地，<code>value</code>属性被设置为<code>undefined</code>，这时候用户依旧可以改变其值。</p>
                <div>
                    数据：<pre>this.state.textUndefined: {typeof textUndefined === 'undefined' ? 'undefined' : textUndefined}</pre>
                </div>
            </div>
            <div>
                <h3>例5：</h3>
                <label htmlFor="">input-value({"{''}"})：</label>
                <input type="text" value={textEmptyString}/>
                <p><code>value</code>属性值是空字符串的是controlled component。</p>
                <div>
                    数据：<pre>this.state.textEmptyString: {textEmptyString}</pre>
                </div>
            </div>
            <div>
                <h3>例6：</h3>
                <label htmlFor="">input-value('')：</label>  
                <input type="text" value=''/>
                <p><code>value</code>属性值是空字符串的是controlled component。</p>
            </div>
            <div>
                <h4>例7：</h4>
                <label htmlFor="">input-value-onChange：</label>
                <input type="text" value={text} onChange={this.handleTextChange}/>
                <div>
                    数据：<pre>this.state.text: {text}</pre>
                </div>
            </div>
        </div>
    }
}

export default InputTypeText;