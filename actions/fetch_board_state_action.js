import {
  ADD_TXT,
  ADD_IMG,
} from "../src/constant";

const boardName = window.location.pathname.replace(/\/boards\/(.+)\/?$/, "$1");

export default function() {
  return dispatch => {
    Promise.all([
      fetch(`/boards/${boardName}/stamps.json`).then(res => res.json()),
      fetch(`/boards/${boardName}/texts.json`).then(res => res.json())
    ]).then(values => {
      values[0].forEach(v => dispatch({ type: ADD_IMG, data: { image: v } }));
      values[1].forEach(v => dispatch({ type: ADD_TXT, data: { text: v } }));
    });
  };
}
