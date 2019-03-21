import React from "react";
import "./style.css";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    // flexGrow: -10,
    marginRight: 50,
    
  },
  menuButton: {
    marginLeft: 230,
    // marginRight: ,
  },
  navButton: {
    padding:'0 20px',
    marginLeft: 100,
  },

};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <Typography variant="h3" color="inherit" className={classes.grow}>
            SureShelter
          </Typography>
          
        <Button className={classes.navButton} color="inherit">Services</Button>
        <Button className={classes.navButton} color="inherit">Donate</Button>
        <Button className={classes.navButton}color="inherit">Login</Button>
        <Button className={classes.navButton}color="inherit">Volunteer</Button>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);