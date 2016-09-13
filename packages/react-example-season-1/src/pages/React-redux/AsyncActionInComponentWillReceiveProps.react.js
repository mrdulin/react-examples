import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Action from '../../actions/AsyncActionInComponentWillReceiveProps.action';
import bindActions from '../../actions/';

class AsyncActionInComponentWillReceiveProps extends Component{
    
    state = {
        requestCondition: Math.random()
    };

    componentDidMount() {
        const {dispatch, AsyncActionInCWRP} = this.props;
        dispatch(Action.getCities(AsyncActionInCWRP.key));
        console.log(bindActions);
    }

    componentWillReceiveProps(nextProps) {
        const {dispatch} = nextProps;
        const {key, cities} = nextProps.AsyncActionInCWRP;
        console.count('componentWillReceiveProps');

        //断言失败,两个dispatch是不同的引用
        // console.assert(this.props.dispatch !== nextProps.dispatch, 'this.props.dispatch and nextProps.dispatch are same');

        // if(!isLoading && isLoading !== this.props.AsyncActionInCWRP.isLoading) {

            //操作dom的方式移除loadMessage
            // if(this._loadMsg) {
            //     this.removeLoadMessageTimeoutId = setTimeout(() => {
                    // console.log('loadMsgDom', this._loadMsg);
                    //不要操作dom
                    // this._loadMsg.parentNode.removeChild(this._loadMsg);
                // }, 2000);
            // }

        // }

        //在componentWillReceiveProps中不加条件或者条件永远成立的dispatch将会导致死循环
        // if(this.state.requestCondition > 0.8) {
        //     console.count('componentWillReceiveProps dispatch');
        //     dispatch(Action.getCities(2)).then(store => {
        //         console.group('componentWillReceiveProps data');
        //         console.table(store.AsyncActionInCWRP);
        //         console.table(this.props.AsyncActionInCWRP);
        //         console.table(nextProps.AsyncActionInCWRP);
        //         console.groupEnd();
        //         this.setState({requestCondition: 0});
        //     });
        // }


    }

    handleSubmit(e) {
        e.preventDefault();
        const {dispatch} = this.props;
        const form = e.target;
        const key = form.key.value;
        dispatch(Action.getCities(key));
    }

    render() {
        const {AsyncActionInCWRP} = this.props;
        console.count('render');
        return <div>
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <input name="key" type="text" placeholder="输入1或2" autocomplete="off"/>
            </form>
            <ul>
                {
                    Object.values(AsyncActionInCWRP.cities).map((cityName, idx) => <li key={idx}>{cityName}</li>)
                }
            </ul>
            {AsyncActionInCWRP.showMsg ? <p ref={ref => this._loadMsg = ref}>{AsyncActionInCWRP.isLoading ? '加载中...' : AsyncActionInCWRP.loadMessage}</p> : null}
        </div>
    }

    componentWillUnmount() {
        if(this.removeLoadMessageTimeoutId) {
            clearTimeout(this.removeLoadMessageTimeoutId);
            this.removeLoadMessageTimeoutId = null;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        AsyncActionInCWRP: state.AsyncActionInCWRP
    }
};

export default connect(mapStateToProps)(AsyncActionInComponentWillReceiveProps);