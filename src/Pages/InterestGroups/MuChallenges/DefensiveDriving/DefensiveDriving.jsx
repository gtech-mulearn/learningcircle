import React from "react";

import styles from "./DefensiveDriving.module.css";

import Navbar from "../../../../Components/Navbar/Navbar";
import Footer from "../../../../Components/Footer/Footer";

const DefensiveDriving = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>
                <span>TATA Strive</span> Defensive Driving
              </p>
              <p className={styles.fv_content}>
                This challenge is intended to teach you about defensive driving
                and how you can apply its guidelines and practices to make the
                roads a safer place for all road users.
              </p>
            </div>

            <div className={styles.fv_image}>
              <img
                src="/assets/challenge/ddriving.gif"
                alt="Group Learning Pic"
                className={styles.fv_img}
              />
            </div>
          </div>
        </div>
        <div className={styles.second_view_container}>
          <div className={styles.second_view}>
            <div className={styles.sv_texts}>
              <p className={styles.sv_heading}>What's the challenge?</p>
              <p className={styles.sv_content}>
                By finishing this challenge you will get a glimpse into the
                specifics of improving your driving skills and share them with
                one and all.
              </p>
            </div>
          </div>
          <div className={styles.steps}>
            <div className="timeline-container">
              <div className="timeline">
                <div className="timeline__event animated fadeInUp delay-3s timeline__event--type1">
                  <div className="timeline__event__icon">
                    <img
                      src={require("../assets/steps/freecodecamp.svg").default}
                      alt=""
                      // className="lni-cake"
                    />
                  </div>
                  <div className="timeline__event__date">1</div>
                  <div className="timeline__event__content">
                    <div className="timeline__event__title">Step One</div>
                    <div className="timeline__event__description">
                      Visit{" "}
                      <a
                        href="http://defensivedriving.tatastrive.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Defensive Driving
                      </a>{" "}
                      and click on the ‘Open App’ option.
                    </div>
                  </div>
                </div>
                <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
                  <div className="timeline__event__icon">
                    <img
                      src={require("../assets/steps/privacy.svg").default}
                      alt=""
                      className="lni-cake"
                    />
                  </div>
                  <div className="timeline__event__date">2</div>
                  <div className="timeline__event__content">
                    <div className="timeline__event__title">Step Two</div>
                    <div className="timeline__event__description">
                      Download the app and login with your email. Complete the
                      profile details.
                    </div>
                  </div>
                </div>
                <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
                  <div className="timeline__event__icon">
                    <img
                      src={require("../assets/steps/freecodecamp.svg").default}
                      alt=""
                      className="lni-cake"
                    />
                  </div>
                  <div className="timeline__event__date">3</div>
                  <div className="timeline__event__content">
                    <div className="timeline__event__title">Step Three</div>
                    <div className="timeline__event__description">
                      Click on the courses tab. There are 24 modules in the
                      course. Each module contains a video and a quiz.
                    </div>
                  </div>
                </div>
                <div className="timeline__event animated fadeInUp timeline__event--type1">
                  <div className="timeline__event__icon">
                    <img
                      src={require("../assets/steps/html-tag.svg").default}
                      alt=""
                      className="lni-cake"
                    />
                  </div>
                  <div className="timeline__event__date">4</div>
                  <div className="timeline__event__content">
                    <div className="timeline__event__title">Step Four</div>
                    <div className="timeline__event__description">
                      Complete all 24 modules and download the certificate.
                    </div>
                  </div>
                </div>
                <div className="timeline__event animated fadeInUp delay-3s timeline__event--type1">
                  <div className="timeline__event__icon">
                    <img
                      src={require("../assets/steps/check.svg").default}
                      alt=""
                      // className="lni-cake"
                    />
                  </div>
                  <div className="timeline__event__date">5</div>
                  <div className="timeline__event__content">
                    <div className="timeline__event__title">Step Five</div>
                    <div className="timeline__event__description">
                      After course completion, download the certificate and post
                      it in <b>#students</b> channel along with hashtag{" "}
                      <b>#ge-defensive-driving </b>
                      to avail <b> 400 Karma Points</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.sample_container}>
              <p className={styles.sample_header}>Example message and image</p>
              <p className={styles.sample_message}>
                <br></br>
                <b>#ge-defensive-driving </b>
                <br></br>
                Hey! I’ve completed the Defensive Driving Program. Here’s my
                certificate.
              </p>
              <img
                className={styles.sample_img}
                src="/assets/challenge/ddrivingsample.png"
                alt="pic"
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DefensiveDriving;
