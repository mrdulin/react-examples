import React, {Component} from 'react';
import {connect} from 'react-redux';
import AutoComplete from './components/AutoComplete.react';
import * as Action from '../../../actions/AutoComplete.action';

class AutoCompletePage extends Component{
    componentDidMount() {
        const {dispatch, Books} = this.props;
    }
    render() {
        console.count('AutoCompletePage render')
        const {Books} = this.props;
        return <div>
            <AutoComplete onInputChange={this.handleInputChange} dataList={Books}></AutoComplete>
        </div>
    }

    handleInputChange = (text) => {
        console.log(text);
        const {dispatch} = this.props;
        dispatch(Action.fetchAutoCompleteData(text));
    }

} 

const mapStateToProps = state => ({...state.AutoComplete});
export default connect(mapStateToProps)(AutoCompletePage);