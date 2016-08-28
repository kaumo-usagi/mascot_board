import {ADD_IMG, DELETE_IMG, UPDATE_IMG} from "../src/constant"

export default function img(state=[], action) {
  switch (action.type) {
    case ADD_IMG :
      return state.concat(action.data.image);
    case DELETE_IMG :
      return state.filter( (e)=>{ return (e.id != action.id) } );
    case UPDATE_IMG :
      const image = action.data.image;
      console.log(action);
      return state.map(e => {
        if(e.id === image.id){
          return Object.assign({}, e, { x: image.position.x, y: image.position.y });
        } else {
          return e;
        }
      });
    default :
      return state;
  }
}
