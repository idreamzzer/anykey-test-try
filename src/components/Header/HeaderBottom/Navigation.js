import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    display: "flex",
    marginLeft: "auto"
  },
  link: {
    textDecoration: "none",
    color: theme.palette.primary.contrastText,
    textTransform: "uppercase",
    fontSize: "0.9em",
    fontWeight: "bold",
    marginRight: theme.spacing.unit * 3,
    transition: theme.transitions.create("all", {
      duration: theme.transitions.duration.standard
    }),
    "&:hover": {
      color: theme.palette.secondary.main
    }
  }
});

const Navigation = ({ classes, links }) => {
  const navigationLinks = links.map(link => (
    <Link key={link.id} to={link.to} className={classes.link}>
      {link.label}
    </Link>
  ));
  return <nav className={classes.root}>{navigationLinks}</nav>;
};

export default withStyles(styles)(Navigation);
