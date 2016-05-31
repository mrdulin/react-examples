export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAIL = 'FETCH_POSTS_FAIL';
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const REFRESH_SUBREDDIT = 'REFRESH_SUBREDDIT';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const selectSubreddit = (subreddit) => {
    return {
        type: SELECT_SUBREDDIT,
        subreddit
    };
};

export const refreshSubreddit = (subreddit) => {
    return {
        type: REFRESH_SUBREDDIT,
        subreddit
    };
};

export const requestPosts = (subreddit) => {
    return {
        type: REQUEST_POSTS,
        subreddit
    };
};

export const receivePosts = (subreddit, json) => {
    return {
        type: RECEIVE_POSTS,
        subreddit,
        posts: json.data.children.map(child => child.data),
        receiveAt: Date.now()
    };
};
