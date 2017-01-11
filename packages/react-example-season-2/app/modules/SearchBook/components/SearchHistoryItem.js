const SearchHistoryItem = ({item, onClick}) => {
    return <li className='search-history-item' onClick={onClick}>{item}</li>
}

export default SearchHistoryItem;