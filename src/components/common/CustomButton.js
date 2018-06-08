import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import hexToRGBA from "../../helpers/hexToRGBA";

const styles = theme => ({
  root: {
    background: "linear-gradient(160deg, #e09e00 10%, #d65c50 60%)",
    borderRadius: 0,
    border: 0,
    color: "white",
    // height: 48,
    padding: "16px 60px",
    boxShadow: `0 3px 5px 2px ${hexToRGBA(theme.palette.primary.main, 0.4)}`,
    fontWeight: "bold",
    marginRight: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 2
  }
});

const CustomButton = ({ classes, children, ...rest }) => {
  return (
    <Button className={classes.root} {...rest}>
      {children}
    </Button>
  );
};

export default withStyles(styles)(CustomButton);
