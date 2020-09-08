import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import PublicRoute from './LoginAndSignUpRoutes'
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
            <PublicRoute exact path="/sign-up">  <SignUpContainer/></PublicRoute>
            <PublicRoute exact path="/sign-in"><SignInContainer/> </PublicRoute>
            <PrivateRoute exact path="/projects" > <SearchProjects/> </PrivateRoute>
          </Switch>
        </div>
      </AuthIsLoaded>
    </Router>
  );
};

export default AppRouter;
