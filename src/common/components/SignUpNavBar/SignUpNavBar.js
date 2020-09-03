import React from "react";
import AppBar from "@material-ui/core/AppBar/index";
import Toolbar from "@material-ui/core/Toolbar/index";
import Button from "@material-ui/core/Button/index";
import { makeStyles } from '@material-ui/core/styles/index';
import { Link as RouterLink } from 'react-router-dom';

import {connect} from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        flex: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


const SignUpNavBar = () => {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Button color="inherit" size="large" edge="end" component={RouterLink} to="/sign-up">
                        Register
                    </Button>
                    <Button color="inherit" size="large" edge="end" component={RouterLink} to="/sign-in">
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default connect()(SignUpNavBar);
