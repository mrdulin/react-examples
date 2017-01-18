const SearchBar = class extends React.Component {

    constructor() {
        super();
        this._input = null;
    }

    _blurSearchInput = () => {
        this._input.blur();
    };

    _toggleFixSearch = (action, immediate) => {
        if(immediate) {
            this._form.style.transition = 'none';
        }
        this._form.classList[action]('sticky');
    };

    _recoverTransition = () => {
        this._form.style.removeProperty('transition');
        this._form.style.transition = '.5s ease 0s';
    };

    get height() {
        let computedHeight = window.getComputedStyle(this._form).getPropertyValue('height');
        computedHeight.replace('px', '');
        computedHeight = Number.parseInt(computedHeight, 10);
        return computedHeight;
    }

    render() {
        const {onSubmit, value, onChange, children} = this.props;

        return <form ref={ref => this._form = ref} className='search-form' onSubmit={onSubmit} >
            <input ref={ref => this._input = ref} type="search" name="search" placeholder='输入书名搜索' autoComplete='off' autoFocus onChange={onChange} value={value}/>
            {children}
        </form>
    }
}

export default SearchBar;
