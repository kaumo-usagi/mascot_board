import React, { PropTypes,Component } from "react";
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme' ;
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import {connect} from "react-redux"

const stl = {
  height: "100%",
  width: 240,
  backgroundColor: "#ccc",
  position: "fixed",
  top: 0,
  left: 0,
  color: "#999",
  zIndex: 100
}

const textStl = {
  color: "#444",
  fontSize: 22,
  fontWeight: 200,
  paddingLeft:50
}
const stampStl = {
  paddingTop: 2,
  paddingBottom: 2,
  fontSize: 20,
  height:44
    // height: 64,
}

class SideBar extends Component {
  render() {
    return (
        <List style={stl} id="sideBar">
        <Subheader id="stamps" inset={true} style={stampStl}>Stamps</Subheader>
        <ListItem
        style={textStl}
        primaryText="Text"
        inset={true}
        className="stamp"
        >
        <div className="mdl-navigation__link icon" href="">
        <i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">text_format</i>
        </div>
        </ListItem>
        <ListItem
        style={textStl}
        primaryText="Image"
        inset={true}
        className="stamp"
        onClick = { SideBar.onclick  }
        >
          <div className="mdl-navigation__link icon" href="">
          <i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">insert_photo</i>
          </div>
          </ListItem>
          <ListItem
          style={textStl}
        primaryText="honya"
          inset={true}
        className="stamp"
          >
          <div className="mdl-navigation__link icon" href="">
          <i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">create</i>
          </div>
          </ListItem>
          </List>
          )
  }
}

SideBar.counter = false
SideBar.onclick = () => {
  if(!SideBar.counter){
    document.getElementById("mordal").style.left = "280px"
  }else{
    document.getElementById("mordal").style.left = "-55px"
  }
  SideBar.counter = !SideBar.counter
}

export default SideBar;


