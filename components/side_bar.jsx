// use this directory as a components folder
import React, { PropTypes, Component } from "react";

import Paper from 'material-ui/Paper';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class SideBar extends Component {
  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }
  render() {
    return (
      <div>
        <Paper style={style} zDepth={1} />
      </div>
    )
  }
}
SideBar.childContextTypes = {
  muiTheme: PropTypes.object.isRequired
}

export default SideBar;
