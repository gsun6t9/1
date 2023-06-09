import __BUILD from "../scripts/build.js";
import WebServer from "./web.js";
import WebSocket from "./socket.js";

const port = {
	web: process.env.PORT || 5500,
	socket: (process.env.PORT || 5500) + 1
};


await __BUILD();
WebServer(port.web);
//await WebSocket(port.socket);