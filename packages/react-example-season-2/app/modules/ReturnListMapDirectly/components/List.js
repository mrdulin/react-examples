export default class extends React.PureComponent {
  render() {
    const { items } = this.props;

    //正确的方式
    return <div>
      {items.map((item, idx) => <p key={idx}>{item}</p>)}
    </div>

    /**
     * 错误方式一：
     *
     * 《深入React技术栈》page-243，作者出错
     * Uncaught Error: Minified React error #109; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=109&args[]=_class for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
     */
    // return items.map((item, idx) => <p key={idx}>{item}</p>);

    /**
     * 错误方式二：
     *
     * 下面这种方式也报上面同样的错误
     */
    // return [
    //     <p>{items[0]}</p>
    // ]
  }
}
