/**
 * 测试transitionAppear
 * 用来给组件在初始化挂载的时候执行一些缓动动画
 * 默认的，如果不指定transitionAppear属性，默认值是false
 *
 * transitionAppearTimeout 单位ms, 如果设置了该值，动画将在指定时间被清除
 *
 * 源码在ReactCSSTransitionGroupChild，指定的timeout的值被传给了setTimeout，返回的timeoutId被压入transitionTimeouts队列
 * 在ReactCSSTransitionGroupChild组件componentWillUnmount的时候，遍历transitionTimeouts，通过clearTimeout(timeoutId)清除动画
 *
 * 不仅仅是`transitionAppearTimeout`是这样的特性，`transitionEnterTimeout`和`transitionLeaveTimeout`都是一样的处理方式
 *
 * Q: 设置了`transitionAppearTimeout`，`transitionEnterTimeout`, `transitionLeaveTimeout`这些值，和`css`的`transition`的`transition-duration`
 * 有什么关系？或者说，有什么影响？
 *
 * A: 该例子，`transitionAppearTimeout`的值被设置为`500ms`，`css`的`transition-duration`被设置为`5s`，该动画实际上将在`500ms`后被结束，
 * 现象就是，前`500ms`是过渡动画，过了`500ms`，将直接显示动画最终的效果。
 *
 *
 */
export default class extends React.Component {
    render() {
        return <ReactCSSTransitionGroup
            transitionName="head"
            transitionEnter={false}
            transitionLeave={false}
            transitionAppear={true}
            transitionAppearTimeout={500}>

            <h1>Fading at Initial Mount</h1>
        </ReactCSSTransitionGroup>
    }
}
