import React, {Component} from 'react';
import {connect} from 'react-redux';

class ChangeStateTreeRefData extends Component{

    componentWillReceiveProps(nextProps) {
        console.count('componentWillReceiveProps');
    }

    render() {
        let {editor} = this.props;
        console.log(editor);
        return <div>
            <p>视图：</p>
            <p>Editor Name is {editor.name}</p>
            <p>Company is {editor.company}</p>
            <div>
                <input type="text" defaultValue={editor.name} onChange={this.handleEditorNameChange}/>
            </div>
            <div>
                <input type="text" defaultValue={editor.company} onChange={this.handleEditorCompanyChange}/>
            </div>
            <button type='button' onClick={this.setEditorName}>修改editor对象中属性的值</button>
            <button type='button' onClick={this.setEditorRef}>修改editor对象的引用</button>
            <button type='button' onClick={this.setUsername}>修改字符串类型数据</button>
            <hr/>
            <p>数据：</p>
            <div>
                <pre>{JSON.stringify(editor, null, 4)}</pre>
            </div>
            <hr/>
            <p>结论：</p>
            <ol>
                <li>可以修改state树上对象引用类型内的属性的值，下面可以实现视图的更新，也不会有error和warning，但不建议这样做。</li>
                <li>标准做法还是通过dispatch action来修改store中的数据，注入在props上的数据变化后，触发re-render。</li>
                <li>this.props.editor = {'{...}'}，不能直接修改props上某个引用类型数据的引用。报错</li>
            </ol>
        </div>
    }

    setEditorName = (e) => {
        let {editor} = this.props;
        editor.name = 'webstorm';
        this.forceUpdate(() => {
            //callback
        });
    }

    setEditorRef = (e) => {
        //报错，Uncaught TypeError: Cannot assign to read only property 'editor' of object '#<Object>'
        this.props.editor = {name: 'Atom', company: 'github'};
    }   

    setUsername = () => {
        //报错，Uncaught TypeError: Cannot assign to read only property 'user' of object '#<Object>'
        this.props.user = 'marong';
    }

    handleEditorNameChange = (e) => {
        this.props.editor.name = e.target.value;
        this.forceUpdate();
    }

    handleEditorCompanyChange = (e) => {
        this.props.editor.company = e.target.value;
        this.forceUpdate();
    }
}

export default connect(state => ({...state.ChangeStateTreeRefData}))(ChangeStateTreeRefData);