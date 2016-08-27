import { connect } from "react-redux";
import { createStore } from "redux";
import reducer from "../reducers/index";
import createLogger from "redux-logger";

// import your original components from components directory
// ex) import WhiteBoard from "../components/WhiteBoard";
import SideBar from "../components/SideBar"
import Video from "../components/Video"
import WhiteBoard from "../components/WhiteBoard"
import React, { Component } from "react";

//Store/Reducer----------------------------------
const logger = createLogger();
const store = createStore(reducer, applyMiddleware(thunk, logger));




//Component---------------------------------------
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
