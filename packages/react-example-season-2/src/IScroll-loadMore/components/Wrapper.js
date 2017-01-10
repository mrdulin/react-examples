const Wrapper = class extends React.Component{
    get wrapperElement() {
        return this._wrapper;
    }
    render() {
        return <div className="wrapper" ref={ref => this._wrapper = ref}>
            {this.props.children}
        </div>
    }
}

export default Wrapper;