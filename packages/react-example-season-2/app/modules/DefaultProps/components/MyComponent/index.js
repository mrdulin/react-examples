import RaisedButton from 'material-ui/RaisedButton';

class MyComponent extends React.PureComponent{

    /**
     * 这里卡了1个小时，propTypes不生效
     * 查了老半天问题，后来突然想起，我用的dll是在production环境下打包的。
     * React在production环境下会移除propTypes的warning.
     */
    static propTypes = {
        title: React.PropTypes.number,
        onButtonClick: React.PropTypes.number
    }
    /**
     * 声明组件需要的props，并定义相应数据类型的默认值
     * 当父组件通过props传值过来的时候，会覆盖默认值
     */
    static defaultProps = {
        title: 'default title',
        onButtonClick: () => {}
    }
    handleButtonClick = () => {
        const {title, onButtonClick} = this.props;
        onButtonClick(title);
    }
    render() {
        const {title} = this.props;
        return (
            <div>
                <h5>{title}</h5>
                <RaisedButton type='button' onClick={this.handleButtonClick} label='按钮'/>
            </div>
        )
    }
}

export default MyComponent;
