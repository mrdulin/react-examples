let componentLifeCycleMixins = {
    componentWillMount() {
        console.log('component will mount', new Date().getTime());
    }
};

export default componentLifeCycleMixins;
