import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import MuiThemeProvider from "./components/MuiThemeProvider";
import Layout from "./components/Layout";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <MuiThemeProvider>
            <Layout />
          </MuiThemeProvider>
        </Router>
      </div>
    );
  }
}

export default App;
