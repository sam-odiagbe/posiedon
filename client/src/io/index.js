import * as IO from "socket.io-client";

const endPoint = "https://topner.herokuapp.com";
const client = new IO();
const Socket = client.connect(endPoint);
export default Socket;
