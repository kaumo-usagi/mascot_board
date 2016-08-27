import {ADD_FREE_HAND, DELETE_FREE_HAND} from "../src/constant"

export function addFreeHand(locus,id) {
  return {
    type: ADD_FREE_HAND,
    locus: locus,
    id: id
  }
}

export function deleteFreeHand(id) {
  return {
    type: DELETE_FREE_HAND,
    id: id
  }
}

export function updateFreeHand(locus, id){
  return {
    type: UPDATE_FREE_HAND,
    locus: locus,
    id: id
  }
}
