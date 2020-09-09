import React from "react";
import clsx from 'clsx';
import { makeStyles } from "@material-ui/core/styles/index";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer/index";
import IconButton from "@material-ui/core/IconButton/index";
import List from "@material-ui/core/List/index";
import ListItem from "@material-ui/core/ListItem/index";
import ListItemIcon from "@material-ui/core/ListItemIcon/index";
import ListItemText from "@material-ui/core/ListItemText/index";
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import MenuIcon from '@material-ui/icons/Menu'


const useStyles = makeStyles({
    list: {
        width: 250
    },
    fullList: {
        width: "auto"
    }
});

export default function SwipeableTemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false
    });

    const toggleDrawer = (open) => (event) => {

        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, ["left"]: open });
    };

    const list = () => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: false,
            })}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {["Projects", "Manpower", "Contractor"].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <SupervisedUserCircleIcon /> : <SupervisorAccountIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>


            <IconButton color="inherit" onClick={toggleDrawer( true)}><MenuIcon/></IconButton>
            <SwipeableDrawer
                anchor="left"
                open={state["left"]}
                onClose={toggleDrawer( false)}
                onOpen={toggleDrawer( true)}
            >
                {list()}
            </SwipeableDrawer>


        </div>
    );
}
