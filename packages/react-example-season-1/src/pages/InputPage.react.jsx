import React, {Component} from 'react';

class InputPage extends Component{
    state = {
        value: 'novaline',
        text: 'test test test'
    }

    constructor() {
        super();
        this.handleTextChange = ::this.handleTextChange;
    }

    componentWillMount() {
        setTimeout(() => {
            this.setState({value: 'mrdulin', text: '冰红茶'});
        }, 2000);
    }

    handleTextChange(e) {
        console.log(this.state.text);
        console.log(e.target.value);
        this.setState({text: e.target.value});
    }

    render() {
        const {value, text} = this.state;
        return <div>
            <div>
                <label htmlFor="">input-value(non-empty)</label>
                <input type="text" value={value}/>
            </div>
            <div>
                <label htmlFor="">input-defaultValue</label>
                <input type="text" defaultValue={value}/>
            </div>
            <div>
                <label htmlFor="">input-value({null})</label>
                <input type="text" value={null}/>
            </div>
            <div>
                <label htmlFor="">input-value(undefined)</label>
                <input type="text" value={undefined}/>
            </div>
            <div>
                <label htmlFor="">input-value({''})</label>
                <input type="text" value={''}/>
            </div>
            <div>
                <label htmlFor="">input-value('')</label>
                <input type="text" value=''/>
            </div>

            <div>
                {/*Warning: Use the `defaultValue` or `value` props instead of setting children on <textarea>.*/}
                <textarea name="" id="" cols="30" rows="10" onChange={this.handleTextChange}>{text}</textarea>
                <p>{text}</p>
            </div>
            <div>
                {/*如果value不是null或者undefined，则该用户不能与该输入元素交互（不能输入，更改值）*/}
                <textarea name="" id="" cols="30" rows="10" value={text} onChange={this.handleTextChange}></textarea>
                <p>{text}</p>
            </div>
            <div>
                {/*value是空字符串也不能更改，必须是null或者undefined才行 */}
                <textarea name="" id="" cols="30" rows="10" value={''} onChange={this.handleTextChange}></textarea>
                <p>{text}</p>
            </div>
            <div>
                
                <textarea name="" id="" cols="30" rows="10" defaultValue={text} onChange={this.handleTextChange}></textarea>
                <p>{text}</p>
            </div>
            <div>

            </div>
        </div>
    }
}

export default InputPage;