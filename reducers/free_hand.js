import {ADD_FREE_HAND, DELETE_FREE_HAND, UPDATE_FREE_HAND} from "../src/constant"

export default function img(state=[], action) {
  switch (action.type) {
    case ADD_FREE_HAND :
      return state.concat({locus: action.locus, id: action.id});
    case DELETE_FREE_HAND :
      return state.filter( (e)=>{ return (e.id != action.id) } );
    case UPDATE_FREE_HAND :
      return state.map( (e)=>{ if(e.id === action.id){ return { locus: action.locus } } else{ return e }} );
  }
}
