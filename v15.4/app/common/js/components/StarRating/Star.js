/**
 * Created by dulin on 17/1/18.
 */
import {PropTypes} from 'react';

const Star = ({selected = false, onClick}) => {
  return <div className={`star ${selected ? 'selected' : ''}`} onClick={onClick}></div>
};

Star.propTypes = {
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func
};

export default Star;

