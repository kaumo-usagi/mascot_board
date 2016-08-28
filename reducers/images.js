import {ADD_IMG, DELETE_IMG, UPDATE_IMG} from "../src/constant"

export default function img(state=[], action) {
  switch (action.type) {
    case ADD_IMG :
      return state.concat(action.data.image);
    case DELETE_IMG :
      return state.filter( (e)=>{ return (e.id != action.id) } );
    case UPDATE_IMG :
      return state.map( (e)=>{ if(e.id === action.id){ return { url: action.url, position: action.position } } else{ return e }} )
    default :
      return state;

  }
}
