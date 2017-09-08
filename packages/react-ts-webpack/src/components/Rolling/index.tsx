import * as React from 'react';
// import * as swiper from 'swiper';
const Swiper = require('swiper').default;
import * as style from './style.module.scss';
import { Message, MessageColor, IMessageStyle } from '../Message';

console.log(Swiper);

class Rolling extends React.PureComponent<any, any> {

  public static defaultProps = {
    options: {},
    width: '',
    height: '',
    items: [{
      chatLog: 'angular',
      image: ''
    }, {
      chatLog: 'react',
      image: ''
    }]
  };

  private containerRef: HTMLDivElement;
  private swiper: any;
  private defaultOptions: any;
  private minCount: number = 2;

  constructor(props: any) {
    super(props);

    this.swiper = null;
    this.defaultOptions = {
      speed: 400,
      autoplay: true,
      spaceBetween: 20,
      direction: 'vertical'
    };
  }

  public componentDidMount() {
    this.initialize();
  }

  public componentWillUnmount() {
    if (this.swiper) {

    }
  }

  public initialize() {
    const { options, items } = this.props;
    const opts = Object.assign({}, this.defaultOptions, options);
    if (!this.swiper && items.length >= this.minCount) {
      this.swiper = new Swiper(this.containerRef, opts);
      this.swiper.disableTouchControl();
    }
  }

  public render() {
    const { width, height, items } = this.props;
    let style: { width?: string, height?: string } = {};
    if (width && height) {
      style = { width, height };
    }

    return (
      <div className='swiper-container' style={style} ref={(ref: any) => this.getContainerRef(ref)}>
        <div className='swiper-wrapper'>
          {
            items.map((item: any, idx: number) => {
              return (
                <Message key={idx}
                  className='swiper-slide'
                  label={item.chatLog}
                  avatar={item.image}
                  style={this.getSlideStyle()}
                  color={this.getMessageColor(idx)} />
              );
            })
          }
        </div>
      </div>
    );
  }

  private getSlideStyle(): IMessageStyle {
    const { height } = this.props;
    let style = {};
    if (!height) return style;
    const h = Number.parseInt(height.replace('px', ''));
    style = {
      height: `${h / this.minCount}px`
    };
    return style;
  }

  private getMessageColor(idx: number): MessageColor {
    let color: MessageColor = 'orange';
    const isOdd: boolean = idx % 2 !== 0;
    if (isOdd) {
      color = 'green';
    }
    return color;
  }

  private getContainerRef(ref: HTMLDivElement) {
    this.containerRef = ref;
  }
}

export default Rolling;
