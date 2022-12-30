import React from "react";
import styles from "./Python.module.css";

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
              <p className={styles.fv_heading}>
                <span> Padikkam</span>.py
              </p>
              <p className={styles.fv_subheading}>20-Day Bootcamp</p>
              <p className={styles.fv_content}>
                Pentesting is a hard thing. It's even harder to figure out how
                to get started on this journey. This workshop is aimed toward
                absolute beginners and to give them an easy understanding
                learning path.
              </p>
              <p class={styles.startingdate}>
                Starting On <span>1st January 2023</span>
              </p>
              <div class={styles.supporters}>
                <span>Supported By </span>
                <div className={styles.s_images}>
                  <a
                    href="https://www.riglabs.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/assets/bootcamp/ctf/riglabs.png"
                      alt="Riglabs"
                      class={styles.supporter}
                    />
                  </a>
                </div>
              </div>
              <a
                href="https://airtable.com/shr49OGWEpaUr62az"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.atag}
              >
                <button className={styles.register}>Register Now!</button>
              </a>
            </div>
            <div className={styles.fv_image}>
              <img
                src="/assets/bootcamp/python/fvimg.gif"
                alt=""
                className={styles.fv_img}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Python;
