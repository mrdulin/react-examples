import React, {Component, PropTypes} from 'react';
import {connect} from 'redux';
import {requestCity} from '../actions/reduxApiMiddleware';

class ReduxAPIMiddleware extends Component{
    componentDidMount() {
        this.props.dispatch(requestCity());
    }

    render() {
        const {cityMap} = this.props;
        const cityKeys = Object.keys(cityMap);
        const options = cityKeys.map((cityKey) => {
            return <option key={cityKey} value={cityKey}>{cityMap[cityKey]}</option>;
        });
        return (
            <div>
                <h2>redux-api-middware用法例子</h2>
                <form>
                    <div>
                        <label>
                            城市选择:
                            <select onChange={e => this.selectCityChange(e)}>
                                <option>-- 请选择城市 --</option>
                                {options}
                            </select>
                        </label>
                    </div>
                </form>
            </div>
        );
    };

    selectCityChange(e) {
        const cityKey = e.target.value;
        this.props.dispatch()
    }
}

const mapStateToProps = (state) => {
    return {
        cityMap: state.cityMap
    };
};

export default connect(
    mapStateToProps
)(ReduxAPIMiddleware);
