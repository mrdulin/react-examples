import SearchHistoryItem from './SearchHistoryItem';

const SearchHistory = ({show, items, onItemClick}) => {
  if (!show) return null;
  return <div className='search-history'>
    <p className='search-history-text'>历史搜索</p>
    <ul className='search-history-list'>
      {
        items.map((item, index) => <SearchHistoryItem onClick={() => onItemClick(item)} key={index} item={item}/>)
      }
    </ul>
  </div>
}

export default SearchHistory;
