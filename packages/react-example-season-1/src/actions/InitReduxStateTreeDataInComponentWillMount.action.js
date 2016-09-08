/**
 * Created by dulin on 16/7/29.
 */
export const initState = () => {
    return {type: 'InitReduxStateTreeDataInComponentWillMount_initState'};
};

export const addPage = (page) => {
    return {type: 'InitReduxStateTreeDataInComponentWillMount_addPage', page};
};

export const deleteBook = index => {
    return {type: 'InitReduxStateTreeDataInComponentWillMount_deleteBook', index};
}
