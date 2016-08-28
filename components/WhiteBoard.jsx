import React from "react";
import { connect } from "react-redux";
import Paper from 'material-ui/Paper';

const style = {
  height: 1000,
  width: "calc(100% - 40px)",
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const WhiteBoard = () => (
      <div id="whiteBoard">
        <Paper style={style} zDepth={1} />
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
