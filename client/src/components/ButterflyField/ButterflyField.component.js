import React, { useState } from "react";
import socketIOClient from "socket.io-client";
import Form from "../Form/Form.component";
import styles from "./ButterflyField.module.css";

const ButterflyField = () => {
  const [pathName, setPathName] = useState("");

  const socket = socketIOClient("http://127.0.0.1:4001");
  socket.on("butterfly", (data) => {
    //data given to us from the server from the server
    //console.log("Client Listening For Server: ", data);
    setPathName(data.pathName);
  });

  console.log("ButterflyField props: ", pathName);
  return (
    <div className={styles.sky}>
      <Form />
    </div>
  );
};

export default ButterflyField;
