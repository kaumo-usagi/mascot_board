import React, { PropTypes,Component } from "react";
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
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
const stampStl = {
  paddingTop: 10,
  paddingBottom: 4
  // height: 64,
}

class SideBar extends Component {
  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }
  render() {
    return (
        <List style={stl} id="sideBar">
          <Subheader id="stamps" inset={true} style={stampStl}>Stamps</Subheader>
          <ListItem
            style={textStl}
            primaryText="Text"
            inset={true}
            className="stamp"
          />
          <ListItem
            primaryText="Image"
            inset={true}
            className="stamp"
          />
          <ListItem
            primaryText="honya"
            inset={true}
            className="stamp"
          />
        </List>
    )
  }
}
SideBar.childContextTypes = {
  muiTheme: PropTypes.object.isRequired
}


export default SideBar;
