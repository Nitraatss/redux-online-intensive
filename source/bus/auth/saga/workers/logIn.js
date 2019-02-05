// Core
import { put, apply } from "redux-saga/effects";
import { delay } from "redux-saga";

// instruments
import { api } from "../../../../REST";
import { authActions } from "../../../auth/actions";
import { uiActions } from "../../../ui/actions";
import { profileActions } from "../../../profile/actions";

export function* logIn ({ payload: userData }) {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.auth.logIn, [userData]);
        const { data: profile, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(profileActions.fillProfile(profile));
        yield put(authActions.authenticate());
    } catch (error) {
        yield put(uiActions.emitError(error, "logIn worker"));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
