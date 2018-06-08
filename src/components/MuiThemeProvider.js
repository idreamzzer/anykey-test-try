import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import deepOrange from "@material-ui/core/colors/deepOrange";

const theme = createMuiTheme({
  mixins: {
    container: {
      width: "100%",
      maxWidth: 1172,
      margin: "0 auto",
      paddingLeft: 16,
      paddingRight: 16
    },
    mainHeaderTop: {
      minHeight: 46,

      "@media (min-width:0px) and (orientation: landscape)": {
        minHeight: 48
      },
      "@media (min-width:600px)": {
        minHeight: 50
      }
    },
    mainHeaderBottom: {
      minHeight: 68,

      "@media (min-width:0px) and (orientation: landscape)": {
        minHeight: 60
      },
      "@media (min-width:600px)": {
        minHeight: 72
      }
    }
  },
  palette: {
    primary: {
      light: "#836b9f",
      main: "#36274c",
      dark: "#2e2240",
      contrastText: "#fff"
    },
    secondary: {
      light: deepOrange[300],
      main: deepOrange[500],
      dark: deepOrange[700],
      contrastText: "#fff"
    }
  }
});

const EnhancedMuiThemeProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default EnhancedMuiThemeProvider;
