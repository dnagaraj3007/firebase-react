import SignInNavBar from "./SignInMenu/SignInNavBar";
import SignUpNavBar from "./SignUpNavBar/SignUpNavBar";
import React from "react";

import {connect} from "react-redux";

const Layout =(props) =>{
    const {auth} = props;
    const links = auth.uid? <SignInNavBar/>: <SignUpNavBar/>
    return(
        <div>
            {links}
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Layout);
