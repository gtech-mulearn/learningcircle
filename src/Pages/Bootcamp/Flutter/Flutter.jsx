import React from "react";
import styles from "./Flutter.module.css";

import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";

const Flutter = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main_container}></div>
      <Footer />
    </>
  );
};

export default Flutter;
