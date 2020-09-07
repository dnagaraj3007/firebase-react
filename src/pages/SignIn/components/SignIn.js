import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";

import { connect } from "react-redux";
import { signIn } from "../../../state/signIn/signInActions";
import Utils from "../../../Helper/utils";

const styles = theme => ({
  button: {
    marginTop: "20px",
    marginBottom: "20px"
  },
  paper: {
    marginTop: "10%",
    padding: "10%",
    display: "flex",
    flexDirection: "column"
  }
});

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isPasswordMasked: true,
      errors: {
        email: "",
        password: ""
      },
      loading: false,
      disabled: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateElement(name, value) {
    let errors = this.state.errors;
    switch (name) {
      case "email": {
        errors.email = Utils.validateEmail(value) ? "" : "Invalid email";
        break;
      }
      case "password": {
        errors.password = Utils.validatePassword(value)
          ? ""
          : "Invalid password";
        break;
      }
      default:
        break;
    }
    return errors;
  }

  // validateForm(){
  //   for(var i in this.state){
  //     let errors = this.validateElement(i, this.state[i]);
  //     this.setState({
  //       errors
  //     })
  //   }
  //
  //   for(var i in this.state.errors){
  //     if(this.state.errors[i] !='')
  //       return false;
  //   }
  //   return true;
  // }


  handleBlur(event) {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.validateElement(name, value);
    this.setState({
      errors
    });
  }

  handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.props);
    let cred = { email: this.state.email, password: this.state.password };
    this.props.signIn(cred);
  }

  render() {

    const { classes } = this.props;
    const {authError} = this.props;
    return (
      <div>
        <Grid container>
          <Grid item xs={1} sm={7} />
          <Grid item xs={10} sm={4}>
            <Paper elevation={3} className={classes.paper}>
              <form onSubmit={this.handleSubmit}>
                <Typography variant="h4" gutterBottom>
                  Login
                </Typography>
                  <TextField
                    id="email"
                    name="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={this.state.email}
                    helperText={this.state.errors.email}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                  />
                  <TextField
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={this.state.password}
                    helperText={this.state.errors.password}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                  />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  className={classes.button}
                  disabled={this.state.disabled}
                >
                  Login
                </Button>
                {authError ? <Typography variant="caption" display="block" gutterBottom color = "error">
                  {authError}
                </Typography> : null}
              </form>
            </Paper>
          </Grid>
          <Grid item xs={1} sm={1} />
        </Grid>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

const mapStateToProps = state => {
  return {
    authError: state.signIn.authError
  }
};

SignIn = withStyles(styles)(SignIn);

export default connect(
    mapStateToProps, mapDispatchToProps
)(SignIn);


