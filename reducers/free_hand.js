import {
  ADD_POINT,
  STOP_DRAWING,
  ADD_FREE_HAND,
  DELETE_FREE_HAND,
  UPDATE_FREE_HAND,
} from "../src/constant"

export default function free_hand(state=[[]], action) {
  switch (action.type) {
    case ADD_POINT:
      return state.map((e, i) => {
        if (i === state.length - 1) {
          const { x, y } = action.data.position;
          return Array.prototype.concat([], e, [x, y]);
        } else {
          return e;
        }
      });
    case STOP_DRAWING:
      return Array.prototype.concat([], state, [[]]);
    case ADD_FREE_HAND :
      return state.concat({locus: action.locus, id: action.id});
    case DELETE_FREE_HAND :
      return state.filter( (e)=>{ return (e.id != action.id) } );
    case UPDATE_FREE_HAND :
      return state.map( (e)=>{ if(e.id === action.id){ return { locus: action.locus } } else{ return e }} );
    default :
      return state;
  }
}
