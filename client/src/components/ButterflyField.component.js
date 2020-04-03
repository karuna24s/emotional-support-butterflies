import React, { useState } from "react";
import socketIOClient from "socket.io-client";

const ButterflyField = () => {
  const [pathName, setPathName] = useState("");

  const socket = socketIOClient("http://127.0.0.1:4001");
  socket.on("butterfly", data => {
    //data given to us from the server from the server
    //console.log("Client Listening For Server: ", data);
    setPathName(data.pathName);
  });

  console.log("ButterflyField props: ", pathName);
  return <div className="sky"></div>;
};

export default ButterflyField;
