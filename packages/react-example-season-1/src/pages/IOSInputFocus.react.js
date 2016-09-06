/**
 * Created by dulin on 16/8/18.
 */
import React, {Component} from 'react';

class IOSInputFocus extends Component{
    render() {
        return <div id="ios-input-focus">
            <header className="header" ref={ref => this._header = ref}>头部</header>
            <input type="text" placeholder="王宝强" onFocus={() => this.handleFocus()}/>

            <input type='file' accept='image/*'/>   
        </div>
    }

    handleFocus(e) {
        this._header.classList.add('sticky');
    }
}

export default IOSInputFocus;