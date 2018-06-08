import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Routes from "./Routes";
import Header from "./Header/Header";
import Drawer from "./Drawer";

const styles = theme => ({
  root: {},
  content: {
    overflow: "hidden"
  }
});

class Layout extends React.Component {
  state = {
    drawerOpened: false
  };

  toggleDrawer = open => () => {
    this.setState({
      drawerOpened: open
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Header toggleDrawer={this.toggleDrawer.bind(this)} />
        <Drawer
          toggleDrawer={this.toggleDrawer.bind(this)}
          open={this.state.drawerOpened}
        />
        <main className={classes.content}>
          <Routes />
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(Layout);
