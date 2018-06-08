import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import Badge from "@material-ui/core/Badge";
import Typography from "@material-ui/core/Typography";

import faLifeRing from "@fortawesome/fontawesome-free-solid/faLifeRing";
import faTrophy from "@fortawesome/fontawesome-free-solid/faTrophy";

import VerticalDivider from "../../common/VerticalDivider";

const styles = theme => ({
  root: {
    display: "flex",
    color: theme.palette.primary.contrastText
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
  },
  iconButtonGroup: {
    display: "flex",
    alignItems: "center",
    color: theme.palette.primary.main.contrastText,
    textDecoration: "none",
    "&:hover $iconButtonLabel": {
      color: theme.palette.secondary.main
    },
    "& $iconButton": {
      color: theme.palette.secondary.main,
      marginRight: theme.spacing.unit
    },
    "& $iconButtonLabel": {
      color: "#fff"
    }
  },
  iconButtonLabel: {
    transition: theme.transitions.create("all", {
      duration: theme.transitions.duration.standard
    })
  },
  verticalDivider: {
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    borderRight: "1px dashed rgba(255,255,255, .2)",
    height: theme.spacing.unit * 3
  },
  badge: {
    background: "#cfaf00",
    color: theme.palette.primary.main,
    fontSize: "0.6em",
    textTransform: "uppercase",
    padding: "2px 2px 0",
    marginLeft: 5,
    fontWeight: "bold"
  }
});

const OtherLinks = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Link className={classes.iconButtonGroup} to="/support">
        <FontAwesomeIcon className={classes.iconButton} icon={faLifeRing} />
        <Typography variant="subheading" color="secondary">
          Поддержка
        </Typography>
      </Link>
      <VerticalDivider />
      <a className={classes.iconButtonGroup} href="tel:89109019010">
        <FontAwesomeIcon className={classes.iconButton} icon={faLifeRing} />
        <Typography variant="subheading" className={classes.iconButtonLabel}>
          89109019010
        </Typography>
      </a>
      <VerticalDivider />
      <Link className={classes.iconButtonGroup} to="/battle-cup">
        <FontAwesomeIcon className={classes.iconButton} icon={faTrophy} />
        <Typography variant="subheading" className={classes.iconButtonLabel}>
          Battle Cup
        </Typography>
        <Badge className={classes.badge} badgeContent={""}>
          new
        </Badge>
      </Link>
    </div>
  );
};

export default withStyles(styles)(OtherLinks);
