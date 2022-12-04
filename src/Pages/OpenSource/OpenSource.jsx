import React from "react";
import styles from "./OpenSource.module.css";

import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const OpenSource = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main_view_container}>
        <div className={styles.first_view}>
          <div className={styles.fv_texts}>
            <p className={styles.fv_heading}>
              <span> µLearn</span> Open Source Repositories.
            </p>
            <p className={styles.fv_content}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, voluptate id? Culpa quo maxime excepturi sed eum, adipisci fugiat, iste expedita quidem repellendus quod voluptates doloribus. Iusto, esse! Reprehenderit, perspiciatis.</p>
          </div>
          <div className={styles.fv_image}>
            <img
              src="/assets/opensource/fvimg.gif"
              alt=""
              className={styles.fv_img}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OpenSource;
