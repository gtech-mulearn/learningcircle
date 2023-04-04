import React from "react";
import Navbar from "../../../../Components/Navbar/Navbar";
import Footer from "../../../../Components/Footer/Footer";

import styles from "./IntroToHtml.module.css";

const IntroToHtml = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>
                Introduction to <span>HTML</span>
              </p>
              <p className={styles.fv_content}>
                HTML tags give a webpage its structure. You can use HTML tags to
                add photos, buttons, and other elements to your webpage.
                <br />
                <br />
                In this course, you'll learn the most common HTML tags by
                building your own cat photo app.
              </p>
              <p className={styles.fv_content_karma}>
                On Completion Earn 100 Karma Points
              </p>
            </div>

          </div>
        </div>
        <div className={styles.second_view_container}>
          <div className={styles.second_view}>
            <div className={styles.sv_texts}>
              <p className={styles.sv_heading}>How to do the challenge?</p>
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
                      className="lni-cake"
                    />
                  </div>
                  <div className="timeline__event__date">1</div>
                  <div className="timeline__event__content">
                    <div className="timeline__event__title">Step One</div>
                    <div className="timeline__event__description">
                      Login to{" "}
                      <a
                        href="https://www.freecodecamp.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        freecodecamp.org
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
                      Click on Menu &gt; Settings. Complete the profile & change
                      the privacy settings to public. Save the changes
                      <br />
                      <a href="#step2">see screenshot ↓</a>
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
                      Navigate to{" "}
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-html-by-building-a-cat-photo-app"
                      >
                        Learn HTML by Building a Cat Photo App 
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
                      Complete the{" "}
                      <b>Learn HTML by Building a Cat Photo App</b>
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
                      After completing the 69 steps, share your profile URL in{" "}
                      <b>#students</b> channel with hashtag{" "} at the beginning
                      <b>#ge-intro-to-html</b> to avail karma points. (see
                      example message below)
                      <br />
                      <a href="#step5">see screenshot ↓</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.screenshots}>
              <p id="step2" className={styles.ss_title}>
                Step 2 - Screenshot
              </p>
              <img src={require("./imgs/html-2-ss.png")} alt="" />

              <p id="step5" className={styles.ss_title}>
                Step 5 - Screenshot
              </p>
              <img src={require("./imgs/html-5-ss.png")} alt="" />
            </div>

            <div className={styles.sample_container}>
              <p className={styles.sample_header}>Example Message</p>
              <p className={styles.sample_message}>
              #ge-intro-to-html
                Hey! I built a Cat Photo App. <br />
                <a
                  href="https://www.freecodecamp.org/fccf7560df4-0e1a-4d83-b820-e55c2e47a19d"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.freecodecamp.org/fccf7560df4-0e1a-4d83-b820-e55c2e47a19d{" "}
                </a>
                <br />
               
              </p>
            </div>
            <div className={styles.callout}>
              Complete the full FreeCodeCamp Responsive Web Design Course and
              avail 800 karma points. Checkout{" "}
              <a href="https://learn.mulearn.org/web/core/1">
                https://learn.mulearn.org/web/core/1
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default IntroToHtml;
