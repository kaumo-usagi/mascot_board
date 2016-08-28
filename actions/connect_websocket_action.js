import {
  ws,
  OPEN_WEBSOCKET,
  CLOSE_WEBSOCKET,
  ADD_USER,
  MOVE_CURSOR,
  ADD_TXT,
} from "../src/constant";


const onOpen = dispatch => {
  return () => {
    dispatch({ type: OPEN_WEBSOCKET });
  };
};

const onClose = dispatch => {
  return () => {
    dispatch({ type: CLOSE_WEBSOCKET });
  };
};

const onMessage = dispatch => {
  return msg => {
    const json = JSON.parse(msg.data);
    if (json.type === "mousemove") {
      dispatch({ type: MOVE_CURSOR, data: json.data });
    } else if (json.type === "user") {
      dispatch({ type: ADD_USER, data: json.data });
    } else if (json.type === "text::put") {
      dispatch({ type: ADD_TXT, data: json.data });
    }
  };
};


export default function() {
  return dispatch => {
    ws.onopen     = onOpen(dispatch);
    ws.onclose    = onClose(dispatch);
    ws.onmessage  = onMessage(dispatch);
  };
}
