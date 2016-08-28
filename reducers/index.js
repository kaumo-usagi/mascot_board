import { combineReducers } from "redux";
import texts from "./texts";
import images from "./images";
import free_hand from "./free_hand";
import users from "./users";
import whiteboard from "./whiteboard";

export default combineReducers({
  texts,
  images,
  free_hand,
  users,
  whiteboard
});
