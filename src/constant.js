export const OPEN_WEBSOCKET = "websocket::open";
export const CLOSE_WEBSOCKET = "websocket::close";
export const ADD_USER       = "user::add";
export const MOVE_CURSOR = "cursor::move";


export const ADD_TXT = "add_txt";
export const DELETE_TXT = "delete_txt";
export const UPDATE_TXT = "update_txt";
export const ADD_IMG = "add_img";
export const DELETE_IMG = "delete_img";
export const UPDATE_IMG = "update_img";
export const ADD_FREE_HAND = "add_free_hand";
export const DELETE_FREE_HAND = "delete_free_hand";
export const UPDATE_FREE_HAND = "update_free_hand";
export const ADD_COMPONENT = "add_component";
export const DELETE_COMPONENT = "delete_component";
export const UPDATE_COMPONENT = "update_component";


const webSocketUrl = `ws://${window.location.host}${window.location.pathname}`;
export const ws = new WebSocket(webSocketUrl);
