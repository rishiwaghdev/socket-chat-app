import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.broadcast.emit("user-connected");

  socket.on("chat message", (msgObj) => {
    socket.broadcast.emit("chat message", msgObj);

    // delivered ack
    socket.emit("delivered", msgObj.id);
  });

  socket.on("seen", (msgId) => {
    socket.broadcast.emit("seen", msgId);
  });

  socket.on("typing", () => {
    socket.broadcast.emit("typing");
  });

  socket.on("disconnect", () => {
    socket.broadcast.emit("user-disconnected");
  });
});

server.listen(9000, () => {
  console.log("Server running on http://localhost:9000");
});