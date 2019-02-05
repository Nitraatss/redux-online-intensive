// Core
import { put, apply } from "redux-saga/effects";

// instruments
import { api } from "../../../../REST";
import { postsActions } from "../../actions";
import { uiActions } from "../../../ui/actions";

export function* fetchPosts () {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.posts.fetch);
        const { data, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(postsActions.fillPosts(data));
    } catch (error) {
        yield put(uiActions.emitError(error, 'fetchPosts worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
