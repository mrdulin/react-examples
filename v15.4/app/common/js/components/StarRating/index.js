/**
 * Created by dulin on 17/1/18.
 */

import {Component, PropTypes} from 'react';
import Star from './Star';

import './style';

class StarRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStar: 0
    };
  }

  vote(e, i) {
    console.log(e, i);
    this.setState({selectedStar: i + 1});
  }

  render() {
    const {totalStars} = this.props;
    const {selectedStar} = this.state;

    return <div>
      {
        [...new Array(totalStars)].map((star, idx) => {
          return <Star key={idx} selected={idx < selectedStar} onClick={e => this.vote(e, idx)}></Star>
        })
      }
      <p>{selectedStar} of {totalStars} stars</p>
    </div>
  }
}

StarRating.defaultProps = {
  totalStars: 5
};

export default StarRating;
