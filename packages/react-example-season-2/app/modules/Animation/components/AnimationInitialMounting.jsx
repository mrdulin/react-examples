export default class extends React.Component {
    render() {
        return <ReactCSSTransitionGroup
            transitionName="head"
            transitionAppear={true}
            transitionAppearTimeout={500}>
            <h1>Fading at Initial Mount</h1>
        </ReactCSSTransitionGroup>
    }
}
