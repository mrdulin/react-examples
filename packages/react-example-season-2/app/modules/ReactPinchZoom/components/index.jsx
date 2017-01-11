import 'react-pinch-zoom/dist/style';
import ReactPinchZoom from 'react-pinch-zoom';

export default class extends React.Component{
    constructor() {
        super();
        this.state = {
            isOpen: true,
            items: [
                {
                    src: require('../images/QQ20161124-2@2x.png'),
                    w: 1600,
                    h: 1067
                },
                {
                    src: require('../images/QQ20161124-3@2x.png'),
                    w: 1600,
                    h: 1067
                },
                {
                    src: require('../images/QQ20161124-2@2x.png'),
                    w: 1600,
                    h: 1067
                }
            ]
        }
    }

    close() {
        this.setState({isOpen: false});
    }

    open() {
        this.setState({isOpen: true});
    }

    render() {
        return <div>
            <button type="button" onClick={() => this.open()}>测试react-pinch-zoom第三方组件</button>
            <ReactPinchZoom isOpen={this.state.isOpen} items={this.state.items} onClose={() => this.close()}  />
        </div>
    }
}
