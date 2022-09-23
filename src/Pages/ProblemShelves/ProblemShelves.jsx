import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./ProblemShelves.module.css";

import fvimg from "./assets/fvimg.png";
import ProblemCard from "../../Components/ProblemCard/ProblemCard";

const ProblemShelves = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>
                <span> µLearn</span> Problem Shelves
              </p>
              <p className={styles.fv_content}>
                Welcome to µLearn too Problem Shelves, Here you will be able to
                find real-world problems listed by various organisations to
                which you can contribute real-time and earn rewards and
                knowledge to upskill yourself.
              </p>
            </div>
            <div className={styles.fv_image}>
              <img src={fvimg} alt="" className={styles.fv_img} />
            </div>
          </div>
        </div>

        <div className={styles.second_view_container}>
          <div className={styles.second_view}>
            <div className={styles.sv_texts}>
              <p className={styles.sv_heading}>Problems Listings</p>
              <p className={styles.sv_content}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
                fuga nemo totam, atque error distinctio.
              </p>
            </div>
            <div className={styles.problem_list_container}>
              <ProblemCard />
              <ProblemCard />
              <ProblemCard />
              <ProblemCard />
              <ProblemCard />
              <ProblemCard />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProblemShelves;
