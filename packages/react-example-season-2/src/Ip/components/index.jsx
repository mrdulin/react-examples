import React, {Component} from 'react';
import TextField from 'material-ui/TextField';

class Ip extends Component{
    constructor() {
        super();
        this.state = {ip: '', res: {}}
    }

    render() {
        return <div>
            <form onSubmit={this.handleSubmit}>
                <TextField type='text' id="ip-text-field" hintText="输入ip地址" value={this.state.ip} onChange={this.handleTextChange}/>
            </form>
            {this.state.res.error_code === 0 && <p>{this.state.ip} : {this.state.res.result.area}</p>}
        </div>
    }

    handleTextChange = e => {
        const ip = e.target.value;
        this.setState({ip});
    }

    handleSubmit = e => {
        e.preventDefault();
        const url = util.API + '/ip/ip2addr' + `?ip=${this.state.ip}&key=${util.appKey}`
        fetch(url).then(res => res.json()).then(data => {
            this.setState({res: data});
        }).catch(err => {
            
        })
    }
}

export default Ip;