import React from "react";
import Footer from "../../../Components/Footer/Footer";
import Navbar from "../../../Components/Navbar/Navbar";
import styles from "./InterestCourses.module.css";

const InterestCourses = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>
                <span>Responsive </span> Web Design
              </p>

              <p className={styles.fv_content}>
                In this Responsive Web Design Certification, you'll learn the
                languages that developers use to build webpages: HTML (Hypertext
                Markup Language) for content, and CSS (Cascading Style Sheets)
                for design.
              </p>
              <p className={styles.karma_header}>
                On Course Completion 400 Karma Points.
              </p>
              <a
                href="https://www.freecodecamp.org/learn/2022/responsive-web-design/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={styles.view_course}>View Course</button>
              </a>
            </div>

            <div className={styles.fv_image}>
              <img
                src="/assets/icourses/fvimg.gif"
                alt="Group Learning"
                className={styles.fv_img}
              />
            </div>
          </div>
          <div className={styles.second_view_container}>
            <div className={styles.second_view}>
              <div className={styles.sv_texts}>
                <p className={styles.sv_heading}>
                  Once <span>Completed.</span>
                </p>
                <p className={styles.sv_content}>
                  After course completion, post the certificate in the
                  #web-and-mobile-app-development channel of the MuLearn Discord
                  server with the hashtag #web-responsive-design and the sample
                  message given below to avail karma points.
                </p>
              </div>
              <div className={styles.sample_container}>
                <p className={styles.sample_header}>Example Message</p>
                <p className={styles.sample_message}>
                  Hey! I’ve completed Responsive Web Design Certification.
                  Here’s is my course certificate. #web-responsive-design
                </p>
              </div>
            </div>
          </div>

          <div className={styles.third_view_container}>
            <div className={styles.third_view}>
              <div className={styles.sample_container}>
                <p className={styles.sv_heading}>
                  <span>Need </span> Help ?
                </p>
                <p className={styles.sample_message}>
                  If you are new to MuLearn, do checkout
                  <a href="mulearn.org"> MuLearn.org</a> and join us. Watch this
                  video if you are confused with Discord Onboarding.
                  <a href="https://youtu.be/7Oj88zF2jY0">
                    {" "}
                    Click Here to Watch
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InterestCourses;
