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
import Profile from "./components/Profile/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserContext } from "./UserContext";
import { AuthContext } from "./AuthContext";

import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

export default function App() {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  const userValue = useMemo(() => ({ user, setUser }), [user, setUser]);
  const authValue = useMemo(() => ({ isAuth, setIsAuth }), [isAuth, setIsAuth]);

  return (
    <>
      <Router>
        <div className="App">
          <UserContext.Provider value={userValue}>
            <AuthContext.Provider value={authValue}>
              <Nav />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/logout" exact component={Logout} />
                <Route path="/signup" exact component={SignUp} />
                <ProtectedRoute path="/resources" component={Resources} />
                <ProtectedRoute
                  path="/menstrualtracking"
                  component={PeriodTracking}
                />
                <ProtectedRoute
                  path="/contraceptivetracking"
                  component={BCTracking}
                />
                <ProtectedRoute path="/profile" component={Profile} />
              </Switch>
            </AuthContext.Provider>
          </UserContext.Provider>
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
