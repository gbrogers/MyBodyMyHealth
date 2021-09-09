import "./App.scss";
import React, { useEffect, useState } from "react";
import PeriodTracking from "./components/PeriodTracking/PeriodTracking";
import { useAuth0 } from "@auth0/auth0-react";

import BCTracking from "./components/BCTracking/BCTracking";
import Resources from "./components/Resources/Resources";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  //any time app does a thing, lets call to see if this token exist

  //axios did exist by checking if storage // reponse from server with 200 or 401. if good grab all info from backend. update local state

  //routes pass down props.
  //updated function that will upate variables and then pass function done.
  return (
    <>
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/resources" component={Resources} />
            <Route path="/menstrualtracking" exact component={PeriodTracking} />
            <Route path="/contraceptivetracking" exact component={BCTracking} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
}
