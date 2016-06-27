import React, {Component} from 'react';
import cityMap from '../jsons/city.json';

class Home extends Component{
    render() {
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
                </div>
                <div className="icon-qq" style={{width: '20px', height: '20px'}}></div>
            </div>
        );
    }
}

export default Home;
