import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import styles from "./InterestGroup.module.css";

import fvimg from "./assets/fvimg.png";



const InterestGroup = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>Internet of Things</p>
              <p className={styles.fv_content}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                iste vitae natus facere vel amet enim doloremque, voluptate
                aliquam animi adipisci neque ex debitis odio laborum blanditiis
                fugiat eos tempore.
              </p>
              <p className={styles.officehrs}>
                <span>Office Hours</span> Every Sunday 7:30 PM at Discord Lobby
              </p>
              <div className={styles.fv_buttons}>
                <button className={styles.create}>
                  Create Learning Circles
                </button>
              </div>
            </div>

            <div className={styles.fv_image}>
              <img
                src={fvimg}
                alt="Group Learning Image"
                className={styles.fv_img}
              />
            </div>
          </div>
        </div>

        <div className={styles.second_view_container}>
          <div className={styles.second_view}>
            <div className={styles.sv_texts}>
              <p className={styles.sv_heading}>Basic Enablement Tasks</p>
              <p className={styles.sv_contents}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                necessitatibus.
              </p>
            </div>

            <div className={styles.sv_tasks_container}>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InterestGroup;
