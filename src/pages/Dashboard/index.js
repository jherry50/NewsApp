import React, { Component } from "react";
import {Redirect, Route, Switch, NavLink } from "react-router-dom";
import Header from '../../components/header';
import Footer from '../../components/footer';

import Dashboard from "./dashboard";
import News from "./news";

class Dash extends Component {
  render() {
    const {
        match,
        location,
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
        <Header/>

        <div className="contentWrapper">
          <Switch>
            {/* <Redirect exact from={`${match.url}/`} to={`${match.url}/news`}/> */}
            <Route exact path={`${match.url}/`}  component={News} />
            <Route exact path={`${match.url}/news`} component={News} />
          </Switch>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Dash;
