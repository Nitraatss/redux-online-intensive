// Instruments
import { groupId, invite, MAIN_URL } from "./config";

export const api = {
    get token () {
        return localStorage.getItem("token");
    },
    users: {
        fetch () {
            return fetch(`${MAIN_URL}/user/all`, {
                method:  "GET",
                headers: {
                    Authorization: this.token,
                },
            });
        },
    },
    auth: {
        signUp (userInfo) {
            return fetch(`${MAIN_URL}/user/${groupId}`, {
                method:  "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userInfo),
            });
        },
        logIn (userInfo) {
            return fetch(`${MAIN_URL}/user/login`, {
                method:  "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userInfo),
            });
        },
        authenticate () {
            return fetch(`${MAIN_URL}/user/login`, {
                method:  "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ token: this.token }),
            });
        },
        logOut () {
            return fetch(`${MAIN_URL}/user/logout`, {
                method:  "GET",
                headers: {
                    Authorization: this.token,
                },
            });
        },
    },
    posts: {
        fetch () {
            return fetch(`${MAIN_URL}/feed`, {
                method:  "GET",
                headers: {
                    Authorization: this.token,
                },
            });
        },
        create (comment) {
            return fetch(`${MAIN_URL}/feed`, {
                method:  "POST",
                headers: {
                    Authorization:  this.token,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ comment }),
            });
        },
        remove (postID) {
            return fetch(`${MAIN_URL}/feed/${postID}`, {
                method:  "DELETE",
                headers: {
                    Authorization: this.token,
                },
            });
        },
        like (postID) {
            return fetch(`${MAIN_URL}/feed/like/${postID}`, {
                method:  "PUT",
                headers: {
                    Authorization: this.token,
                },
            });
        },
        unlike (postID) {
            return fetch(`${MAIN_URL}/feed/like/${postID}`, {
                method:  "PUT",
                headers: {
                    Authorization: this.token,
                },
            });
        },
    },
};
