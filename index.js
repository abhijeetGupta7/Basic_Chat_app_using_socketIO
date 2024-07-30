const express = require("express");
const app = express();
const server = require('http').createServer(app); // WebSocket needs direct access to the httpServer instance

const { Server } = require('socket.io');
const io = new Server(server);                  // io object represents the main Socket.IO server instance

app.use("/", express.static(__dirname + "/public")); // to serve static files like html, css, etc.

io.on('connection', (socket) => {           // socket represents the individual client connection to the server
    console.log("A user connected");
    socket.on("msg", (data) => {            // Listen for 'msg' events from the client
        io.emit("reply", data);             // Emit 'reply' event to all connected clients
    });
});

const PORT = 8000;
server.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`);
});
