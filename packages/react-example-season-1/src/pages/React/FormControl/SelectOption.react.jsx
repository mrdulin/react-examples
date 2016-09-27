import React, {Component} from 'react';

class SelectOption extends Component{
    static defaultProps = {
        cityMap: {
            shanghai: '上海',
            chengdu: '成都',
            hangzhou: '杭州',
            beijing: '北京'
        },

        bookMap: {
            angular: 'Angular权威指南',
            javascript: 'JavaScript高级程序设计',
            jquery: '锋利的jquery',
            css: 'CSS权威指南'
        }
    }

    state = {
        city: {
            key: '',
            name: ''
        },

        books: []
    }

    render() {
        const {cityMap, bookMap} = this.props;
        const cityOptions = Object.keys(cityMap).map(cityKey => {
            return <option key={cityKey} value={cityKey}>{cityMap[cityKey]}</option>
        });

        const bookOptions = Object.keys(bookMap).map(bookKey => {
            return <option value={bookKey} key={bookKey}>{bookMap[bookKey]}</option>
        });


        return <div>
            <form>
                <div>
                    <label htmlFor="citySelect">单选：</label>
                    <select name="citySelect" onChange={this.handleCitySelect} value={this.state.city.key} size='1'>
                        <option value="">-- 请选择城市 --</option>
                        {cityOptions}
                    </select>
                </div>
                <div>
                    <label htmlFor="bookSelect">多选：</label>
                    <select name="bookSelect" onChange={this.handleBookSelect} value={this.state.books} multiple>
                        <option value="">-- 请选择书籍 --</option>
                        {bookOptions}
                    </select>
                </div>
            </form>
            <div>
                选择的城市：<pre>{JSON.stringify(this.state.city, null, 4)}</pre>
            </div>
            <div>
                选择的书籍：<pre>{JSON.stringify(this.state.books, null, 4)}</pre>
            </div>

            <hr/>
            <p>结论：</p>
            <p>select可以通过react提供的value属性来指定选择的option，而不用在option上使用selected属性</p>
            <p>select上的value属性可以是单个value(单选，value与option的value对应)，或者是一个数组<code>value={'{[value1, value2]}'}</code></p>
        </div>
    }

    handleBookSelect = e => {
        const options = e.target.options;
        const keys = [...options].filter(o => o.selected && o.value).map(o => o.value);
        this.setState({books: keys});
    }

    handleCitySelect = e => {
        const key = e.target.value;
        const name = this.props.cityMap[key] || '';
        this.setState({city: {key, name}});
    }
}

export default SelectOption;