import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    borderRight: "1px dashed rgba(255,255,255, .2)",
    height: theme.spacing.unit * 3
  }
});

const VerticalDivider = ({ classes }) => {
  return <div className={classes.root} />;
};

export default withStyles(styles)(VerticalDivider);
