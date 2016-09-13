import React, {Component} from 'react';

class AutoComplete extends Component{
    render() {
        console.count('AutoComplete render ');
        const {dataList = []} = this.props;
        const autoCompleteItems = dataList.map((data, index) => {
            return <li key={data.ID}>
                <div className='left'>
                    <img className='thumbnail' src={data.Image} alt=""/>
                </div>
                <div className='right'>
                    {data.Title}
                </div>
            </li>
        }) 

        return <div>
            <form>
                <div>
                    <label htmlFor="auto-complete-input">搜索书名</label>
                    <input type="text" id='auto-complete-input' placeholder='输入要搜索的书名' onChange={this.handleInputChange}/>
                </div>
            </form>
            <div id='auto-complete-list'>
                <ul>{autoCompleteItems}</ul>
            </div>
        </div>
    }

    handleInputChange = (e) => {
        const {onInputChange} = this.props;
        const value = e.target.value.trim();
        if(this.value === value) return;
        this.value = value;
        onInputChange && onInputChange(value);
    }
}

export default AutoComplete; 