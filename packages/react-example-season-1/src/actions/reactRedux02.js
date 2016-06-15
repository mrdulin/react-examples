export const getUser = () => {
    return {type: 'reactRedux02_getUser'};
}

export const deleteUser = (id) => {
    return {type: 'reactRedux02_deleteUser', id};
}
