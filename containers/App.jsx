import { connect } from "react-redux";
// import your original components from components directory
// ex) import WhiteBoard from "../components/WhiteBoard";
import SideBar from "../components/side_bar"
import Header from "../components/header"
import WhiteBoard from "../components/whiteBoard"
import React, { Component } from "react";

class App extends Component {
  render() {
	  return (
      <div>
        <WhiteBoard id="whiteBoard"/>
		  </div>
	 )
	}

}

export default App;
