export const LOGIN = Symbol('login');

export const login = (user) => ({
    type: LOGIN,
    payload: {
        user
    }
});