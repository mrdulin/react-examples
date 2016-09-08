const initState = {
    fileKeys: []
};

export const FileIO = (state = initState, action) => {
    switch(action.type) {
        case 'FileIO_uploadFilesSuccess':
            const fileKeysClone = state.fileKeys.slice(0);
            fileKeysClone.push(action.payload.key);
            return Object.assign({}, state, {fileKeys: fileKeysClone});
        default:
            return state;
    }
}