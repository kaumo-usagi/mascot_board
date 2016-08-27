import {
  ws,
  ADD_USER
} from "../src/constant";

export default function(state = {}, action) {
  const user = action.data;
  switch (action.type) {
    case ADD_USER:
      const obj = {}
      obj[user.id] = user;
      return Object.assign({}, state, obj)
  }
  return state;
}

