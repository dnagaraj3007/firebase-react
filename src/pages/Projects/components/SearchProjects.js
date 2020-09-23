import React, { Component } from "react";
import { connect } from "react-redux";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { withStyles } from "@material-ui/core/styles";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Pagination from '@material-ui/lab/Pagination';

import { getAllProjects } from "../../../state/Projects/projectActions";
import Typography from "@material-ui/core/Typography";
import ListProjects from "./ListProjects";

const styles = theme => ({
  root: {
    margin: "2%"
  },
  margin: {
    margin: theme.spacing(2)
  },
  iconButton: {
    padding: 10
  },
    searchBar: {
      display:"flex",
      alignItems: "center"
    },
  input: {
    flex: 1
  }
});

class ProjectSearch extends Component {
  constructor(props){
      super(props);
      this.handleProjectSearch = this.handleProjectSearch.bind(this);
  }

  componentDidMount() {
    //this.props.getAllProjects();

  }


  handleProjectSearch(e){
      e.preventDefault();
      this.props.getAllProjects();
  }


  render() {
      const { projects } = this.props;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div>
          <Typography variant="h6" gutterBottom>
            Search Projects
          </Typography>
        </div>
        <div className={classes.searchBar}>
          <Input
            className={classes.input}
            id="standard-adornment-search"
            placeholder="Project Name"
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={this.handleProjectSearch}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
          />
          <Button
            variant="contained"
            size="large"
            color="primary"
            className={classes.margin}
          >
            New Project
          </Button>
        </div>

          <div>

              <Pagination count={10} page={4} />
              <ListProjects projects = {projects}/>
          </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllProjects: () => dispatch(getAllProjects())
  };
};

const mapStateToProps = state => {
  return {
    projects: state.projects.payload
  };
};

ProjectSearch = withStyles(styles)(ProjectSearch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectSearch);
