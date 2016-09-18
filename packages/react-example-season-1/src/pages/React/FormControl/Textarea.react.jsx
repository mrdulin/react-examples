import React, {Component} from 'react';

class Textarea extends Component{
    render() {
        return <div>
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
        </div>
    }
}

export default Textarea;