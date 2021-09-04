import "./App.module.scss";
import React, { useState } from "react";
import PeriodTracking from "./PeriodTracking";
import { useAuth0 } from "@auth0/auth0-react";

import BCTracking from "./BCTracking";
import Resources from "./Resources";
import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/resources" component={Resources} />
            <Route path="/menstrualtracking" exact component={PeriodTracking} />
            <Route path="/contraceptivetracking" exact component={BCTracking} />
            {/* <Route path="/shop/:id" component={ItemDetail} /> */}
          </Switch>
        </div>
      </Router>
    </>
  );
}
const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};
