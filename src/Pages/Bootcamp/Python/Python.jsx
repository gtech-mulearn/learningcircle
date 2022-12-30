import React from "react";
import styles from "./Python";

import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";

const Python = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>Padikkam.py</p>
              <p className={styles.fv_tagline}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae repudiandae optio inventore dolore exercitationem non
                temporibus placeat sit ipsam veritatis.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Python;
