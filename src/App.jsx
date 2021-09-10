import "./App.scss";
import React, { useEffect, useState, useMemo } from "react";
import PeriodTracking from "./components/PeriodTracking/PeriodTracking";

import BCTracking from "./components/BCTracking/BCTracking";
import Resources from "./components/Resources/Resources";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import SignUp from "./components/SignUp/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { User } from "@auth0/auth0-spa-js";
import { UserContext } from "./UserContext";

export default function App() {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <>
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <UserContext.Provider value={value}>
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Route path="/logout" exact component={Logout} />
              <Route path="/signup" exact component={SignUp} />
              <Route path="/resources" component={Resources} />
              <Route
                path="/menstrualtracking"
                exact
                component={PeriodTracking}
              />
              <Route
                path="/contraceptivetracking"
                exact
                component={BCTracking}
              />
            </UserContext.Provider>
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
}
//any time app does a thing, lets call to see if this token exist

//axios did exist by checking if storage // reponse from server with 200 or 401. if good grab all info from backend. update local state

//routes pass down props.
//updated function that will upate variables and then pass function done.
