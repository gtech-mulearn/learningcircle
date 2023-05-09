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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus voluptate quam dolorem! Maxime repudiandae mollitia
                dolore, consequatur minima rem magni illum ab optio obcaecati.
                Nemo praesentium amet molestias modi error.
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Explicabo, asperiores fugit! Nostrum, laborum nesciunt. Animi
                excepturi enim ut!
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
                  <button className={styles.b_button}>View Now!</button>
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
                  <button className={styles.b_button}>View Now!</button>
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
