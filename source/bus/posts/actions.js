//Types
import { types } from "./types";

// instruments
import { api } from "../../REST";

export const postsActions = {
    // Sync
    fillPosts: (posts) => {
        return {
            type:    types.FILL_POSTS,
            payload: posts,
        };
    },
    createPost: (comment) => {
        return {
            type:    types.CREATE_POST,
            payload: comment,
        };
    },
    clearPosts: () => {
        return {
            type: types.CLEAR_POSTS,
        };
    },
    removePost: (postID) => {
        return {
            type:    types.REMOVE_POST,
            payload: postID,
        };
    },

    // Async
    fetchPostsAsync: () => {
        return {
            type: types.FETCH_POSTS_ASYNC,
        };
    },
    createPostAsync: (comment) => {
        return {
            type:    types.CREATE_POST_ASYNC,
            payload: comment,
        };
    },
    removePostAsync: (postID) => {
        return {
            type:    types.REMOVE_POST_ASYNC,
            payload: postID,
        };
    },
};
