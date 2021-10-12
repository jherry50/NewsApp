import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

//import pages
import SignIn from "./signin";
import SignUp from "./signup";
import Dashboard from "./dashboard";
import News from "./news";

//routes requiring authenticated user
const RestrictedRoute = ({ component: Component, authUser, ...rest }) => (
  <Route
      {...rest}
      render={props =>
          authUser !== null ? (
              <Component {...props} />
          ) : (
              <Redirect
                  to={{
                      pathname: "/signin",
                      state: { from: props.location }
                  }}
              />
          )
      }
  />
);

class Pages extends Component {
  render() {
    const {
        match,
    } = this.props;
    const authUser = localStorage.getItem("authUser");

    return (
      <div
        className="app-main"
        style={{
          overflowY: "auto",
          overflowX: "hidden"
        }}
      >


        <div className="contentWrapper">
          <Switch>
            <Route path="/" exact component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route path="/news" component={News} />
            <RestrictedRoute
                path={`${match.url}dashboard`}
                authUser={authUser}
                component={Dashboard}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Pages;
