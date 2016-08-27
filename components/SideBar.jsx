import React, { PropTypes,Component } from "react";
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {blue500, yellow600} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme' ;
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';

const stl = {
  height: "100%",
  width: 240,
  backgroundColor: "#ccc",
  position: "fixed",
  top: 0,
  left: 0,
  color: "#999"
}

const textStl = {
  color: "#444"
}

class SideBar extends Component {
  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }
  render() {
    return (
        <List style={stl} id="sideBar">
          <Subheader inset={true}>Stamps</Subheader>
          <ListItem
            style={textStl}
            primaryText="Text"
            inset={true}
          />
          <ListItem
            primaryText="Image"
            inset={true}
          />
          <ListItem
            primaryText="honya"
            inset={true}
          />
        </List>
    )
  }
}
SideBar.childContextTypes = {
  muiTheme: PropTypes.object.isRequired
}


export default SideBar;
