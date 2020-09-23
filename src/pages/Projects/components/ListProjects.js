import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles({
    list: {
        display: "flex"
    },
    listItem: {
        justifyContent: "center"
    }
});

export default function ListProjects(props){
    const classes = useStyles();
    const {projects} = props
 return (
     <List className = {classes.list}>
         {
             projects && projects.map((project) =>{
                 return(
                     <ListItem key={project._id} className={classes.listItem}>
                         <Card>
                             <CardContent>
                                <Typography>
                                    {project.title}
                                </Typography>
                             </CardContent>
                         </Card>
                     </ListItem>
                 )
             })
         }
     </List>
 )
}
