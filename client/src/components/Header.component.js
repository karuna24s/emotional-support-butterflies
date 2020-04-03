import React from "react";

const Header = () => {
  return (
    <header class="containerFlex">
      <h1 id="header">We are with you.</h1>

      <figure>
        <img src="/images/handwashing.svg" id="handwashing" />
        <figcaption id="subheader">We will overcome COVID 19</figcaption>
      </figure>
    </header>
  );
};

export default Header;
