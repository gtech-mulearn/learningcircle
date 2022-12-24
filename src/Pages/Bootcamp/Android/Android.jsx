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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                iste quia ipsam voluptatem nobis consequuntur dolorem cumque
                provident quidem ratione..
              </p>
              {/* <button className={styles.comingsoon}>Coming Soon!</button> */}
            </div>
            <div className={styles.fv_image}>
              <img
                src="/assets/bootcamp/android/fvimg.gif"
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
                        Navigate to{" "}
                        <a
                          href="https://github.com/skills/github-pages"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          https://github.com/skills/github-pages
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
                        Go through the <b>README.md</b> file. Read the
                        instructions carefully, create the repository and
                        complete the 6 steps.
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
                        If you still seem to have doubts, feel free to ask in
                        the #students channel
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
                        You can find your GitHub Page URL from github-pages &gt;
                        view deployment<br></br>
                        <br />
                        <a href="#step4">see screenshot ↓</a>
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
                        Post the GitHub Page URL you've deployed in{" "}
                        <b>#students</b> channel with hashtag{" "}
                        <b>#ge-github-pages</b> (see example message below)
                      </div>
                    </div>
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
