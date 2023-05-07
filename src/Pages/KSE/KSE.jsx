import React from "react";
import styles from "./KSE.module.css";
import { Link } from "react-router-dom";

import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const KSE = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>
                <span> KSE </span> Challenges
              </p>
              <p className={styles.fv_content}>
                Here we have listed some of the most popular challenges that you
                can take up to improve your skills.
              </p>
            </div>
            <div className={styles.fv_image}>
              <img
                src="/assets/bootcamp/fvimg.gif"
                alt=""
                className={styles.fv_img}
              />
            </div>
          </div>
        </div>
        <div className={styles.second_view_container}>
          <div className={styles.second_view}>
            <div className={styles.sv_texts}>
              <p className={styles.sv_heading}>Challenges</p>
              <p className={styles.sv_content}>
                Let's get started with some general enablement tasks to get you
                familiar with how the basic tools work and get your inital karma
                points..
              </p>
            </div>
            <div className={styles.bootcamps}>
              <div className={styles.bootcamp}>
                <p className={styles.b_heading}>AI Bootcamp</p>
                <p className={styles.b_tagline}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsum a labore sunt officiis iusto error, est cum voluptatum
                  praesentium doloremque totam voluptas omnis maxime qui dolor
                  dolorem quos aliquid repellat.
                </p>
                <Link to="/kse/challenges/ai">
                  <button className={styles.b_button}>Join Now!</button>
                </Link>
              </div>
              <div className={styles.bootcamp}>
                <p className={styles.b_heading}>Web Bootcamp</p>
                <p className={styles.b_tagline}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quidem voluptate provident debitis animi eos. Placeat quaerat
                  nesciunt ex minus obcaecati tempora reprehenderit atque illum
                  vero dolores. Impedit vero itaque odio?
                </p>
                <Link to="/kse/challenges/web">
                  <button className={styles.b_button}>Join Now!</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default KSE;
