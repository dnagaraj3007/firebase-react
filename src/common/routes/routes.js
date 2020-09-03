import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SignUpContainer from "../../pages/SignUp/SignUpContainer";
import SignInContainer from "../../pages/SignIn/SignInContainer";
import Layout from "../components/Layout"



const AppRouter = () =>{
    return (
        <Router>
            <div>
                <Layout/>
                <Switch>
                    <Route exact path="/sign-up" component={SignUpContainer} />
                    <Route exact path="/sign-in" component={SignInContainer} />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter
