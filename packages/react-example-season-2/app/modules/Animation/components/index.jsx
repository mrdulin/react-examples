import './style';
import AnimationInitialMounting from './AnimationInitialMounting';
import Todos from './Todos';

class AnimationContainer extends React.Component{
    render() {
        return (
            <div>
                <AnimationInitialMounting/>
                <Todos/>
            </div>
        )
    }
}

export default AnimationContainer;
