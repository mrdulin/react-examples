const SearchBar = class extends React.Component {

    constructor() {
        super();
        this._input = null;
    }

    _blurSearchInput = () => {
        this._input.blur();
    }

    render() {
        const {onSubmit, value, onChange} = this.props;

        return <form className='search-form' onSubmit={onSubmit} >
            <input ref={ref => this._input = ref} type="search" name="search" placeholder='输入书名搜索' autoComplete='off' autoFocus onChange={onChange} value={value}/>
        </form>
    }
}

export default SearchBar;