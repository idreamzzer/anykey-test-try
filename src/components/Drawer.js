import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import navigationLinks from "../constants/navigationLinks";
import socialLinks from "../constants/socialLinks";
import Social from "./Header/HeaderTop/Social";

const styles = theme => ({
  root: {
    background: theme.palette.primary.main
  },
  list: {
    width: 250
  },
  listItem: {
    "&:hover $label": {
      color: theme.palette.secondary.main
    }
  },
  label: {
    color: theme.palette.primary.contrastText,
    transition: theme.transitions.create("all", {
      duration: theme.transitions.duration.standard
    })
  },
  labelSupport: {
    color: theme.palette.secondary.main
  },
  social: {
    padding: `${theme.spacing.unit * 2}px 0`,
    display: "flex",
    justifyContent: "center"
  }
});

const Drawer = ({ classes, open, toggleDrawer }) => {
  const links = navigationLinks.map(link => (
    <ListItem
      key={link.id}
      className={classes.listItem}
      component={Link}
      to={link.to}
      button
    >
      <ListItemText classes={{ primary: classes.label }} primary={link.label} />
    </ListItem>
  ));

  return (
    <SwipeableDrawer
      open={open}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
      classes={{ paper: classes.root }}
    >
      <div
        tabIndex={0}
        role="button"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <div className={classes.list}>
          <List>
            <ListItem
              className={classes.listItem}
              component={Link}
              to="/"
              button
            >
              <ListItemText
                classes={{
                  primary: classes.label
                }}
                primary="Главная"
              />
            </ListItem>
            {links}
          </List>
          <Divider />
          <List>
            <ListItem
              className={classes.listItem}
              component={Link}
              to="/support"
              button
            >
              <ListItemText
                classes={{
                  primary: classes.label
                }}
                primary="Поддержка"
              />
            </ListItem>
          </List>
          <Divider />
          <Social links={socialLinks} classes={{ root: classes.social }} big />
        </div>
      </div>
    </SwipeableDrawer>
  );
};

export default withStyles(styles)(Drawer);
