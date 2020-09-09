import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import {connect} from 'react-redux';

import {signUp} from '../../../state/signUp/signUpActions'

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

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      isPasswordMasked: true,
      errors: {
        name: "",
        email: "",
        password: ""
      },
      loading:false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  validateElement(name, value){
    let errors = this.state.errors
    switch(name){
      case 'name': {
        errors.name =  Utils.validateName(value)? '' : 'Name should atleast be 5 characters in length';
        break;
      }
      case 'email':{
        errors.email = Utils.validateEmail(value)? '' : 'Invalid email';
        break;
      }
      case 'password': {
        errors.password =  Utils.validatePassword(value)? '':'Invalid password';
        break;
      }
    }
    return errors
  }

  handleBlur(event){
    event.preventDefault();
    const {name, value} = event.target;
    let errors = this.validateElement(name, value)
    this.setState({
      errors
    })
  }

  handleChange(event){
    event.preventDefault();
    const {name, value} = event.target;
    this.setState({
      [name]:value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.signUp(user);

  }

  render() {
    const { classes } = this.props;
    const { errors, loading} = this.state;
    const {signUpError} = this.props;
    return (
      <div>
        <Grid container>
          <Grid item xs={1} sm={7}/>
          <Grid item xs={10} sm={4}>
            <Paper elevation={3} className={classes.paper}>
              <form onSubmit={this.handleSubmit}>
                <Typography variant="h4" gutterBottom>
                  Welcome
                </Typography>
                <div>
                  <TextField
                    id="name"
                    name = "name"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value = {this.state.name}
                    helperText={this.state.errors.name}
                    onBlur = {this.handleBlur}
                    onChange = {this.handleChange}
                  />
                </div>
                <div>
                  <TextField
                    id="email"
                    name = "email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value = {this.state.email}
                    helperText={errors.email}
                    onBlur = {this.handleBlur}
                    onChange = {this.handleChange}
                  />
                </div>
                <div>
                  <TextField
                    id="password"
                    name = "password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value = {this.state.password}
                    helperText={errors.password}
                    onBlur = {this.handleBlur}
                    onChange = {this.handleChange}
                  />
                </div>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  className={classes.button}
                >
                  Sign up!
                </Button>
                {signUpError? (<Typography variant="caption" display="block" gutterBottom color = "error">
                      {signUpError}
                    </Typography>): null}
              </form>
            </Paper>
          </Grid>
          <Grid item xs={1} sm={1} />
        </Grid>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    signUp : (user) => {
      dispatch(signUp(user))
    }
  }
}

const mapStateToProps = (state) =>{
  return{
    signUpError : state.signUp.signUpError
  }
}


SignUp = withStyles(styles)(SignUp);

export default connect(mapStateToProps, mapDispatchToProps) (SignUp);
