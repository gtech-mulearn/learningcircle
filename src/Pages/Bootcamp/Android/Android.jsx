import React from "react";
import styles from "./Android.module.css";

import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";

const Android = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>
                <span> Android </span> Bootcamp
              </p>
              <p className={styles.fv_content}>
                Learn Android Development in Kotlin hands-on so that you may
                integrate it on your campuses for your colleagues who are eager
                to enter the area of Android Development in Kotlin.
              </p>
              <button className={styles.register}>Starting Soon!</button>
            </div>
            <div className={styles.fv_image}>
              <img
                src="/assets/bootcamp/android/fvimg.png"
                alt=""
                className={styles.fv_img}
              />
            </div>
          </div>
        </div>
        <div className={styles.second_view_container}>
          <div className={styles.second_view}>
            <div className={styles.steps}>
              <div className="timeline-container">
                <div className="timeline">
                  <div className="timeline__event animated fadeInUp delay-3s timeline__event--type3">
                    <div className="timeline__event__icon">
                      <img
                        src={
                          require("../assets/steps/freecodecamp.svg").default
                        }
                        alt=""
                      />
                    </div>
                    <div className="timeline__event__date">1</div>
                    <div className="timeline__event__content">
                      <div className="timeline__event__title">Step One</div>
                      <div className="timeline__event__description">
                        <a
                          href="https://youtu.be/va6LLfdhvGM"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Learn Git and Github.
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="timeline__event animated fadeInUp delay-2s timeline__event--type3">
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
                        Navigate to
                        <a
                          href="https://developer.android.com/studio/install"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          &nbsp;Android Studio
                        </a>
                        , Download and Install it.
                      </div>
                    </div>
                  </div>
                  <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
                    <div className="timeline__event__icon">
                      <img
                        src={
                          require("../assets/steps/freecodecamp.svg").default
                        }
                        alt=""
                        className="lni-cake"
                      />
                    </div>
                    <div className="timeline__event__date">3</div>
                    <div className="timeline__event__content">
                      <div className="timeline__event__title">Step Three</div>
                      <div className="timeline__event__description">
                        Practice&nbsp;
                        <a
                          href="https://exercism.org/tracks/kotlin"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Kotlin
                        </a>
                        &nbsp;through exercism platform.
                      </div>
                    </div>
                  </div>
                  <div className="timeline__event animated fadeInUp timeline__event--type3">
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
                        Post the screenshot of your profile/link when you reach
                        level 21 in #students channel with hashtag{" "}
                        <b>&nbsp;#bc-exercism-kotlin-21</b> to avail{" "}
                        <b>200 karma points.</b>
                        <br />
                      </div>
                    </div>
                  </div>
                  <div className="timeline__event animated fadeInUp delay-3s timeline__event--type3">
                    <div className="timeline__event__icon">
                      <img
                        src={require("../assets/steps/check.svg").default}
                        alt=""
                      />
                    </div>
                    <div className="timeline__event__date">5</div>
                    <div className="timeline__event__content">
                      <div className="timeline__event__title">Step Five</div>
                      <div className="timeline__event__description">
                        Post the screenshot of your profile/link when you reach
                        level 42 in #students channel with hashtag
                        <b>&nbsp;#bc-exercism-kotlin-42</b> to avail{" "}
                        <b>200 karma points.</b>
                      </div>
                    </div>
                  </div>
                  <div className="timeline__event animated fadeInUp delay-3s timeline__event--type3">
                    <div className="timeline__event__icon">
                      <img
                        src={require("../assets/steps/check.svg").default}
                        alt=""
                      />
                    </div>
                    <div className="timeline__event__date">6</div>
                    <div className="timeline__event__content">
                      <div className="timeline__event__title">Step Six</div>
                      <div className="timeline__event__description">
                        Post the screenshot of your profile/link when you reach
                        level 63 in #students channel with hashtag
                        <b>&nbsp;#bc-exercism-kotlin-63</b> to avail{" "}
                        <b>200 karma points.</b>
                      </div>
                    </div>
                  </div>
                  <div className="timeline__event animated fadeInUp delay-3s timeline__event--type3">
                    <div className="timeline__event__icon">
                      <img
                        src={require("../assets/steps/check.svg").default}
                        alt=""
                      />
                    </div>
                    <div className="timeline__event__date">7</div>
                    <div className="timeline__event__content">
                      <div className="timeline__event__title">Step Seven</div>
                      <div className="timeline__event__description">
                        Post the screenshot of your profile/link when you reach
                        level 85 in #students channel with hashtag
                        <b>&nbsp;#bc-exercism-kotlin-85</b> to avail{" "}
                        <b>200 karma points.</b>
                      </div>
                    </div>
                  </div>
                  <div className={styles.sample_container}>
                    <b>
                      <p className={styles.sample_header}>
                        New lessons will update shortly!
                      </p>
                    </b>
                    <p className={styles.sample_message}>
                      Detailed details about the bootcamp lessons will be added
                      on shortly.
                    </p>
                  </div>
                  <div className={styles.sample_container}>
                    <b>
                      <p className={styles.sample_header}>
                        Exercism Sample Profile
                      </p>
                    </b>
                    <p className={styles.sample_message}>
                      <a
                        href="https://exercism.org/profiles/BijoMathewJose"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Click Here &nbsp;
                      </a>
                      to view an example for an exercism sample profile.
                    </p>
                    <br />
                    <img
                      className={styles.sample_img}
                      src="/assets/bootcamp/android/exercismprofile.png"
                      alt="pic"
                      srcset=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Android;
