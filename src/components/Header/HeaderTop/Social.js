import React from "react";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

const styles = theme => ({
  root: {
    "& :last-child": {
      marginRight: 0
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

const Social = ({ classes, links, big }) => {
  const socialLinks = links.map(link => (
    <IconButton
      key={link.id}
      className={classes.iconButton}
      aria-label={link.label}
      component="a"
      href={link.to}
      target="_blank"
      style={{ fontSize: big ? "1.5em" : "1em" }}
    >
      <FontAwesomeIcon
        icon={require(`@fortawesome/fontawesome-free-brands/${link.icon}`)}
      />
    </IconButton>
  ));

  return <div className={classes.root}>{socialLinks}</div>;
};

export default withStyles(styles)(Social);
