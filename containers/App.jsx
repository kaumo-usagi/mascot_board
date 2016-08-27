import { connect } from "react-redux";
// import your original components from components directory
// ex) import WhiteBoard from "../components/WhiteBoard";
import SideBar from "../components/SideBar"
import Video from "../components/Video"
import WhiteBoard from "../components/WhiteBoard"
import React, { Component } from "react";

class App extends Component {
  render() {
	  return (
      <div>
        <WhiteBoard />
        <SideBar />
        <Video />
		  </div>
	 )
	}

}

export default App;
