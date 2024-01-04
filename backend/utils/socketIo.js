let socketIo = require("socket.io");
let io;
exports.socketConnection = (server) => {
  io = socketIo(server);
  io.on("connection", (socket) => {
    console.info(`Client connected [id=${socket.id}]`);
    // socket.join("room");
    socket.on("disconnect", () => {
      console.info(`Client disconnected [id=${socket.id}]`);
    });
  });
};

exports.sendMessage = (roomId, key, message) => {
  // io.to(roomId).emit(key, message);
  //   console.log(`product:${roomId}`);
  io.emit(`product:6585c532f568a9e2fbefab9c`, message);
  //   io.emit("test", "message");
};
exports.getRooms = () => io.sockets.adapter.rooms;
