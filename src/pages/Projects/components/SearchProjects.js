import React, { Component } from "react";
import {connect} from "react-redux";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import {withStyles} from '@material-ui/core/styles';


import {getAllProjects} from "../../../state/Projects/projectActions";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
    root: {
        margin:'2%',
    },
    margin: {
        margin: theme.spacing(2),
    },
    iconButton: {
        padding: 10,
    },
    input: {
        width: "80%"
    }
});


class ProjectSearch extends Component{

    componentDidMount() {

        //this.props.getAllProjects();

    }
    render(){
        const { classes } = this.props;
        return(
            <div className={classes.root}>
                <div>
                <Typography variant="h6" gutterBottom>
                    Search Projects
                </Typography>
                </div>
                <div>
                <Input className={classes.input}
                    id="standard-adornment-search"
                    placeholder="Project Name"
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton>
                                <SearchIcon/>
                            </IconButton>
                        </InputAdornment>
                    }
                />
                    <Button variant="contained" size="large" color="primary" className={classes.margin}>
                        New Project
                    </Button>

        </div>
            </div>)
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        getAllProjects: () => dispatch(getAllProjects())
    };
};

const mapStateToProps = state => {
    return {
        projects: state.projects.payload
    }
};

ProjectSearch = withStyles(styles)(ProjectSearch)

export default connect(
    mapStateToProps, mapDispatchToProps
)(ProjectSearch);


