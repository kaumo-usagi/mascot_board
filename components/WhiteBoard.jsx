import { Stage, Layer, Text, Circle } from "react-konva";
import React from "react";
import { connect } from "react-redux";
import Paper from 'material-ui/Paper';

import {
  ws,
  MOVE_CURSOR
} from "../src/constant";

const width = window.innerWidth - (240 + 40 + 40);
const height = 1000;

const style = {
  height: 1000,
  width: width,
  height: height,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const PaperStyle = {
  height: 1000,
  width: "100%",
  margin: 0
}

class WhiteBoard extends Component {
  constructor(props) {
    super(props);
    this.state = { lastUpdatedAt: new Date().getTime() };
  }

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  textStyle() {
    return {
      top:  100,
      left: 0,
      width: 100,
      height: 20,
      lineHeight: 20,
      fontSize: 12
    };
  }

  onMouseMove(e) {
    const now = new Date().getTime();
    if (now - this.state.lastUpdatedAt > 30) {
      const rect = e.target.getBoundingClientRect();
      // TODO: componentでやるのはよくない
      ws.send(JSON.stringify({ type: "mousemove", position: { x: e.clientX - rect.left, y: e.clientY - rect.top } }));
      this.state.lastUpdatedAt = now;
    }
  }

  render() {
    const circles = [];
    Object.keys(this.props.users).forEach(i => {
      const user = this.props.users[i];
      if (user.position) {
        circles.push(<Circle key={user.id} x={user.position.x} y={user.position.y} radius={10} fill={user.color} strokeWidth={4} />);
      }
    });
    return (
      <div id="whiteBoard">
        <Paper style={style} zDepth={1} onMouseMove={this.onMouseMove.bind(this)} >
          <Stage width={width} height={width}>
            <Layer>
              { circles }
              <Text fill="#666666" x={100} y={300} text={"Test text"} fontSize={30} />
            </Layer>
          </Stage>
        </Paper>
      </div>
);

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
});

const WhiteBoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WhiteBoard);

export default WhiteBoardContainer;
