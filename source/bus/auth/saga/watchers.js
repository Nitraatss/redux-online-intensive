// Core
import { takeEvery, all, call } from "redux-saga/effects";

//Types
import { types } from "../types";

//Workers
import { signUp, logIn, authenticate, initialize, logOut } from "./workers";

function* watchSignUp () {
    yield takeEvery(types.SIGNUP_ASYNC, signUp);
}

function* watchLogIn () {
    yield takeEvery(types.LOGIN_ASYNC, logIn);
}

function* watchAuthenticate () {
    yield takeEvery(types.AUTHENTICATE_ASYNC, authenticate);
}

function* watchInitialize () {
    yield takeEvery(types.INITIALIZE_ASYNC, initialize);
}

function* watchLogOut () {
    yield takeEvery(types.LOGOUT_ASYNC, logOut);
}

export function* watchAuth () {
    yield all([
        call(watchSignUp),
        call(watchLogIn),
        call(watchAuthenticate),
        call(watchInitialize),
        call(watchLogOut)
    ]);
}
