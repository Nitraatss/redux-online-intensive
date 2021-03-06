// Core
import { put, apply } from "redux-saga/effects";
import { delay } from "redux-saga";

// instruments
import { api } from "../../../../REST";
import { authActions } from "../../../auth/actions";
import { uiActions } from "../../../ui/actions";
import { profileActions } from "../../../profile/actions";

export function* logIn ({ payload: credentials }) {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.auth.logIn, [credentials]);
        const { data: profile, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        if (credentials.remember) {
            yield apply(localStorage, localStorage.setItem, ["remember", true]);
        }

        yield apply(localStorage, localStorage.setItem, [
            "token",
            profile.token
        ]);

        yield put(profileActions.fillProfile(profile));
        yield put(authActions.authenticate());
    } catch (error) {
        yield put(uiActions.emitError(error, "logIn worker"));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
