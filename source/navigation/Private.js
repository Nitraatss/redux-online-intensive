// Core
import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Pages
import { Feed, Profile, NewPassword } from "../pages";

// Instruments
import { book } from "./book";

const mapStateToProps = (state) => {
    return { isAuthenticated: state.auth.get("isAuthenticated") };
};

export default class Private extends Component {
    render () {
        return (
            <Switch>
                <Route component = { Feed } path = { book.feed } />
                <Route component = { Profile } path = { book.profile } />
                <Route component = { NewPassword } path = { book.newPassword } />
                <Redirect to = { book.feed } />
            </Switch>
        );
    }
}
