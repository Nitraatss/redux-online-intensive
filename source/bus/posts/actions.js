//Types
import {
    FETCH_POSTS_ASYNC,
    FILL_POSTS,
    ADD_POST,
    CREATE_POST_ASYNC
} from "./types";

// instruments
import { api } from "../../REST";

export const fillPosts = (posts) => {
    return {
        type:    FILL_POSTS,
        payload: posts,
    };
};

export const addPost = (comment) => {
    return {
        type:    ADD_POST,
        payload: comment,
    };
};

export const fetchPostsAsync = () => async (dispatch) => {
    dispatch({
        type: FETCH_POSTS_ASYNC,
    });

    const response = await api.posts.fetch();
    const result = await response.json();

    dispatch(fillPosts(result.data));
};

export const createPostAsync = (comment) => async (dispatch) => {
    dispatch({
        type: CREATE_POST_ASYNC,
    });

    const response = await api.posts.create(comment);

    const result = await response.json();

    dispatch(addPost(result.data));
};
