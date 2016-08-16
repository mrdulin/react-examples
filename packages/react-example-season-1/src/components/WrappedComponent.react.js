import React, {Component} from 'react';

function ppHOC(WrappedComponent) {
    return class extends Component{
        state = {
            keyword: ''
        }
        constructor() {
            super();
            this.searchChange = ::this.searchChange;
            this.proc = ::this.proc;
        }

        proc (WrappedComponentInstance) {
            //使用ref取得组件实例的引用
            console.log('WrappedComponentInstance', WrappedComponentInstance);
            WrappedComponentInstance.method();
        }

        searchChange(e) {
            this.setState({keyword: e.target.value});
        }
        render() {
            const props = Object.assign({}, this.props, {ref: this.proc}, {
                search: {
                    value: this.state.keyword,
                    onChange: this.searchChange
                }
            });

            return <WrappedComponent {...props}/>
        }
    }
}

class WrappedComponent extends Component{
    render() {
        const {search} = this.props;
        return (
            <div>
                <input type="text" {...search}/>
                <p>{search.value}</p>
            </div>
        );
    }

    method() {
        console.log('WrappedComponent method executed');
    }
}


export default ppHOC(WrappedComponent);
