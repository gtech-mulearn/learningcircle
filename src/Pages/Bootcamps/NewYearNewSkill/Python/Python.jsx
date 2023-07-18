import React from "react";
import styles from "./Python.module.css";

import Navbar from "../../../../Components/Navbar/Navbar"
import Footer from "../../../../Components/Footer/Footer"

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
              <p className={styles.startingdate}>
                Started On <span>4th January 2023</span>
              </p>
              {/* <p className={styles.officehrs}>
                <span>Office Hours : </span> Thursday 07:00PM @ Discord Lobby
              </p>
              <p className={styles.officehrs}>
                <span>Think Tank Meet : </span> Tuesday 09:00 PM @ Google Meet
              </p> */}
              <div className={styles.supporters}>
                <span>Supported By </span>
                <div className={styles.s_images}>
                  <img
                    src="/assets/bootcamp/python/pygrammers.webp"
                    alt="Pygrammers"
                    className={styles.supporter}
                  />
                </div>
              </div>

              <button className={styles.register}>Registrations Closed</button>
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
                  if (day.karma === undefined) {
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
        <div className={styles.thrid_view_container}>
          <div className={styles.third_view}>
            <div className={styles.tv_texts}>
              <p className={styles.tv_heading}>
                Getting <span>Karma Points</span>
              </p>
              <p className={styles.tv_content}>
                You may earn karma points by submitting a screenshot or
                assignment link in the #pygrammers channel of our discord
                server, along with the appropriate hashtag at the beginning.
              </p>
            </div>
            <div className={styles.hastags}>
              <ul>
                <li className={styles.level}>
                  - Post the screenshot of your assignent when you reach Day-6
                  in #pygrammers channel with hashtag <b>#cl-padikka-py-1</b> first  to
                  avail 200 karma points.
                </li>
                <li className={styles.level}>
                  {" "}
                  - Post the screenshot of your assignent when you reach Day-12
                  in #pygrammers channel with hashtag <b>#cl-padikka-py-2</b> first  to
                  avail 200 karma points.
                </li>
                <li className={styles.level}>
                  {" "}
                  - Post the screenshot of your assignent when you reach Day-18
                  in #pygrammers channel with hashtag <b>#cl-padikka-py-3</b> first to
                  avail 200 karma points.
                </li>
                <li className={styles.level}>
                  {" "}
                  - Post the screenshot of your assignent when you reach Day-22
                  in #pygrammers channel with hashtag <b>#cl-padikka-py-4</b> first to
                  avail 200 karma points.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Python;
