import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import Button from "@material-ui/core/Button";
import faSignIn from "@fortawesome/fontawesome-free-solid/faSignInAlt";

const styles = theme => ({
  root: {
    marginLeft: "auto"
  },
  login: {
    color: theme.palette.primary.contrastText,
    textTransform: "capitalize",
    transition: theme.transitions.create("all", {
      duration: theme.transitions.duration.standard
    }),
    "&:hover": {
      color: theme.palette.secondary.main
    },
    "& $iconButton": {
      marginRight: theme.spacing.unit
    },
    "&:hover $iconButton": {
      color: theme.palette.secondary.main
    }
  },
  iconButton: {
    fontSize: "1em",
    color: theme.palette.primary.contrastText,
    width: "auto",
    height: "auto",
    marginRight: theme.spacing.unit * 2,
    transition: theme.transitions.create("all", {
      duration: theme.transitions.duration.standard
    }),
    "&:hover": {
      color: theme.palette.secondary.main
    }
  }
});

const UserActions = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Button component={Link} to="/login" className={classes.login}>
        <FontAwesomeIcon className={classes.iconButton} icon={faSignIn} />
        Войти
      </Button>
    </div>
  );
};

export default withStyles(styles)(UserActions);
