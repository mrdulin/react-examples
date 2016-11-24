import 'react-pinch-zoom/dist/style';
import ReactPinchZoom from 'react-pinch-zoom';

export default class extends React.Component{
    constructor() {
        super();
        this.state = {
            isOpen: true,
            items: []
        }
    }

    componentDidMount() {
        this.timeId = setTimeout(() => {
            this.setState({items: [
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
            ]})
        }, 3000)
    }

    handleClose() {
        this.setState({isOpen: false});
    }

    render() {
        return <div>
            <ReactPinchZoom isOpen={this.state.isOpen} items={this.state.items} onClose={() => this.handleClose()}  />
        </div>
    }
}
