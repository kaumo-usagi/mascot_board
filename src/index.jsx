import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";

import App from "../containers/App";

window.React = React;

//If you use onTouchTap
//injectTapEventPlugin();

ReactDom.render(
  <App />,
	document.getElementByID("root")
				)
