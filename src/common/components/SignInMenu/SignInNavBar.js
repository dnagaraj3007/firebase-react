import React from "react";
import AppBar from "@material-ui/core/AppBar/index";
import Toolbar from "@material-ui/core/Toolbar/index";
import IconButton from "@material-ui/core/IconButton/index";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem/index";
import Menu from "@material-ui/core/Menu/index";
import SideNav from "./SideNav";
import { makeStyles } from "@material-ui/core/styles/index";
import { Link as RouterLink } from "react-router-dom";

import { connect } from "react-redux";
import { signOut } from "../../../state/signIn/signInActions";

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const SignInNavBar = props => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut =() =>{
      props.signOut();
      handleMenuClose();
  }
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>My Profile</MenuItem>
      <RouterLink to="/sign-in">
        <MenuItem onClick={handleSignOut}>SignOut</MenuItem>
      </RouterLink>
    </Menu>
  );
  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <div className={classes.root}>
            <SideNav />
          </div>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};
export default connect(
  null,
  mapDispatchToProps
)(SignInNavBar);
