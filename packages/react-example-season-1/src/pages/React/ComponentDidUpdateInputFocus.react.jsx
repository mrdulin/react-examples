import React, {Component} from 'react';

class ComponentDidUpdateInputFocus extends Component{
    constructor() {
        super();
        this.handleChange = ::this.handleChange;
    }
    state = {
        value: '',
        isInputing: false
    }
    render() {
        console.count('ComponentDidUpdateInputFocus render');
        return <div>
            <h3>需求：<code>input</code>聚焦的时候，显示delete按钮，用于清空<code>input</code>中输入的内容，并设置<code>input</code>为聚焦状态。<code>input</code>失焦的时候，隐藏delete按钮。</h3>
            <hr/>
            <input ref={ref => this._input = ref} type="text" value={this.state.value} onFocus={this.handleOnFocus} onChange={this.handleChange} onBlur={this.handleOnBlur} onClick={this.handleOnClick}/>
            <button style={{display: this.state.isInputing ? 'inline-block' : 'none'}} type='button' onMouseDown={this.handleDelete}>mousedown delete</button>
            <button style={{display: this.state.isInputing ? 'inline-block' : 'none'}} type='button' onClick={this.handleDelete}>click delete</button>
            <hr/>
            <p>结论：<code>onFocus</code>事件比<code>onClick</code>先触发。</p>
            <p><code>onMouseDown</code>事件比<code>onBlur</code>事件先触发，<code>onClick</code>事件比<code>onBlur</code>事件后触发。</p>
            <p><code></code></p>
            <p>下面是点击有<code>onMouseDown</code>事件的按钮依次触发的事件：</p>
            <p><code>handleDelete</code></p>
            <p><code>handleOnBlur</code></p>
            <p><code>componentDidUpdate</code></p>
            <p><code>handleOnFocus</code></p>
            <p>使用<code>onMouseDown</code>可以实现，使用<code>onClick</code>可以通过<code>componentDidUpdate</code>，再次让<code>input</code>聚焦，这时候会触发<code>onClick</code>事件。</p>
            <p>下面是点击有<code>onClick</code>事件的按钮依次触发的事件：</p>
            <p><code>handleOnBlur</code></p>
            <p><code>componentDidUpdate</code></p>
            <p><code>handleOnFocus</code></p>
            <p><code>handleDelete</code></p>
            <p>可见，第一次点击按钮的时候，由于<code>onBlur</code>事件比<code>onClick</code>事件先触发，所以这时候其实按钮已经隐藏了，所以没有触发<code>onClick</code>事件，在<code>onBlur</code>事件中<code>setState</code>，会依次调用<code>render</code>
                和<code>componentDidUpdate</code>方法，在<code>componentDidUpdate</code>又设置了<code>input</code>聚焦，所以会触发<code>handleOnFocus</code>事件，按钮显示，触发了<code>onClick</code>事件。
            </p>
        </div>
    }

    handleOnClick = e => {
        console.log('handleOnClick');
    }

    handleDelete = e => {
        console.log('handleDelete')
        this.setState({value: ''});
    }

    handleOnFocus = (e) => {
        console.log('handleOnFocus')
        this.setState({isInputing: true});  
    }

    handleOnBlur = e => {
        console.log('handleOnBlur')
        this.setState({isInputing: false});
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    componentDidUpdate() {
        if(!this.state.isInputing) {
            console.log('componentDidUpdate')
            this._input.focus();
        }
    }
}

export default ComponentDidUpdateInputFocus;