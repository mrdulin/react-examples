export const getBook = () => {
    return {type: 'MapDispatchToProps_getBook'};
};

export const deleteBook = (id) => {
    return {type: 'MapDispatchToProps_deleteBook', id};
};
