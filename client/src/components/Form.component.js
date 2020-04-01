import React, { useState } from "react";
import axios from "axios";
import { Button } from "reactstrap";

import { supportTexts } from "../data/supportTexts";

const handleSubmit = async event => {
  event.preventDefault();
  console.log(event.target.innerHTML);
  const request = await axios.post("/support-butterfly", {
    event: event.target.innerHTML
  });
  console.log("HandleSubmit: ", request.json());
};
const Form = () => {
  return (
    <form>
      {supportTexts.map(text => (
        <Button
          onClick={handleSubmit}
          key={text.id}
          type="submit"
          value={text.msg}
        >
          {text.msg}
        </Button>
      ))}
    </form>
  );
};

export default Form;
