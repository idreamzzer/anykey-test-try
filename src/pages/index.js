import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Slider from "../components/Slider/Slider";

const styles = theme => ({
  root: {}
});

class Index extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Slider />
        <div style={{ height: "1000px" }}>Остальной контент</div>
      </div>
    );
  }
}

export default withStyles(styles)(Index);
