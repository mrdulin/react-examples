import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class ChildComponent extends Component{

    render() {
        // console.log('selectCity', this.props.selectCity);
        const {cityList} = this.props;
        const options = cityList.map((city) => {
            return <option key={city.key} value={city.key}>{city.name}</option>;
        });

        return (
            <form>
                <div>
                    <label>
                        <select onChange={e => {this.props.onSelectCity(e)}}>
                            <option value=''>-- 请选择城市 --</option>
                            {options}
                        </select>
                    </label>
                </div>
            </form>
        );
    }
}

//为组件props注入dispatch和cityList
//ownProps是父组件传过来的props
//这个方法会在父组件传过来新的props时再次调用
const mapStateToProps = (state, ownProps) => {
    // console.log('ownProps', ownProps);
    return {
        selectCity: ownProps.city
    };
};

export default connect(
    mapStateToProps
)(ChildComponent);
