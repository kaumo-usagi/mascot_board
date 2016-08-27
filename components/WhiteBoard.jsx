import React, { PropTypes, Component } from "react";
import Paper from 'material-ui/Paper';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const style = {
  height: 1000,
  width: "calc(100% - 40px)",
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class WhiteBoard extends Component {
  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }
  render() {
    return (
      <div id="whiteBoard">
        <Paper style={style} zDepth={1} />
      </div>
    )
  }
}
WhiteBoard.childContextTypes = {
  muiTheme: PropTypes.object.isRequired
}

export default WhiteBoard;
