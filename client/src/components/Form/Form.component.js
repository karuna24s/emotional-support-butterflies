import React, { useState, useEffect } from "react";
//import axios from "axios";
import socketIOClient from "socket.io-client";
//import { Button } from "reactstrap";
import styles from "./Form.module.css";

import { supportTexts } from "../../data/supportTexts";
import { imageData } from "../../data/imageData";

const url = "https://butterfly-server-api.herokuapp.com";
const socket = socketIOClient(url);

const handleSubmit = (event) => {
  event.preventDefault();

  const emitObj = {
    pathName: event.target.value,
    xValue: event.screenX,
    yValue: event.screenY,
  };
  //On click, emit data to server
  socket.emit("butterfly", emitObj);
};

const Form = () => {
  return (
    <form className={styles.buttons}>
      {supportTexts.map((text) => (
        <div id={text.pathName} className={styles.padding}>
          <input
            onClick={handleSubmit}
            className={text.pathName}
            type="image"
            src={text.img}
            key={text.id}
            value={text.pathName}
          ></input>
          <p>{text.msg}</p>
        </div>
      ))}
    </form>
  );
};

export default Form;
