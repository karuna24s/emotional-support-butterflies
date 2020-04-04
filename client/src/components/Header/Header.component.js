import React from "react";
import styles from "./Header.module.css";

const Header = ({ handwashing }) => {
  return (
    <header className={styles.containerFlex}>
      <h1 id={styles.header}>We are with you.</h1>

      <figure style={{ textAlign: "center", paddingTop: "15px" }}>
        <img src={handwashing} id={styles.handwashing}></img>
        <figcaption id="subheader">We will overcome COVID 19</figcaption>
      </figure>
    </header>
  );
};

export default Header;
