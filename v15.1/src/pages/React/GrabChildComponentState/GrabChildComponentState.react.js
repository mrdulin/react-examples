import React, {Component} from 'react';
import GrabStateByParentComponent from './components/GrabStateByParentComponent.react';

class GrabChildComponentState extends Component{

    componentDidMount() {
        // console.log('getChildState', this.getChildState);
        const childState = this.getChildState();
        //do something with GrabStateByParentComponent's state
        const childFns = this.getChildFns();
        // console.log(childFns);
        childFns.fn1();
        childFns.fn2();
            console.log(this.GrabStateByParentComponent);
            console.log(this.GrabStateByParentComponent.state === childState);    //true
            console.log(this.GrabStateByParentComponent.setState === childFns.setState);    //true
        setTimeout(() => {
            this.GrabStateByParentComponent.setState({name: 'WTF'});
            //下面报错
            // childFns.setState({name: 'WTF'});
            childFns.setState = this.GrabStateByParentComponent::childFns.setState;
            childFns.setState({job: 'fuck off'});
        }, 2000);
    }

    render() {
        return <div>
            <GrabStateByParentComponent ref={ins => this.GrabStateByParentComponent = ins} getChildState={fn => this.getChildState = fn} getChildFns={fns => this.getChildFns = fns}/>
        </div>
    }
}

export default GrabChildComponentState;
