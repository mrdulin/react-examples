import React, {Component} from 'react';
import cityMap from '../jsons/city';
import AComponent from '../component/A.react';
import BComponent from '../component/B.react';

//如果不在webpack config中指定resolve.alias，则需要通过相对路径引用
// import util from '../common/js/util';

//指定resolve.alias，则通过指定映射的目录名引用
// 不能使用es6的import引入模块，因为这是webpack的特性，需要使用require来引入
// import util from 'commonScript/util';

const util = require('commonScript/util');

class Home extends Component{

    constructor(props) {
        super(props);
        this.state = {
            headColor: ''
        }
    }

    componentDidMount() {
        this.setState({
            headColor: util.getComputedStyleValue(document.querySelector('.header'), 'color')
        });
    }

    render() {
        const urls = ['./test.png'];
        const url = urls[0];
        const req = require.context('../images', true, /\.png$/);

        return (
            <div id="home">
                <h2 className="header">首页</h2>
                <form>
                    <label>
                        请选择城市:
                        <select>
                            {
                                Object.keys(cityMap).map((key, index) => {
                                    return <option key={index}>{cityMap[key]}</option>;
                                })
                            }
                        </select>
                    </label>
                </form>
                <div>
                    <img src={require('../images/test.png')}/>
                    {/*
                        使用webpack的require的图片地址如果是变量，不能直接像下面这样写：
                        <img src={require(url)}/> 报错

                        需要指定require.context
                    */}
                   <img src={req(url)}/>
                </div>
                <div className="icon-qq" style={{width: '20px', height: '20px'}}></div>
                <AComponent></AComponent>
                <BComponent></BComponent>
                <div>
                {this.state.headColor}
                <a href="http://www.google.com">google</a>
                </div>
            </div>
        );
    }
}

export default Home;
