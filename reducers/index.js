import { combineReducers } from "redux";
import texts from "./texts";
import images from "./images";
import free_hand from "./free_hand";
import users from "./users";

export default combineReducers({
  texts,
  images,
  free_hand,
  users
});
