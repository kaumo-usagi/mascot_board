import {
  START_DRAWING,
  STOP_DRAWING
} from "../src/constant";

const defaultState = {
  drawing: false
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case START_DRAWING:
      return Object.assign({}, state, { drawing: true });
    case STOP_DRAWING:
      return Object.assign({}, state, { drawing: false });
    default:
      return state
  }
}
