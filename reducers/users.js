import {
  ws,
  ADD_USER,
  MOVE_CURSOR
} from "../src/constant";

export default function(state = {}, action) {
  const data = action.data;
  let user = {};
  const obj = {};
  switch (action.type) {
    case ADD_USER:
      user = data.user;
      obj[user.id] = user;
      return Object.assign({}, state, obj);
    case MOVE_CURSOR:
      user = data.user;
      if (state[user.id]) {
        user.position = data.position;
        obj[user.id] = user;
      }
      return Object.assign({}, state, obj)
  }
  return state;
}

