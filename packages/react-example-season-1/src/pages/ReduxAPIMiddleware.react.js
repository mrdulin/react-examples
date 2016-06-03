import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {requestCity, login} from '../actions/reduxApiMiddleware';
import {selectCity} from '../actions/reactRedux01';

class ReduxAPIMiddleware extends Component{

    static PropTypes = {
        cityMap: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.dispatch(requestCity());
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.err.name) {
            alert(nextProps.err.message);
        }
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

                <h3>例1:</h3>
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

                <h3>例2:通过使用FormData给服务器端发送数据</h3>
                <form id="myForm" name="myForm" onSubmit={e => this.myFormSubmit(e)}>
                  <div>
                    <label for="username">Enter name:</label>
                    <input type="text" id="username" name="username"/>
                  </div>
                  <div>
                    <label for="password">Enter account number:</label>
                    {/*注意:input标签必须有结束符号/,否则会报错*/}
                    <input type="text" id="password" name="password"/>
                  </div>
                  <input type="submit" value="Submit!"/>
                </form>
            </div>
        );
    };

    selectCityChange(e) {
        const cityKey = e.target.value;
        // console.log('cityKey', cityKey);
        this.props.dispatch(selectCity(cityKey));
    }

    myFormSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        this.props.dispatch(login(formData));
    }
}

const mapStateToProps = (state) => {
    return {
        cityMap: state.cityMap,
        err: state.err,
        usr: state.usr
    };
};

export default connect(
    mapStateToProps
)(ReduxAPIMiddleware);
