export default {
    path: 'image-upload',
    getComponents(nextState, cb) {
        require.ensure([], require => {
            cb(null, {content: require('./main')});
        }, 'ImageUpload');
    }
}