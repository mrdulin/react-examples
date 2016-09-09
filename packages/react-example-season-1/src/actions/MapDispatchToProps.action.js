export const getBook = () => {
    return {type: 'reactRedux03_getBook'};
};

export const deleteBook = (id) => {
    return {type: 'reactRedux03_deleteBook', id};
};
