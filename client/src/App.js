import React, { useState } from "react";
import socketIOClient from "socket.io-client";
import Form from "./components/Form.component";
import ButterflyField from "./components/ButterflyField.component";

const App = () => {
  const [pathName, setPathName] = useState("");

  const socket = socketIOClient("http://127.0.0.1:4001");
  socket.on("butterfly", data => {
    //data given to us from the server from the server
    console.log("Client Listening For Server: ", data);
    setPathName(data.pathName);
  });

  return (
    <div style={{ textAlign: "center" }}>
      <ButterflyField pathName={pathName} />
      <Form />
    </div>
  );
};

export default App;
