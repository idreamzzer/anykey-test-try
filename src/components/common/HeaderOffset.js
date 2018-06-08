import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

const styles = theme => ({
  root: {},
  top: {
    ...theme.mixins.mainHeaderTop
  },
  bottom: {
    ...theme.mixins.mainHeaderBottom
  }
});

const HeaderSpace = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.top} />
      <Hidden smDown>
        <div className={classes.bottom} />
      </Hidden>
    </div>
  );
};

export default withStyles(styles)(HeaderSpace);
