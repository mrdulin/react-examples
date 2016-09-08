import React, {Component} from 'react';
import * as Action from '../../../actions/FileIO.action';
import {connect} from 'react-redux';

class FileIO extends Component{
    constructor() {
        super();
        this.handleFileUpload = ::this.handleFileUpload;
    }
    render() {
        return <div>
            <form>
                <input type="file" multiple onChange={this.handleFileUpload}/>
            </form>
        </div>
    }

    handleFileUpload(event) {
        const {dispatch} = this.props;
        const formData = new FormData();
        const fileList = event.target.files;
        const {length: len} = fileList;

        for(let i = 0; i < len; i ++) {
            formData.append('file' + i, fileList[i]);
        }

        dispatch(Action.uploadFiles(formData));
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.FileIO
    }
}

export default connect()(FileIO);