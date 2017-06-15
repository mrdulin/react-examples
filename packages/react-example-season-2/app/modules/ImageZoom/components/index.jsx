import './style';

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      scale: 1,
      liveScale: 1,
      open: false,
      deltaX: 0,
      deltaY: 0
    }
  }

  componentDidMount() {
    this.initHammer();
  }

  changeViewport() {
    this.viewport = document.querySelector("meta[name=viewport]");
    this.viewportCache = this.viewport.getAttribute('content');
    this.viewport.setAttribute('content', 'width=device-width, height=device-height, initial-scale=1.0, maximum-scale=2.0, user-scalable=yes');
  }

  resetViewport() {
    this.viewport.setAttribute('content', this.viewportCache);
  }

  initHammer() {
    const img = document.getElementById('test');
    this.$img = $(img);
    const manager = new Hammer.Manager(img);
    const Pinch = new Hammer.Pinch();
    manager.add([Pinch]);
    manager.on('pinchmove', this.onPinchMove.bind(this));
    manager.on('pinchend', this.onPinchEnd.bind(this));
  }

  render() {
    return <div id='image-zoom'>
      <button type='button' onClick={() => this.open()}>预览图片</button>
      <div className='mask' style={{ display: this.state.open ? 'flex' : 'none' }} onClick={() => this.close()}>
        <img id='test' src={require('../images/QQ20161124-1@2x.png')} alt="缩放图" />
        <div className='count'>1/1</div>
      </div>
    </div>
  }

  open() {
    this.setState({ open: true })
  }
  close() {
    // this.resetViewport();
    this.setState({ open: false });
  }

  getRelativeScale(scale) {
    var currentScale = 1;
    return scale * currentScale;
  }

  onPinchEnd(e) {
    let currentScale = this.getRelativeScale(e.scale);
    this.setState({ liveScale: currentScale });
  }

  onPinchMove(e) {
    var scale = this.getRelativeScale(e.scale);
    if (scale < 1) {
      scale = 1;
    }
    Velocity.hook(this.$img, 'scale', scale);
  }
}
