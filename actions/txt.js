import {ADD_TXT, DELETE_TXT} from "../src/constant"

export function addTxt(txt,position,id) {
  return {
    type: ADD_TXT,
    text: txt,
    position: position,
    id: id
  }
}

export function deleteTxt(id) {
  return {
    type: DELETE_TXT,
    id: id
  }
}

export function updateTxt(txt, position, id){
  return {
    type: UPDATE_TXT,
    text: txt,
    position: position,
    id: id
  }
}
