import {ADD_TXT, DELETE_TXT, UPDATE_TXT} from "../src/constant"

export default function text(state=[], action) {
  switch (action.type) {
    case ADD_TXT :
      return state.concat({txt: action.txt, position: action.position, id: action.id});
    case DELETE_TXT :
      return state.filter( (e)=>{ return (e.id != action.id) } );
    case UPDATE_TXT :
      return state.map( (e)=>{ if(e.id === action.id){ return { txt: action.txt, position: action.position } } else{ return e }} );
    default :
      return state;
  }
}
