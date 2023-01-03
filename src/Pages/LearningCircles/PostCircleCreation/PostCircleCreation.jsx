import React from "react";
import styles from "./PostCircleCreatio.module.css";

import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";

const PostCircleCreation = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.view_container}>
          <div className={styles.view}>
            <div className={styles.v_texts}>
              <p className={styles.v_heading}>
                <span>Learning Circle</span> Created
              </p>
              <p className={styles.v_content}>
                Congratulations! Your learning circle has been successfully
                created on MuLearn. You can now invite others to join your
                learning circle, and use MuLearn's resources to facilitate your
                learning sessions. Make sure to set goals and create a schedule
                for your learning sessions, and share resources and knowledge
                with other members.
              </p>
            </div>
            <div className={styles.v_image}>
              <img
                src="/assets/postcirclecreation/fvimg.gif"
                alt=""
                className={styles.v_img}
              />
            </div>
          </div>
        </div>
        <div className={styles.vertical_view_container}>
          <div className={styles.vertical_view}>
            <p className={styles.v_subheading}>Getting Started</p>
            <p className={styles.v_subcontent}>
              Since you've made your learning circle, follow the steps below to
              find out what you need to do next.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PostCircleCreation;
