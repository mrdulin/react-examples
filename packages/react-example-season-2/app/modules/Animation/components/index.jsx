import './style';
import AnimationInitialMounting from './AnimationInitialMounting';
import Todos from './Todos';
import {FadeInOutCSSTG, FadeInOutTG} from './FadeInOut';
import RaisedButton from 'material-ui/RaisedButton';
import FadeInOutTGComponent from './FadeInOutTGComponent';

/**
 * 翻译：使用ReactCSSTransitionGroup时，没有提供动画结束的回调函数
 * 如果动画过程中有一些逻辑需要处理，需要使用ReactTransitionGroup API
 */
class AnimationContainer extends React.Component{
    state = {
        fadeInOutCSSTGElement: null,
        fadeInOutTGElement: null
    }
    render() {
        const {fadeInOutCSSTGElement, fadeInOutTGElement} = this.state;
        return (
            <div>
                <AnimationInitialMounting/>
                <Todos/>

                {/*下面两个例子不要同时打开注释*/}

                {/*ReactCSSTransitionGroup例子*/}
                {/*<FadeInOutCSSTG children={fadeInOutCSSTGElement}/>*/}
                {/*<RaisedButton label='FadeInOutCSSTGElement' onClick={::this.handleFadeInOutCSSTGElement} />*/}

                {/*ReactTransitionGroup例子*/}
                <FadeInOutTG children={fadeInOutTGElement}/>
                <RaisedButton label='FadeInOutTGElement' onClick={::this.handleFadeInOutTGElement} />
            </div>
        )
    }

    /**
     * ReactTransitionGroup
     */
    handleFadeInOutTGElement() {
        let fadeInOutTGElement = null;
        let key = Math.random();
        if(this.state.fadeInOutTGElement) {
            fadeInOutTGElement = null;
        } else {
            fadeInOutTGElement = <FadeInOutTGComponent key={key}/>;
        }
        this.setState({fadeInOutTGElement})
    }

    /**
     * ReactCSSTransitionGroup
     * 当timeout数值大时，快速点击按钮，执行此函数
     * 界面上会淡入多个元素，然后才依次淡出
     */
    handleFadeInOutCSSTGElement() {
        let fadeInOutCSSTGElement;
        let key = Math.random();
        if(this.state.fadeInOutCSSTGElement) {
            fadeInOutCSSTGElement = null;
        } else {
            fadeInOutCSSTGElement = <p key={key}>自定义ReactCSSTransitionGroup的class选择器</p>;
        }
        this.setState({fadeInOutCSSTGElement});
    }
}

export default AnimationContainer;
