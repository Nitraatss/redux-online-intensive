// Core
import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Pages
import { Login, Signup } from "../pages";

// Instruments
import { book } from "./book";

const mapStateToProps = (state) => {
    return { isAuthenticated: state.auth.get("isAuthenticated") };
};

export default class Public extends Component {
    render () {
        return (
            <Switch>
                <Route component = { Login } path = { book.login } />
                <Route component = { Signup } path = { book.signUp } />
                <Redirect to = { book.login } />
            </Switch>
        );
    }
}
