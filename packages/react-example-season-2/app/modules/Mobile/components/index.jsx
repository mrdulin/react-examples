import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

class Mobile extends React.Component {
  state = {
    res: {},
    error: {},
    open: false
  }

  render() {
    const {res} = this.state;

    return <div>
      <form onSubmit={this.handleSubmit}>
        <TextField name='mobile' type='number' hintText='请输入手机号'></TextField>
        <RaisedButton type='submit' label='查询'></RaisedButton>
      </form>

      <div style={{display: typeof res.error_code === 'undefined' ? 'none' : 'block'}}>
        {res.error_code === 0 && this.renderResult()}
        {res.error_code !== 0 && this.renderError()}
      </div>
    </div>
  }

  renderResult() {
    const {result} = this.state.res;
    return <div>
      <p>省份：{result.province}</p>
      <p>城市：{result.city}</p>
      <p>区号：{result.areacode}</p>
      <p>邮编: {result.zip}</p>
      <p>运营商：{result.company}</p>
      <p>卡类型：{result.card}</p>
    </div>
  }

  renderError() {
    const {error} = this.state;
    return <Dialog modal={false} open={this.state.open} onRequestClose={this.handleClose}>
      {error.reason}
    </Dialog>
  }

  handleClose = e => {
    this.setState({open: false});
  }

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const phone = form.mobile.value;

    const data = {phone, key: API.MOBILE.appKey};
    const qs = util.params(data);
    const url = API.MOBILE.url + `?${qs}`;

    fetch(url).then(res => res.json()).then(data => {
      const {error_code: code, reason} = data;
      if (code === 0) {
        this.setState({res: data});
      } else {
        return Promise.reject({code, reason});
      }
    }).catch(error => {
      const newState = {open: true};
      if (error.code) {
        Object.assign(newState, {error});
      } else {
        Object.assign(newState, {code: -1, reason: '系统异常'})
      }
      this.setState(newState);
    })
  }
}

export default Mobile;
