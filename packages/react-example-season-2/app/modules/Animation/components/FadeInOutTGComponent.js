const styles = {
    enter: 'fade-in',
    enterActive: 'fade-in-active',
    leave: 'fade-out',
    leaveActive: 'fade-out-active'
};

class FadeInOutTGComponent extends React.Component{
    constructor() {
        super();
        this.el = null;
        this.handleTransitionendBind = null;
    }
    /**动画生命周期方法 */
    componentWillAppear(callback) {
        console.log('componentWillAppear');
        callback();
    }
    componentDidAppear() {
        console.log('componentDidAppear');
    }
    componentWillEnter(callback) {
        console.log('componentWillEnter');
        this.el = ReactDOM.findDOMNode(this);
        this.el.classList.add(styles.enter);
        const params = [styles.enter, styles.enterActive, callback];

        this.handleTransitionendBind = this.handleTransitionend.bind(this, ...params);
        this.el.addEventListener('transitionend', this.handleTransitionendBind, false);

        requestAnimationFrame(() => {
            this.el.classList.add(styles.enterActive);
        });
    }
    componentDidEnter() {
        console.log('componentDidEnter');
    }
    componentWillLeave(callback) {
        console.log('componentWillLeave');
        this.el.classList.add(styles.leave);
        const params = [styles.leave, styles.leaveActive, callback];
        this.handleTransitionendBind = this.handleTransitionend.bind(this, ...params);
        this.el.addEventListener('transitionend', this.handleTransitionendBind, false);

        requestAnimationFrame(() => {
            this.el.classList.add(styles.leaveActive);
        });

    }
    componentDidLeave() {
        console.log('componentDidLeave');
    }

    /**组件生命周期 */
    componentDidMount() {
        console.log('componentDidMount');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    /**动画操作和逻辑处理函数 */
    handleTransitionend(className, classNameActive, callback) {
        console.log(className, classNameActive, callback);
        this.el.classList.remove(className, classNameActive);
        this.el.removeEventListener('transitionend', this.handleTransitionendBind, false);
        callback && callback();
    }
    render() {
        return <div>
            <p>FadeInOutTGComponent</p>
        </div>
    }
}

export default FadeInOutTGComponent;
