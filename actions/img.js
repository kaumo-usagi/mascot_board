import {ADD_IMG, DELETE_IMG} from "../src/constant"

export function addImg(url,position,id) {
  return {
    type: ADD_IMG,
    url: url,
    position: position,
    id: id
  }
}

export function deleteImg(id) {
  return {
    type: DELETE_IMG,
    id: id
  }
}

export function updateImg(url, position, id){
  return {
    type: UPDATE_IMG,
    url: url,
    position: position,
    id: id
  }
}
