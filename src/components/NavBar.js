import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import OpenMenu from './OpenMenu'


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


const ButtonAppBar = (props) => {
  const { classes } = props;
  return (
    
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <OpenMenu OpenAccueil={props.accueil} OpenForeCastMeteo={props.forecastmeteo} />
          <Typography variant="title" color="inherit" className={classes.grow}>
            Pol'Air
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
