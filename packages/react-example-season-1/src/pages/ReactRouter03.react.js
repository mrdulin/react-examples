import React, {Component, PropTypes} from 'react';
import {Link, browserHistory} from 'react-router';

class ReactRouter03 extends Component{

    //ES7的class的静态属性写法
    static contextTypes = {
        router: PropTypes.object
    }

    render() {
        return (
            <div>
                <h2>路由跳转的3种方式</h2>
                <Link to="/table">table</Link>
                <button type="button" onClick={() => {this.transitionTo1()}}>table</button>
                <button type="button" onClick={() => {this.transitionTo2()}}>table</button>
                {/*<button type="button" onClick={() => {this.transitionTo3()}}>table</button>*/}
            </div>
        );
    }

    transitionTo1() {
        browserHistory.push('/table');
    }

    transitionTo2() {
        this.context.router.push('/table');
    }

    transitionTo3() {
        // this.context.router.transitionTo('table');
    }

}

//ES6的class的静态属性写法
// ReactRouter03.contextTypes = {
//     router: PropTypes.object
// }

export default ReactRouter03;
