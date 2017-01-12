import Scroller from 'common/js/components/Scroller';

import './style';

export default class extends React.Component{
    constructor() {
        super();

        this.state = {
            items: [],
            distance: 20,
            top: 64
        };
    }

    componentWillMount() {
        this._fetchData().then(data => {
            this.setState({items: data.items});
        })
    }

    _fetchData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let items = [];
                for(let i = 0; i < 10; i++) {
                    items.push('item-' + (this.state.items.length + i));
                }
                resolve({items, distance: 30, top: 100})
            }, 2000);
        })
    }

    _loadMore(cb) {
        console.log('trigger container c load more')
        this._fetchData().then(data => {
            const {items, distance, top} = data;
            const newItems = Array.prototype.concat.apply(this.state.items, items);
            this.setState({
                distance,
                items: newItems,
                top
            }, cb);
        })
    }

    render() {
        const {items, distance, top} = this.state;

        return <div id='test-scroller'>
            <Scroller top={top} onInfinite={cb => this._loadMore(cb)} hasMore={true} distance={distance}>
                {
                    !items.length ? null : <ul className='list'>
                            {
                                items.map((item, idx) => <li key={idx}>{item}</li>)
                            }
                    </ul>
                }
            </Scroller>
        </div>
    }
}
