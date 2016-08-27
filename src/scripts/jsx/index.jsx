// import React from 'react';
var injectTapEventPlugin = require('react-tap-event-plugin');
var React = require('react');
// import FloatingActionButton from 'material-ui/FloatingActionButton';
var FloatingActionButton = require('material-ui/FloatingActionButton');
// import ContentAdd from 'material-ui/svg-icons/content/add';
var ContentAdd = require('material-ui/svg-icons/content/add');
injectTapEventPlugin();

const style = {
  marginRight: 20,
  marginBottom: 20,
  position: "fixed"
};

const FloatingActionButtonExampleSimple = () => (
  <div>
    <FloatingActionButton style={style} >
      <ContentAdd />
    </FloatingActionButton>
  </div>
);

export default FloatingActionButtonExampleSimple;
