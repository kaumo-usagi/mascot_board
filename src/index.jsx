import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";

import App from "../containers/App";

window.React = React;

//If you use onTouchTap
//injectTapEventPlugin();

const Index = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
)

ReactDOM.render(
  <App />,
  document.getElementById("root")
)
