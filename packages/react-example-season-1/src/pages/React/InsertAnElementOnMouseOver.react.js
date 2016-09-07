import React, {Component} from 'react';
import {Link} from 'react-router';

class InsertAnElementOnMouseOver extends Component{
    static defaultProps = {
        demoRouteMap: new Map([
            ['onMouseOver', '鼠标移动到一个元素时，插入另一个元素'],
            ['domRerenderOrAppendNew', 'dom重新渲染还是append']
        ])
    }
    render() {
        const {demoRouteMap} = this.props;

        return (
            <div>
                <h2>React-China各种问题解决demo</h2>
                <ul>
                    {
                        [...demoRouteMap.keys()].map((demoRouteKey, index) => {
                            return <li key={demoRouteKey}><Link to={`/${demoRouteKey}`}>{demoRouteMap.get(demoRouteKey)}</Link></li>
                        })
                    }
                </ul>

            </div>
        );
    }
}

export default InsertAnElementOnMouseOver;
