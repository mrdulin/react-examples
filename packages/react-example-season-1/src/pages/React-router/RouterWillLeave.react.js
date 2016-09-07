import React, {Component} from 'react';
import {withRouter} from 'react-router';

class ReactRouter02 extends Component {
    state = {
        isSaved: false
    }

    constructor(props) {
        super(props);
        this.routerWillLeave = this.routerWillLeave.bind(this);
    }

    componentDidMount() {
        // const scope = this;
        this.props.router.setRouteLeaveHook(
            this.props.route,
            this.routerWillLeave
        )
    }

    routerWillLeave(nextLocation) {
        //如果要在该方法使用this引用到组件(ReactRoute02)，需要手动绑定该方法到组件上
        // 返回 false 会继续停留当前页面，
        // 否则，返回一个字符串，会显示给用户，让其自己决定
        if (!this.state.isSaved) {
            return 'Your work is not saved! Are you sure you want to leave?';
        }
    }

    render() {
        return (
            <div>
                <h2>离开路径时，弹出提示</h2>
                <button type="button" onClick={() => this.save()}>save</button>
            </div>
        );
    }

    save() {
        this.setState({isSaved: true});
    }
}

export default withRouter(ReactRouter02);
