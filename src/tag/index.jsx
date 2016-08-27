var injectTapEventPlugin = require('react-tap-event-plugin');
var React = require('react');
var FloatingActionButton = require('material-ui/FloatingActionButton');
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
