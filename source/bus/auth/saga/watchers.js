// Core
import { takeEvery, all, call } from "redux-saga/effects";

//Types
import { types } from "../types";

//Workers
import { signUp, logIn } from "./workers";

function* watchSignUp () {
    yield takeEvery(types.SIGNUP_ASYNC, signUp);
}

function* watchLogIn () {
    yield takeEvery(types.LOGIN_ASYNC, logIn);
}

export function* watchAuth () {
    yield all([call(watchSignUp), call(watchLogIn)]);
}
