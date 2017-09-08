const Wrapper = class extends React.Component {
  get wrapperElement() {
    return this._wrapper;
  }

  render() {
    const {top} = this.props;

    return <div style={{top: `${top}px`}} className="wrapper" ref={ref => this._wrapper = ref}>
      {this.props.children}
    </div>
  }
}

export default Wrapper;
