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
              <p className={styles.fv_content}>
                22 days python bootcamp with complete mentor support. The event
                is designed for entire beginers. We will also be doing some
                projects and making it public in github.
              </p>
              <p class={styles.startingdate}>
                Starting On <span>4th January 2023</span>
              </p>
              <div class={styles.supporters}>
                <span>Supported By </span>
                <div className={styles.s_images}>
                  <img
                    src="/assets/bootcamp/python/pygrammers.webp"
                    alt="Pygrammers"
                    class={styles.supporter}
                  />
                </div>
              </div>
              <a
                href="https://airtable.com/shrefJHb9pHx6ihv5"
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
                This Bootcamps is divided into a total of 22 days which includes
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
