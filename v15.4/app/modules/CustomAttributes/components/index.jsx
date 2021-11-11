export default class extends React.Component {
  constructor() {
    super();
    this.state = {dataset: {}};
  }

  componentDidMount() {
    this.setState({dataset: this._p.dataset});
  }

  render() {
    return <div>
      <p ref={ref => this._p = ref} data-id='ML001' data-logClick='click' data-need-login='true' data-c-NAME='novaline.space' data-AGE='23'>
        我是自定义属性的DOM</p>

      <p>React版本, "react": "^15.1.0"，dataset结果如下：</p>
      <div>
        <pre>{JSON.stringify(this.state.dataset, null, 4)}</pre>
      </div>

      <p>React版本, "react": "^0.13.3", dataset结果如下：</p>
      <div>
        <pre>{JSON.stringify({id: "ML001", needLogin: "true", reactid: ".0.0.3.0.0.0"}, null, 4)}</pre>
      </div>

      <hr/>
      <p>结论：</p>
      <p>新版本React，对于自定义属性data-*有如下转换规则：</p>
      <ol>
        <li>对于带连字符的属性，不论大小写，统一转换成驼峰形式。</li>
        <li>对于不带连字符的属性，转换成小写。</li>
      </ol>
      <p>老版本React, 只支持小写，或者小写带连字符的属性（转换成驼峰）。</p>
    </div>
  }
}
