import React from "react";

const Header = ({ handwashing }) => {
  return (
    <header className="containerFlex">
      <h1 id="header">We are with you.</h1>

      <figure>
        <img src={handwashing} id="handwashing"></img>
        <figcaption id="subheader">We will overcome COVID 19</figcaption>
      </figure>
    </header>
  );
};

export default Header;
