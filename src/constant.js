export const OPEN_WEBSOCKET = "websocket::open";
export const CLOSE_WEBSOCKET = "websocket::close";

export const ADD_USER       = "user::add";

export const MOVE_CURSOR = "cursor::move";

const webSocketUrl = `ws://${window.location.host}${window.location.pathname}`;

export const ws = new WebSocket(webSocketUrl);
