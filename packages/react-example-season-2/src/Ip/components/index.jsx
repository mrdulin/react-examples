import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import * as Action from '../action';
import {connect} from 'react-redux';

class Ip extends Component{
    constructor() {
        super();
        this.state = {
            ip: '', 
            res: {},
            open: false,
            error: ''
        }
    }

    render() {
        console.count('ip render');
        const {juhe_ip, dispatch} = this.props; 
        return <div>
            <form onSubmit={this.handleSubmit}>
                <TextField type='text' id="ip-text-field" hintText="输入ip地址" value={this.state.ip} onChange={this.handleTextChange}/>
                <RaisedButton label='查询' type='submit'/>
            </form>
            <RaisedButton label='action1' type='button' onClick={() => dispatch(Action.action1())}/>
            <RaisedButton label='action2' type='button' onClick={() => dispatch(Action.action2())}/>
            <p>name: {juhe_ip.name}</p>
            <p>age: {juhe_ip.age}</p>
            {this.state.res.error_code === 0 ? this.renderResult() : this.renderError(2000)}
        </div>
    }

    renderResult() {
        const {ip, res} = this.state;
        return <div>
            <p>查询的IP或域名：{ip}</p>
            <p>所在位置：{res.result.area}</p>
        </div>
    }

    handleClose = e => {
        this.setState({open: false});
    }

    renderError(wait) {
        const {error} = this.state;
        return <Dialog modal={false} open={this.state.open} onRequestClose={this.handleClose}>
            {error.reason}
        </Dialog>
    }

    handleTextChange = e => {
        const ip = e.target.value;
        this.setState({ip});
    }

    handleSubmit = e => {
        e.preventDefault();
        const data = {
            ip: this.state.ip,
            key: API.IP_ADDRESS.appKey
        };
        const qs = util.params(data);
        const url = API.IP_ADDRESS.url + `?${qs}`;
        
        fetch(url).then(res => res.json()).then(data => {
            if(data.error_code === 0) {
                this.setState({res: data});
            } else {
                return Promise.reject({code: data.error_code, reason: data.reason});
            }
        }).catch(error => {
            if(error.code) {
                this.setState({error, open: true});
            } else {
                this.setState({error: {code: -1, reason: '系统异常'}, open: true});
            }
        })
    }
}

const mapStateToProp = state => ({
    juhe_ip: state.juhe_ip
})

export default connect(mapStateToProp)(Ip);