import './style';

class Slider extends React.Component{
    static propTypes = {
        item: React.PropTypes.string.isRequired,
        className: React.PropTypes.string
    }
    render() {
        console.count('Slider Render');
        const {item, className} = this.props;
        return <li className={`slider ${className}`}><img src={item} alt="slider"/></li>
    }
}

class Swiper extends React.Component{
    static propTypes = {
        opts: React.PropTypes.shape({
            id: React.PropTypes.string,
            items: React.PropTypes.array.isRequired,
            time: React.PropTypes.number
        })
    }

    static defaultProps = {
        defaultOpts: {
            id: 'swiper',
            items: [],
            time: 2000,
            autoplay: true
        }
    }

    constructor() {
        super();
        this.state = {
            index: 0
        }
    }

    componentWillMount() {
        const {opts, defaultOpts} = this.props;
        this.opts = Object.assign({}, defaultOpts, opts);
        this.itemLen = this.opts.items.length;
        this.stop = false;
    }

    componentDidMount() {
        const {autoplay, time} = this.opts;
        if(autoplay) {
            this.autoplay(time);
        }
    }

    componentWillUnmount() {
        this.stopplay();
    }

    autoplay(time) {
        if(!this.IntervalId) {
            this.IntervalId = setInterval(() => {
                this.setIndex();
            }, time);
        }
    }

    setIndex() {
        const {index} = this.state;
        if(index > this.itemLen - 2) {
            this.setState({index: 0});
        } else {
            this.setState({index: index + 1})
        }
        
    }

    stopplay() {
        this.IntervalId && clearInterval(this.IntervalId);
    }

    handleIndicatorClick(index) {
        // this.stopplay();        
        this.setState({index});
    }

    render() {
        console.count('Swiper Render')
        const {id, className, items} = this.opts;
        if(!items.length) return null; 

        const sliderNodes = items.map((item, index) => <Slider className={this.state.index === index ? 'fadein': ''} item={item} key={index}/>)
        return <div id={id} className='swiper'>
            <ul className='swiper-list'>{sliderNodes}</ul>
            <Indicators onClick={index => this.handleIndicatorClick(index)} index={this.state.index} count={items.length}></Indicators>
        </div>
    }
}

class Indicators extends React.Component{
    static propTypes = {
        count: React.PropTypes.number.isRequired,
        index: React.PropTypes.number.isRequired,
        onClick: React.PropTypes.func
    }

    handleClick(i) {
        const {onClick} = this.props;
        onClick && onClick(i);
    }
    render() {
        console.count('Indicators Render')
        const {count, index} = this.props;
        const indicators = [];
        
        if(!count) return null;
        
        for (let i = 0; i < count; i++) {
            indicators.push(<li onClick={() => this.handleClick(i)} className={index === i ? 'active' : ''} key={i}></li>)
        }

        return <ul className='swiper-indicators'>{indicators}</ul>
    }
}


export default class extends React.Component{
    render() {
        const opts = {
            items: [
                require('images/1.jpg'),
                require('images/2.jpg'),
                require('images/3.jpg')
            ],
            time: 3000,
            autoplay: true
        }
        return <div style={{height: '300px'}}>
            <Swiper opts={opts}></Swiper>
        </div>
    }
}
