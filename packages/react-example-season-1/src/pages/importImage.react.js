import React, {Component} from 'react';
import url from '../images/avatar.jpg'

export default class extends Component{
    componentDidMount() {
        console.log(url);
    }
    render() {
        return <div>
            Is it possiable to import a image?
        </div>
    }
}