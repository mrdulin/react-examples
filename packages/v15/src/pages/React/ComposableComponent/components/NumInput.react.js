import React, {Component} from 'react';

class NumInput extends Component{
    componentDidMount() {
        const refs = {
            inp: this._inp
        }
        this.props.getElementRef(() => refs)
    }
    render() {
        return <div>
            {/*ref string 的形式*/}
            {/*<input
                ref='inp'
                type={this.props.type}
                defaultValue={this.props.val}
                onChange={this.props.update}
            />*/}
            <input
                ref={ref => this._inp = ref}
                type={this.props.type}
                defaultValue={this.props.val}
                onChange={this.props.update}
            />
            <label>{this.props.label} - {this.props.val}</label>
        </div>
    }
}

export default NumInput;
