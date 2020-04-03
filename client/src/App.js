import React from "react";
import Form from "./components/Form.component";
import ButterflyField from "./components/ButterflyField.component";
import Header from "./components/Header.component";

const App = () => {
  return (
    <div className="container">
      <Header />
      <ButterflyField />
      <Form />
    </div>
  );
};

export default App;
