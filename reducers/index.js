import { CombineReducers } from "redux"
import text from "./text"
import img from "./img"
import free_hand from "./free_hand"
import users from "./from"

export default combineReducers({
  text,
  img,
  free_hand,
  users
})
