import React from "react";
import Form from "./components/Form/Form.component";
import ButterflyField from "./components/ButterflyField/ButterflyField.component";
import Header from "./components/Header/Header.component";
import "./App.css";

import handwashing from "./static/handwashing.svg";

const App = () => {
  return (
    <div className="container">
      <Header handwashing={handwashing} />
      <ButterflyField />
      <Form />
    </div>
  );
};

export default App;
