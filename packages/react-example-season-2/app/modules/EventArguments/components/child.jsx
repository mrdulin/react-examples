export default class Child extends React.Component{
    render() {
        const {clickHandler} = this.props;
        return <div>
            <button type="button" onClick={clickHandler}>click me</button>
            <button type="button" onClick={e => clickHandler(e, null, undefined)}>click me too</button>
        </div>
    }
}