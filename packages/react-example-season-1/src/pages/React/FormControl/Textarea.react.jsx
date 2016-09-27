import React, {Component} from 'react';

class Textarea extends Component{
    render() {
        return <div>
            <div>
                {/*如果没有给设置了value的表单控件指定onChange事件，会报如下warning*/}
                {/*Warning: Failed form propType: You provided a `value` prop to a form field without an `onChange` handler.*/}
                {/*This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`. Check the render method of `Form`*/}
                <textarea name="textarea1" value={this.state.textarea1Value} onChange={(e) => this.textarea1Change(e)}></textarea>
            </div>

            <div>
                <textarea name="textarea2">This is html way</textarea>
                <p>在HTML中，<code>textarea</code>的值通常是由其子节点设置的</p>
                <p>在react中使用会报Warning</p>
                <p>在一个有value和defaultValue的环境中，<code>textarea</code>的子节点所扮演的角色是有歧义的。有鉴于此，你设置<code>textarea</code>值的时候不应使用子节点</p>
            </div>

            <div>
                {/*如果value不是null或者undefined，则该用户不能与该输入元素交互（不能输入，更改值）*/}
                <textarea name="" id="" cols="30" rows="10" value={text} onChange={this.handleTextChange}></textarea>
            </div>

            <div>
                {/*value是空字符串也不能更改，必须是null或者undefined才行 */}
                <textarea name="" id="" cols="30" rows="10" value={''} onChange={this.handleTextChange}></textarea>
            </div>

            <div>
                <textarea name="" id="" cols="30" rows="10" defaultValue={text} onChange={this.handleTextChange}></textarea>
            </div>
        </div>
    }
}

export default Textarea;