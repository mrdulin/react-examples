export const UPDATE_MESSAGE = Symbol('updateMessage');

export const updateMessage = (key, message) => ({
    type: UPDATE_MESSAGE,
    payload: {
        message,
        key
    }
});
