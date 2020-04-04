import React, { useState, useEffect } from "react";
//import axios from "axios";
import socketIOClient from "socket.io-client";
//import { Button } from "reactstrap";
import styles from "./Form.module.css";

import { supportTexts } from "../../data/supportTexts";
import { imageData } from "../../data/imageData";

const url = "http://127.0.0.1:4001";
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
  const [pathname, setPathName] = useState("BlueButterfly");
  const [xValue, setXValue] = useState(0);
  const [yValue, setYValue] = useState(0);

  socket.on("butterfly", (data) => {
    //data given to us from the server from the server
    //console.log("Client Listening For Server: ", data);

    setPathName(data.pathName);
  });

  useEffect(() => {
    console.log("Pathname: ", pathname);
    console.log("Butterfly: ", imageData[pathname]);
    const imgArray = imageData[pathname];
    const [img, id] = imgArray;
    const clickedButterfly = document.querySelector(`.${pathname}`);
    console.log("Clicked butterfly: ", clickedButterfly);
    const newImg = document.createElement("img");
    newImg.setAttribute("src", img);
    newImg.setAttribute("id", id);
    console.log("New Image: ", newImg);
    //clickedButterfly.appendChild(newImg);
  });

  return (
    <form className={styles.buttons}>
      {supportTexts.map((text) => (
        <div id={text.pathname} className={styles.padding}>
          <input
            onClick={handleSubmit}
            className={text.pathname}
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
