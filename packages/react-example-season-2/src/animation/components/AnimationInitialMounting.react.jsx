import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class AnimationInitialMounting extends React.Component {
    render() {
        return <ReactCSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={500}>
            <h1>Fading at Initial Mount</h1>
        </ReactCSSTransitionGroup>
    }
}