import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from "@material-ui/icons/Menu";
import VerticalDivider from "../common/VerticalDivider";
import Social from "./HeaderTop/Social";
import OtherLinks from "./HeaderTop/OtherLinks";
import UserActions from "./HeaderTop/UserActions";
import Logo from "./HeaderBottom/Logo";
import Navigation from "./HeaderBottom/Navigation";
import navigationLinks from "../../constants/navigationLinks";
import socialLinks from "../../constants/socialLinks";

const styles = theme => ({
  root: {
    position: "fixed",
    width: "100%",
    zIndex: theme.zIndex.appBar
  },
  container: {
    ...theme.mixins.container,
    height: "inherit",
    minHeight: "inherit",
    display: "flex",
    alignItems: "center"
  },
  mainHeaderTop: {
    ...theme.mixins.mainHeaderTop
  },
  mainHeaderBottom: {
    ...theme.mixins.mainHeaderBottom,
    background: "rgba(54, 39, 76, 0.95)"
  }
});

class Header extends Component {
  render() {
    const { classes, toggleDrawer } = this.props;

    return (
      <header className={classes.root}>
        <AppBar
          component="div"
          position="static"
          className={classes.mainHeaderTop}
        >
          <div className={classes.container}>
            <Hidden mdUp>
              <IconButton
                color="inherit"
                aria-label="открыть навигационное меню"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Hidden smDown>
              <Social links={socialLinks} />
              <VerticalDivider />
              <OtherLinks />
            </Hidden>
            <UserActions />
          </div>
        </AppBar>
        <Hidden smDown>
          <AppBar
            component="div"
            position="static"
            className={classes.mainHeaderBottom}
          >
            <div className={classes.container}>
              <Logo />
              <Navigation links={navigationLinks} />
            </div>
          </AppBar>
        </Hidden>
      </header>
    );
  }
}

export default withStyles(styles)(Header);
