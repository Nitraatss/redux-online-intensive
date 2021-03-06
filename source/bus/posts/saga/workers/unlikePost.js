// Core
import { put, apply, select } from "redux-saga/effects";

// instruments
import { api } from "../../../../REST";
import { postsActions } from "../../actions";
import { uiActions } from "../../../ui/actions";

export function* unlikePost ({ payload: postID }) {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.posts.unlike, [postID]);

        if (response.status !== 204) {
            const { message } = yield apply(response, response.json);

            throw new Error(message);
        }

        const liker = yield select((state) => {
            return state.profile.removeAll(["avatar", "token"]);
        });

        yield put(postsActions.unlikePost({ liker, postID }));
    } catch (error) {
        yield put(uiActions.emitError(error, "unlikePost worker"));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
