import React, {Component} from 'react';

class InputTypeCheckbox extends Component{
    static defaultProps = {
        checkboxData: {
            'cb1': '多选框1',
            'cb2': '多选框2',
            'cb3': '多选框3'
        }
    }

    state = {
        //这里，初始化state，ES7写法，要在这里取到this.props，必须在constructor中调用super(props)
        checkbox: ((checkboxData) => {
            const data = {};
            const checkboxKeys = Object.keys(checkboxData);
            checkboxKeys.map((key) => data[key] = false);
            return data;
        })(this.props.checkboxData)
    }

    constructor(props) {
        super(props);
        this.handleSubmit = ::this.handleSubmit;
    }

    render() {
        const checkboxKeys = Object.keys(this.props.checkboxData);
        const checkboxes = checkboxKeys.map((checkboxKey) => {
            return (
                <label key={checkboxKey}>
                    {this.props.checkboxData[checkboxKey]}
                    <input type="checkbox" value={checkboxKey} checked={this.state.checkbox[checkboxKey]} onChange={(e) => this.checkboxChange(e)}/>
                </label>
            );
        });
        return <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    {checkboxes}
                </div>
                <div>
                    <button type="submit">提交</button>
                </div>
            </form>
            <div>
                <pre>
                    <code>state: </code>
                    <code>{JSON.stringify(this.state, null, 4)}</code>
                </pre>
            </div>
        </div>
    }

    checkboxChange(e) {
        let dom_checkbox = e.target;
        let value = dom_checkbox.value;
        let newCheckboxState = this.state.checkbox;
        newCheckboxState[value] = dom_checkbox.checked;

        this.setState({checkbox: newCheckboxState});
    }

    handleSubmit(e) {
        e.preventDefault();
        //As of v0.14, returning false from an event handler will no longer stop event propagation. Instead, e.stopPropagation() or e.preventDefault() should be triggered manually, as appropriate.
        // return false;
    }
}

export default InputTypeCheckbox;