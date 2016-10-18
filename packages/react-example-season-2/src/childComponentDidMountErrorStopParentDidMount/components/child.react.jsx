export default class Parent extends React.Component{
    componentDidMount() {
        console.log('child componentDidMount');
        setTimeout(() => {
            console.log('child componentDidMount setTimeout')
            this.load();
        }, 200)   
        // this.load();
    }
    render() {
        return <div className='child'>
            <p>child component</p>
        </div>
    }
}