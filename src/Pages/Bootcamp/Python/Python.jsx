import React from "react";
import styles from "./Python.module.css";

import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";

const Python = () => {
  const data = require("./data.json");

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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
                voluptas sit magni sapiente odit autem? Inventore aut sint
                voluptate veritatis deleniti, sapiente pariatur repellat quasi
                quaerat placeat, totam reprehenderit corrupti.
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
        <div className={styles.second_view_container}>
          <div className={styles.second_view}>
            <div className={styles.sv_texts}>
              <p className={styles.sv_heading}>
                Bootcamp<span> Structure</span>
              </p>
              <p className={styles.sv_content}>
                This Bootcamps is divided into a total of 20 days which includes
                Python Basics, Git and Projects Based on Python.
              </p>
            </div>
            <div className={styles.sv_days_container}>
              <div className={styles.sv_days}>
                {data.plan.map((day) => {
                  if (day.karma == undefined) {
                    return (
                      <div className={styles.day}>
                        <p className={styles.svd_name}>Day {day.id}</p>
                        <p className={styles.svd_topic}>{day.topic}</p>
                      </div>
                    );
                  } else {
                    return (
                      <div className={styles.bday}>
                        <p className={styles.svd_name}>Day {day.id}</p>
                        <p className={styles.svd_topic}>{day.topic}</p>
                        <p className={styles.svd_karma}>
                          +{day.karma} Karma Points
                        </p>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Python;
