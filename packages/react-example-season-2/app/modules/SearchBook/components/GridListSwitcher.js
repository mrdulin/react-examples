/**
 * Created by dulin on 17/1/18.
 */
const GridListSwitcher = ({show, type = 'list', onClick}) => {
    if(!show) return null;
    let text = '';

    const toggleSwitcher = e => {
        let newType = type === 'list' ? 'grid' : 'list';
        text = getText(newType);
        // console.log(text);
        onClick && onClick(newType);
    };

    const getText = t => {
        return t === 'list' ? '列表' : '网格';
    };

    text = getText(type);

    return <div className="grid-list-switcher" onClick={toggleSwitcher}>
        {text}
    </div>
};

GridListSwitcher.propTypes = {
    type: React.PropTypes.string
};

export default GridListSwitcher;
