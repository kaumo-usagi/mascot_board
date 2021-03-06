import {ADD_TXT, DELETE_TXT, UPDATE_TXT} from "../src/constant"

export default function text(state=[], action) {
  switch (action.type) {
    case ADD_TXT :
      return state.concat(action.data.text);
    case DELETE_TXT :
      return state.filter( (e)=>{ return (e.id != action.id) } );
    case UPDATE_TXT :
      const text = action.data.text;
      return state.map(e => {
        if(e.id === text.id){
          return Object.assign({}, e, { x: text.position.x, y: text.position.y });
        } else {
          return e;
        }
      });
    default :
      return state;
  }
}
