import React from "react";
import Navbar from "../../../../Components/Navbar/Navbar";
import Footer from "../../../../Components/Footer/Footer";

import styles from "./TypingChallenge.module.css";

const TypingChallenge = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>
                <span>µLearn</span> Typing Challenge
              </p>
              <p className={styles.fv_content}>
                Learning to master the skill of typing is always an advantage.
                It enables a person to be much more productive and use their
                time efficiently and also increase the outlook of others on
                them.
              </p>
            </div>

            <div className={styles.fv_image}>
              <img
                src="/assets/challenge/typing.gif"
                alt="Group Learning Pic"
                className={styles.fv_img}
              />
            </div>
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
                      Login to{" "}
                      <a
                        href="https://www.typingclub.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        typingclub.org
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
                      Start your typing lessons, karma points can be availed in
                      4 stages.
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
                      Post the screenshot of your progress when you reach level
                      126 in <b>#students</b> channel with hashtag{" "}
                      <b>#ge-typing-challenge-126</b> to avail{" "}
                      <b>200 karma points</b>.
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
                      Post the screenshot of your progress when you reach level
                      285 in <b>#students</b> channel with hashtag{" "}
                      <b>#ge-typing-challenge-285</b> to avail{" "}
                      <b>200 karma points</b>.
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
                      Post the screenshot of your progress when you reach level
                      460 in <b>#students</b> channel with hashtag{" "}
                      <b>#ge-typing-challenge-460</b> to avail{" "}
                      <b>200 karma points</b>.
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
                  <div className="timeline__event__date">6</div>
                  <div className="timeline__event__content">
                    <div className="timeline__event__title">Step Six</div>
                    <div className="timeline__event__description">
                      Post the screenshot of your progress when you reach level
                      685 in <b>#students</b> channel with hashtag{" "}
                      <b>#ge-typing-challenge-685</b> to avail{" "}
                      <b>200 karma points</b>.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.sample_container}>
              <p className={styles.sample_header}>Example Message and Image</p>
              <p className={styles.sample_message}>
                Hey! I've reached Typing Challenge Level 126. Here's my
                progress. #ge-typing-challenge-126
              </p>
              <img
                className={styles.sample_img}
                src="/assets/challenge/typingsample.webp"
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

export default TypingChallenge;
