import "./App.css";
import Layout from "./Components/Layout";
import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AccessControl from "./Components/AccessControl";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#673AB7",
    },
    secondary:{
      main:'#27AE60'
    }
  },
  typography: {
    fontFamily: "Ubuntu",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Layout >
            <Switch>
              <Route path ='/' component={AccessControl} />
            </Switch>
          </Layout >
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
