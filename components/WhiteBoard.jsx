import React, { PropTypes, Component } from "react";
import { Stage, Layer, Text, Circle } from "react-konva";
import { connect } from "react-redux";
import Paper from 'material-ui/Paper';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

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
    const texts = this.props.texts.map(text => (
      <Text fill="#666666" key={text.id} x={text.x} y={text.y} fontSize={20} text={text.body} />
    ));
    return (
      <div id="whiteBoard">
        <Paper style={style} zDepth={1} onMouseMove={this.onMouseMove.bind(this)} >
          <Stage width={width} height={width}>
            <Layer>
              { circles }
              { texts }
            </Layer>
          </Stage>
        </Paper>
      </div>
    )
  }
}

WhiteBoard.childContextTypes = {
  muiTheme: PropTypes.object.isRequired
};

WhiteBoard.propTypes = {
  users: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  users: state.users,
  texts: state.texts,
});

const mapDispatchToProps = dispatch => ({
});

const WhiteBoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WhiteBoard);

export default WhiteBoardContainer;
