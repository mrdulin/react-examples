// 使用core-js打包后，该模块的chunk.js的大小为17.2kb
const fill = require('core-js/library/fn/array/fill');
const includes = require('core-js/library/fn/array/includes');

//  使用babel-polyfill打包后，该模块的chunk.js为326kb
// require('babel-polyfill');

export default class TestComponent extends React.Component{
    constructor() {
        super();
        this.state = {
            arr: [1,2,3]
        }
    }
    componentWillMount() {
        try{
            fill(this.state.arr, 0);
            // alert(includes);
            alert(includes(this.state.arr, 0));
        } catch(e) {
            alert(e);
        }
    }
    render() {
        return <div>
            {JSON.stringify(this.state.arr, null, 4)}
        </div>
    }
}
