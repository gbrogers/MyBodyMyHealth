import "./App.scss";
import React, { useState } from "react";
import PeriodTracking from "./components/PeriodTracking/PeriodTracking";
import { useAuth0 } from "@auth0/auth0-react";

import BCTracking from "./components/BCTracking/BCTracking";
import Resources from "./components/Resources/Resources";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
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
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
}
