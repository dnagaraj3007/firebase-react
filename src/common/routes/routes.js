import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import LinearProgress from "@material-ui/core/LinearProgress";

import SignUpContainer from "../../pages/SignUp/SignUpContainer";
import SignInContainer from "../../pages/SignIn/SignInContainer";
import SearchProjects from "../../pages/Projects/ProjectsContainer";
import Layout from "../components/Layout";

import { useSelector } from "react-redux";
import { isLoaded } from "react-redux-firebase";

const AuthIsLoaded = ({ children }) => {
  const auth = useSelector(state => state.firebase.auth);
  if (!isLoaded(auth)) return <LinearProgress />;
  return children;
};

const AppRouter = () => {
  return (
    <Router>
      <AuthIsLoaded>
        <div>
          <Layout />
          <Switch>
            <Route exact path="/sign-up" component={SignUpContainer} />
            <Route exact path="/sign-in" component={SignInContainer} />
            <PrivateRoute exact path="/projects" > <SearchProjects/> </PrivateRoute>
          </Switch>
        </div>
      </AuthIsLoaded>
    </Router>
  );
};

export default AppRouter;
