import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./MentorDirectory.module.css";

import fvimg from "./assets/fvimg.png";

const MentorDirectory = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>
                µLearn <span> Mentor Directory</span>
              </p>
              <p className={styles.fv_content}>
                Welcome to the Mentor Directory of Mulearn. Here you will be
                able to find a mentor who has already gone down the road through
                which you are about to embrak a journey on. Happy Learning!.
              </p>
              <br />
              <div className={styles.quote}>
                <p className={styles.aquote}>
                  <span>"</span>a piece of knowledge, unlike a piece of physical
                  property, can be shared by large groups of people without
                  making anybody poorer.<span>"</span>
                </p>
                <p className={styles.quoteby}>
                  <span className={styles.orange}>― Aaron Chettan</span> , The
                  Boy Who Could Change the World: The Writings of Aaron Swartz
                </p>
              </div>
            </div>
            <div className={styles.fv_image}>
              <img src={fvimg} alt="" className={styles.fv_img} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MentorDirectory;
