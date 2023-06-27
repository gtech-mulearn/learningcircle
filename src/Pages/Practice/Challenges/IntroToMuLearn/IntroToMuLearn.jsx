import React from "react";
import Navbar from "../../../../Components/Navbar/Navbar";
import Footer from "../../../../Components/Footer/Footer";

import styles from "./IntroToMuLearn.module.css";

const IntroToMulearn = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>
                Introduction to <span>µLearn</span>
              </p>
              <p className={styles.fv_content}>
                Welcome to the Land of μLearn. Time to start your µ-Journey!
                <br />
                <br />
              </p>
            </div>

            {/* <div className={styles.fv_image}>
                            <img
                                src="/assets/challenge/typing.gif"
                                alt="Group Learning Pic"
                                className={styles.fv_img}
                            />
                        </div> */}
          </div>
        </div>
        <div className={styles.second_view_container}>
          <div className={styles.second_view}>
            <div className={styles.sv_texts}>
              <p className={styles.sv_heading}>How to do the challenge?</p>
              {/* <p className={styles.sv_content}>
                                Do you know, The faster you type, the faster you communicate
                                with others. Let's work on our rapid fingers and earn some
                                karma.
                            </p> */}
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
                      Register an account on{" "}
                      <a
                        href="https://mulearn.atfg.gtechindia.org/page/intro-to-mulearn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        mulearn.atfg.gtechindia.org
                      </a>
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
                      You’ll receive a login code in your{" "}
                      <a
                        href="https://mail.google.com/mail/u/0/#inbox"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        mail
                      </a>{" "}
                      to activate your account.
                      {/* <br />
                      <a href="#step2">see screenshot ↓</a> */}
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
                      After activating the account, log onto
                      <a
                        href=" https://mulearn.atfg.gtechindia.org/page/intro-to-mulearn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        mulearn.atfg.gtechindia.org/page/intro-to-mulearn
                      </a>
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
                      <b>Create a learning circle inside your campus</b>,
                      complete the course, and download the certificate.
                    </div>
                  </div>
                </div>
                <div className="timeline__event animated fadeInUp delay-3s timeline__event--type1">
                  <div className="timeline__event__icon">
                    <img
                      src={require("../assets/steps/check.svg").default}
                      alt=""
                      className="lni-cake"
                    />
                  </div>
                  <div className="timeline__event__date">5</div>
                  <div className="timeline__event__content">
                    <div className="timeline__event__title">Step Five</div>
                    <div className="timeline__event__description">
                      After course completion, share the certificate in{" "}
                      <b>#task-dropbox</b> channel with hashtag{" "}
                      <b>#ge-intro-to-mulearn</b> and also mention the name of
                      the learning circle you have created.
                      {/* <a href="#step5">see screenshot ↓</a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className={styles.screenshots}>
              <p id="step2" className={styles.ss_title}>
                Step 2 - Screenshot
              </p>
              <img src={require("./imgs/html-2-ss.png")} alt="" />

              <p id="step5" className={styles.ss_title}>
                Step 5 - Screenshot
              </p>
              <img src={require("./imgs/html-5-ss.png")} alt="" />
            </div> */}

            <div className={styles.sample_container}>
              <p className={styles.sample_header}>Example Message</p>
              <p className={styles.sample_message}>
              #ge-intro-to-mulearn
                Hey! I've completed the Intro to µLearn task and created a
                learning circle named "Enter your Circle Name Here". <br />
                Here's my course certificate.
                {/* <a href="https://www.freecodecamp.org/fccf7560df4-0e1a-4d83-b820-e55c2e47a19d">
                  https://www.freecodecamp.org/fccf7560df4-0e1a-4d83-b820-e55c2e47a19d{" "}
                </a> */}
                <br />
               
              </p>
            </div>
            {/* <div className={styles.callout}>
              Complete the full FreeCodeCamp Responsive Web Design Course and
              avail 400 karma points. Checkout{" "}
              <a href="https://learn.mulearn.org/web/core/1">
                https://learn.mulearn.org/web/core/1
              </a>
            </div> */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default IntroToMulearn;
