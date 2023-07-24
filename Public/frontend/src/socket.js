import { io } from "socket.io-client";

const URL = "http://localhost:8003";

const socket = io(URL, {
  reconnection: false,
});

export default socket;