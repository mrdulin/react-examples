/**
 * Created by dulin on 17/1/18.
 */

//函数从无状态组件中抽出来放在外面，因为无状态组件每次渲染的时候，都会重新走一遍函数声明
const getText = t => {
    return t === 'list' ? '列表' : '网格';
};

const toggleSwitcher = (type, onClick) => {
    let newType = type === 'list' ? 'grid' : 'list';
    onClick && onClick(newType);
};

const GridListSwitcher = ({show, type = 'list', onClick}) => {
    if(!show) return null;
    console.log('GridListSwitcher render');

    let text = getText(type);

    return <div className="grid-list-switcher" onClick={() => toggleSwitcher(type, onClick)}>
        {text}
    </div>
};

GridListSwitcher.propTypes = {
    type: React.PropTypes.string
};

export default GridListSwitcher;
