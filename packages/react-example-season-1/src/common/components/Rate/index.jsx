import './style.scss';
import React, {Component} from 'react';

class Rate extends Component{
    static defaultProps = {
        count: 5
    }

    state = {
        stars: [],
        isVote: false
    }

    constructor(){
        super();
        this.handleMouseOver = ::this.handleMouseOver;
        this.handleMouseOut = ::this.handleMouseOut;
        this.handleClick = ::this.handleClick;
    }

    componentWillMount() {
        const {count} = this.props;
        this.buildStarData(count);
    }

    buildStarData(count) {
        const stars = [];
        for(let i = 0; i < count; i++) {
            stars.push({id: i, content: '☆'});
        }
        this.setState({stars});
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        if(nextProps.count !== this.props.count) {
            this.buildStarData(nextProps.count);
        }
    }
    
    handleMouseOver(id) {
        console.log('rate handleMouseOver')
        if(this.state.isVote) return;
        const stars = this.state.stars.map(star => {
            if(star.id <= id) {
                star.content = '★';
            } else {
                star.content = '☆';
            }
            return star;
        });

        this.setState({stars});
    }

    handleMouseOut() {
        console.log('rate handleMouseOut')
        if(this.state.isVote) return;
        this.buildStarData(this.props.count);
    }

    handleClick(id) {
        this.handleMouseOver(id);
        this.setState({isVote: true});
    }   

    render() {
        console.count('Rate render count');
        const {stars} = this.state;
        const starItems = stars.map(star => <Star id={star.id} onClick={this.handleClick} onMouseOut={this.handleMouseOut} onMouseOver={this.handleMouseOver} key={star.id}>{star.content}</Star>)
        return <div>
           {starItems}
        </div>
    }
}

class Star extends Component{
    static defaultProps = {
        starStyle: {
            cursor: 'pointer'
        }
    }

    constructor() {
        super();
        this.handleMouseOver = ::this.handleMouseOver;
        this.handleMouseOut = ::this.handleMouseOut;
        this.handleClick = ::this.handleClick;
    }
    render() {
        const {children} = this.props;
        return <span style={this.props.starStyle} onClick={this.handleClick} onMouseOut={this.handleMouseOut} onMouseOver={this.handleMouseOver}>{children}</span>
    }

    handleMouseOver(e) {
        console.log('star handleMouseOver');
        const {id, onMouseOver} = this.props;
        onMouseOver && onMouseOver(id);
    }

    handleMouseOut() {
        const {onMouseOut} = this.props;
        onMouseOut && onMouseOut();
    }

    handleClick() {
        const {id, onClick} = this.props;
        onClick && onClick(id);
    }
}

export default Rate;