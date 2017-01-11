export default class extends React.Component{
    componentDidMount() {
        console.log('child componentDidMount');
        setTimeout(() => {
            console.log('child componentDidMount setTimeout')
            this.load();
        }, 0)
        // this.load();
    }
    render() {
        console.count('child render');
        return <div className='child'>
            <p>child component</p>
        </div>
    }
}
