import React, { useState } from "react";
import axios from "axios";
import socketIOClient from "socket.io-client";
import { Button } from "reactstrap";
import styles from "./Form.module.css";

import { supportTexts } from "../../data/supportTexts";

const url = "http://127.0.0.1:4001";
const socket = socketIOClient(url);

const handleSubmit = (event) => {
  event.preventDefault();

  //On click, emit data to server
  socket.emit("butterfly", {
    pathName: event.target.value,
  });
};
const Form = () => {
  return (
    <form className={styles.buttons}>
      {supportTexts.map((text) => (
        <Button
          onClick={handleSubmit}
          key={text.id}
          type="submit"
          value={text.pathName}
        >
          {text.msg}
        </Button>
      ))}
    </form>
  );
};

export default Form;
