import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import hexToRGBA from "../../helpers/hexToRGBA";

const slideStyles = theme => ({
  root: {
    height: "100vh",
    minHeight: "600px",
    maxHeight: "calc(100vh + 200px)"
  },
  container: {
    ...theme.mixins.container,
    position: "relative",
    minHeight: "inherit"
  },
  slideWrapper: {
    height: "100%",
    background: hexToRGBA(theme.palette.primary.dark, 0.8),
    color: theme.palette.primary.contrastText,
    overflow: "hidden"
  },
  slideImage: {
    position: "absolute",
    top: "50%",
    right: 0,
    transform: "translateY(-50%)",
    zIndex: 0,
    width: "50%",
    height: "100%",
    display: "flex",
    justifyContent: "center"
  },
  gameImage: {
    position: "absolute",
    top: "50%",
    left: 0,
    zIndex: 0,
    transform: "translateY(-80%)"
  },
  content: {
    zIndex: 1,
    width: "100%",
    padding: `0 ${theme.spacing.unit * 2}px`,
    marginTop: 300,
    "@media (max-height: 700px) and (orientation:landscape)": {
      marginTop: 150
    },
    "@media (min-height: 400px) and (orientation:portrait)": {
      marginTop: 300
    }
  }
});

const Slide = ({ classes, theme, imgSrc, gameImage, slideImage, children }) => (
  <div
    className={classes.root}
    style={{
      backgroundColor: theme.palette.primary.dark,
      backgroundImage: imgSrc ? `url(${imgSrc})` : theme.palette.primary.main,
      backgroundSize: "cover",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat"
    }}
  >
    <div className={classes.slideWrapper}>
      <div className={classes.container}>
        {gameImage && (
          <div className={classes.gameImage}>
            <img src={gameImage} alt="game icon" />
          </div>
        )}
        {slideImage && (
          <Hidden xsDown>
            <div className={classes.slideImage}>
              <img
                src={slideImage}
                alt="slide"
                style={{ objectFit: "contain" }}
              />
            </div>
          </Hidden>
        )}
        <div className={classes.content}>
          <Grid item sm={6} style={{ position: "relative" }}>
            {children}
          </Grid>
        </div>
      </div>
    </div>
  </div>
);

export default withStyles(slideStyles, { withTheme: true })(Slide);
