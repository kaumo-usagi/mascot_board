import { combineReducers } from "redux"
import texts from "./texts"
import img from "./img"
import free_hand from "./free_hand"
import users from "./users"

export default combineReducers({
  texts,
  img,
  free_hand,
  users
})
