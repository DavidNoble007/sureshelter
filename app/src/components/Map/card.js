import React from "react";
import "./style.css";


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function MapCard(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>

    
    
    </div>
  );
}

MapCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MapCard);