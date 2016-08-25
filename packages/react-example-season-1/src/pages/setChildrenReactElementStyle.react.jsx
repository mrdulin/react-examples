import React, {Component} from 'react';

class StyleByParentComponent extends Component{
    render() {
        const children = React.Children.map(this.props.children, (child, idx) => {
            console.log(child);
            return React.cloneElement(child, {style: {borderRadius: '50%', width: '100px', height: '100px', backgroundColor: 'red'}});
        })
        return <div>
            child component
            {children}
        </div>
    }
}

class setChildrenReactElementStyle extends Component{
    render() {
        return <div>
            parent component
            <StyleByParentComponent>
                <div className='cycle'>圆形</div>
                <div className="square">方形</div>
            </StyleByParentComponent>
        </div>
    }
}

export default setChildrenReactElementStyle;

