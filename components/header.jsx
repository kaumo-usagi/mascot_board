import React, { PropTypes, Component } from "react";
import AppBar from 'material-ui/AppBar';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class Header extends Component {
  getChildContext() {
    return {
      muiTheme: getmuiTheme(baseThtme)
    }
  }
    render() {
      return (
        <div>
          <AppBar
            title="Cara Board"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
        </div>
      )
    }
  }
  Header.childContextTypes = {
    muiTheme: PropTypes.object.isRequired
}
