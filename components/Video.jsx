import React, { PropTypes, Component } from "react";
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class Video extends Component {
  getChildContext() {
    return {
      muiTheme: getMuiTheme(baseTheme)
    }
  }
    render() {
      return (
        <iframe id="video">
        </iframe>
      )
    }
  }
  Video.childContextTypes = {
    muiTheme: PropTypes.object.isRequired
}

export default Video;
