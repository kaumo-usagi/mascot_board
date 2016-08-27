import { connect } from "react-redux";
// import your original components from components directory
// ex) import WhiteBoard from "../components/WhiteBoard";
import SideBar from "../components/side_bar.jsx"
import React, { Component } from "react";

class App extends Component {
  render() {
	  return (
		<div>
      <SideBar />
		</div>
	 );
	}

}

export default App;
