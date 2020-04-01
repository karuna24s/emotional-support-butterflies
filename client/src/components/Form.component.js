import React, { useState } from "react";
import axios from "axios";
import { Button } from "reactstrap";

import { supportTexts } from "../data/supportTexts";

const handleSubmit = event => {
  event.preventDefault();
  console.log(event.target.value);
  // await axios.post('some api post endpoint url', 'object I want to send')
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
