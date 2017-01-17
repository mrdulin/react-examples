// 使用core-js打包后，该模块的chunk.js的大小为17.2kb
// require('core-js/library/fn/array/fill');

//  使用babel-polyfill打包后，该模块的chunk.js为326kb
// require('babel-polyfill');

export default class TestComponent extends React.Component{
    constructor() {
        super();
        const arr = [1,2,3];
        this.state = {
            arr: arr.fill(0)
        }
    }
    render() {
        return <div>
            {JSON.stringify(this.state.arr, null, 4)}
        </div>
    }
}
