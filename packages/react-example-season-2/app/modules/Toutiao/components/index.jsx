import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import Dialog from 'material-ui/Dialog';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import '../style';

export default class Toutiao extends React.Component{
    constructor() {
        super();
        this.state = {
            slideIndex: 0,
            types: [
                {key: 'top', name: '头条'},
                {key: 'shehui', name: '社会'},
                {key: 'guonei', name: '国内'},
                {key: 'guoji', name: '国际'},
                {key: 'yule', name: '娱乐'},
                {key: 'tiyu', name: '体育'},
                {key: 'junshi', name: '军事'},
                {key: 'keji', name: '科技'},
                {key: 'caijing', name: '财经'},
                {key: 'shishang', name: '时尚'}
            ],
            res: [],
            error: {},
            open: false
        }
    }

    handleChange = (value) => {
        this.setState({slideIndex: value});
    }

    componentDidMount() {
        this.loadAllData().then(data => {
            console.log(data);
            this.setState({res: data});
        })
    }

    renderError() {
        const {error} = this.state;
        return <Dialog modal={false} open={this.state.open} onRequestClose={this.handleClose}>
            {error.reason}
        </Dialog>
    }

    handleClose = e => {
        this.setState({open: false});
    }

    loadData(type) {
        const url = API.toutiao.url + `?type=${type}&key=${API.toutiao.key}`;

        return fetch(url).then(res => res.json()).then(data => {
            const {error_code: code, reason} = data;
            if(code === 0) {
                data.result.type = type;
                return Promise.resolve(data.result);
            } else {
                return Promise.reject({code, reason});
            }
        }).catch(error => {
            const newState = {open: true};
            if(error.code) {
                Object.assign(newState, {error});
            } else {
                Object.assign(newState, {code: -1, reason: '系统异常'})
            }
            this.setState(newState);
        })
    }

    loadAllData() {
        let loadQuene = [];
        const {types} = this.state;
        loadQuene = types.map(type => {
            return this.loadData(type.key);
        })
        return Promise.all(loadQuene);
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.slideIndex !== prevState.slideIndex) {
            const tabRoot = ReactDOM.findDOMNode(this._tabs);
            const tabButton = tabRoot.querySelector('button');
            const tabButtonWidth = this.getTabWidth(tabButton);

            const inkBar = tabRoot.children[1].children[0];
            inkBar.style.left = this.state.slideIndex * tabButtonWidth + 'px';
        }
    }

    getTabWidth(tab) {
        let width = window.getComputedStyle(tab).getPropertyValue('width');
        width.replace('px', '');
        return Number.parseInt(width, 10);
    }

    render() {
        const {types, slideIndex, res} = this.state;
        const tabDom = types.map((type, index) => {
            return <Tab key={type.key + '-' + index} style={{color: 'rgb(0, 188, 212)', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0.1)', width: '50px'}} label={type.name} value={index}/>
        })

        let slide = '';
        if(res.length > 0) {
            slide = types.map((type, index) => {
                const data = res[index] ? res[index].data : [];
                if(data.length) {
                    return <div className='slide' key={type.key}>
                        <List>
                            {data.map((news, idx) => <ListItem key={news.uniquekey || (index + '-' + idx)} leftAvatar={<Avatar src={news.thumbnail_pic_s} />} primaryText={news.title}/>)}
                        </List>
                    </div>
                } else {
                    return <p key={index} className='no-data'>暂无数据</p>
                }
            })
        }

        return <div id='toutiao'>
            <Tabs className="tabs" ref={ref => this._tabs = ref} inkBarStyle={{width: '50px'}} style={{overflowX: 'auto'}} tabItemContainerStyle={{backgroundColor: '#fff', display: 'block'}} onChange={this.handleChange} value={slideIndex}>{tabDom}</Tabs>
            <div className="content">
                <SwipeableViews index={slideIndex} onChangeIndex={this.handleChange}>{slide}</SwipeableViews>
            </div>
             {this.state.res.error_code !== 0 && this.renderError()}
        </div>
    }

}
