import React from "react";
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {blue500, yellow600} from 'material-ui/styles/colors';
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
  color: "#444",
  fontSize: 25,
  fontWeight: 200
}

const stampStl = {
  paddingTop: 2,
  paddingBotom: 2,
  fontSize: 20,
  height: 44
}

const SideBar = () => (
  <List style={stl} id="sideBar">
    <Subheader id="stamps" inset={true} style={stampStl}>Stamps</Subheader>
    <ListItem
      style={textStl}
      primaryText="Text"
      inset={true}
      className="stamp"
    />
    <ListItem
      style={textStl}
      primaryText="Image"
      inset={true}
      className="stamp"
    />
    <ListItem
      style={textStl}
      primaryText="honya"
      inset={true}
      className="stamp"
    />
  </List>
)


export default SideBar;
