import React, {Component} from 'react';
import cityMap from '../jsons/city.json';

class Home extends Component{
    render() {
        const urls = ['./test.png'];
        const url = urls[0];
        const req = require.context('../images', true, /\.png$/);

        return (
            <div id="home">
                <h2>首页</h2>
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
            </div>
        );
    }
}

export default Home;
