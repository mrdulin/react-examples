class Child extends React.Component{
    shouldComponentUpdate(nextProps, nextState) {
        if(this.props.books.length !== nextProps.books.length) {
            return true;
        }
        if(this.props.people.name !== nextProps.people.name || this.props.people.age !== nextProps.people.age) {
            return true;
        }
        return false;
    }

    render() {
        const {books, people} = this.props;
        return <div>
            <div>test1: <pre>{JSON.stringify(books, null, 4)}</pre></div>
            <div>test2: <pre>{JSON.stringify(people, null, 4)}</pre></div>
        </div>
    }
}

export default class SCUDemo extends React.Component{
    constructor() {
        super();
        this.state = {
            books: ['angular', 'react'],
            me: {
                name: 'dulin',
                age: 23
            }
        }
    }

    clickhandler = e => {
        const books = this.state.books;
        books.push('jquery');
        this.setState({books});
    }

    clickHandler2 = e => {
        this.setState((prevState, currentProps) => {
            const me =  {...prevState.me, name: 'novaline', age: 24};
            return {me};
        })
    }

    render() {
        return <div>
            <Child books={this.state.books} people={this.state.me}/>
            <button type='button' onClick={this.clickhandler}>click me!</button>
            <button type="button" onClick={this.clickHandler2}>click me to change people!</button>
            <br/>
            <p>test1: 引用类型的数据在传入子组件时, nextProps.books和this.props.books是相同的引用，所有length是相等的，子组件不会rerender</p>
            <p>test2: 处理这种情况，可以是用Object.assign，spread properties, 克隆等方法，使下一次传入子组件的引用不同即可。</p>
        </div>
    }
}

