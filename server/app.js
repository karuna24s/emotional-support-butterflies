//app.js will be the entry point for our server

const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const bodyParser = require("body-parser");
const axios = require("axios");
// const DarkSkyApiSecret = require("./keys").DarkSkyKey;

const port = process.env.PORT || 4001;
// const index = require("./routes/index");

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// app.use(index);
app.use(express.static(__dirname + '/../../build'))

const server = http.createServer(app);

const io = socketIo(server); // < Interesting!

// const getApiAndEmit = async socket => {
//   try {
//     //this is where we will make the get call to the api server (deploy an api server) to retrieve the latest butterflies (WHERE timestamp === Date.now()???)
//     const res = await axios.get(
//       `https://api.darksky.net/forecast/${DarkSkyApiSecret}/37.780206,-122.450946`
//     ); // Getting the data from DarkSky
//     socket.emit("FromAPI", res.data.currently.temperature); // Emitting a new message. It will be consumed by the client
//   } catch (error) {
//     console.error(`Error: ${error.code}`);
//   }
// };

let interval;

//The socket parameter refers to the instance of the socket being passed from the client
io.on("connection", socket => {
  console.log("New client connected");

  socket.on("butterfly", data => {
    console.log("Server Data: ", data);
    io.sockets.emit("butterfly", data);
  });
  // if (interval) {
  //   clearInterval(interval);
  // }
  // interval = setInterval(() => getApiAndEmit(socket), 10000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
