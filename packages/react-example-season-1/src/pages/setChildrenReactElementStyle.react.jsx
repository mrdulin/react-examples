import React, {Component} from 'react';

class StyleByParentComponent extends Component{
    static defaultProps = {
        cycle: {borderRadius: '50%', width: '100px', height: '100px', backgroundColor: 'red'},
        square: {width: '100px', height: '100px', backgroundColor: 'lightblue'}
    }
    
    constructor() {
        super();
        this.name = '看着点挤';
    }

    render() {
        const children = React.Children.map(this.props.children, (child, idx) => {
            console.dir(child);
            const className = child.props.className;
            return React.cloneElement(child, {style: this.props[className]});
        })
        return <div>
            child component
            {children}
        </div>
    }

    get someProp() {
        return this.name;
    }

    set someProp(value) {
        this.name = value;
    }
}

class setChildrenReactElementStyle extends Component{
    componentDidMount() {
        console.dir(this._StyleByParentComponent.someProp); //undefined

        setTimeout(() => {
            this._StyleByParentComponent.someProp = '挤尼玛的铲铲';
            console.log(this._StyleByParentComponent.someProp); //挤尼玛
        }, 2000);
    }
    render() {
        return <div>
            parent component
            <StyleByParentComponent ref={ref => this._StyleByParentComponent = ref}>
                <div className='cycle'>圆形</div>
                <div className="square">方形</div>
            </StyleByParentComponent>
        </div>
    }
}

export default setChildrenReactElementStyle;

