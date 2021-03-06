// Core
import { put, apply } from "redux-saga/effects";

// instruments
import { api } from "../../../../REST";
import { uiActions } from "../../../ui/actions";

export function* worker () {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.posts.fetch);
        const { data: posts, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(postsActions.fillPosts(posts));
    } catch (error) {
        yield put(uiActions.emitError(error, "profilePosts worker"));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
