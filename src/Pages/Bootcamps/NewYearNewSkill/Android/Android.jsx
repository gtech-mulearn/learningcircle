import React from "react"
import styles from "./Android.module.css"

import Navbar from "../../../../Components/Navbar/Navbar"
import Footer from "../../../../Components/Footer/Footer"

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
                integrate it in your campus for your peers who are eeager to
                venture into Android Development with Kotlin.This Boot-camp aims
                to minimize the learning process into micro-steps to enhance
                your learning curve
              </p>
              {/* <p className={styles.officehrs}>
                <span>Office Hours : </span> Thursday 07:00PM @ Discord Lobby
              </p>
              <p className={styles.officehrs}>
                <span>Think Tank Meet : </span> Wednesday 09:30 PM @ Google Meet
              </p> */}
              <div className={styles.supporters}>
                <span>Supported By </span>
                <div className={styles.s_images}>
                  <a
                    href="https://developer.android.com/teach"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/assets/bootcamp/android/androideducators.png"
                      alt="Riglabs"
                      className={styles.supporter}
                    />
                  </a>
                </div>
              </div>
              <a
                href="https://airtable.com/shrACkBZBdJbya6or"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.atag}
              >
                <button className={styles.register}>Register Now!</button>
              </a>
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
          <p className={styles.sv_header}>Git & Github</p>
          <p className={styles.sv_content}>
            This bootcamp is divided into two stages, the first of which
            requires you to learn Git and GitHub and build a decent GitHub
            readme. By watching the video provided below.
          </p>
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
                      <div className="timeline__event__title">Part One</div>
                      <div className="timeline__event__description">
                        <a
                          href="https://youtu.be/va6LLfdhvGM"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Learn Git & Github&nbsp;
                        </a>
                        and post a screenshot of your github readme along with
                        the hastag <b>#cl-github-readme</b> at #task-dropbox
                        channel.
                      </div>
                      <a href="#githubreadme">See Screenshot ↓</a>
                    </div>
                  </div>

                  <div id="githubreadme" className={styles.sample_container}>
                    <b>
                      <p className={styles.sample_header}>
                        Github Message and Image
                      </p>
                    </b>
                    <p className={styles.sample_message}>
                      <b>#cl-github-readme</b>
                      Hey! I've completed my GitHub readme. Here's my profile.{" "}
                      <br />
                      <b> https://github.com/Dexters-Hub</b>
                      <br />
                      in the #task-dropbox channel.
                    </p>
                    <br />
                    <img
                      className={styles.sample_img}
                      src="/assets/bootcamp/android/githubreadme.png"
                      alt="pic"
                      srcset=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.second_view_container}>
          <p className={styles.sv_header}>Practice Kotlin</p>
          <p className={styles.sv_content}>
            To complete this bootcamp, you must complete all of the exercises on
            the exercism platform. After completing a series of exercises, you
            will be rewarded karma points.
          </p>
          <div className={styles.second_view}>
            <div className={styles.steps}>
              <div className="timeline-container">
                <div className="timeline">
                  <div className="timeline__event animated fadeInUp delay-2s timeline__event--type3">
                    <div className="timeline__event__icon">
                      <img
                        src={require("../assets/steps/privacy.svg").default}
                        alt=""
                        className="lni-cake"
                      />
                    </div>
                    <div className="timeline__event__date">1</div>
                    <div className="timeline__event__content">
                      <div className="timeline__event__title">
                        Part TWO(Step 1)
                      </div>
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
                    <div className="timeline__event__date">2</div>
                    <div className="timeline__event__content">
                      <div className="timeline__event__title">Step Two</div>
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
                    <div className="timeline__event__date">3</div>
                    <div className="timeline__event__content">
                      <div className="timeline__event__title">Step Three</div>
                      <div className="timeline__event__description">
                        Post the screenshot of your profile/link when you reach
                        level 21 in #android-development channel with hashtag{" "}
                        <b>&nbsp;#cl-exercism-kotlin-21</b> to avail{" "}
                        <b>200 karma points.</b>
                        <br />
                        <a href="#exercism">See Screenshot ↓</a>
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
                    <div className="timeline__event__date">4</div>
                    <div className="timeline__event__content">
                      <div className="timeline__event__title">Step Four</div>
                      <div className="timeline__event__description">
                        Post the screenshot of your profile/link when you reach
                        level 42 in #android-development channel with hashtag
                        <b>&nbsp;#cl-exercism-kotlin-42</b> to avail{" "}
                        <b>200 karma points.</b>
                      </div>
                    </div>
                  </div>
                  <div className="timeline__event animated fadeInUp delay-3s timeline__event--type3">
                    <div className="timeline__event__icon">
                      <img
                        src={require("../assets/steps/monitor.svg").default}
                        alt=""
                      />
                    </div>
                    <div className="timeline__event__date">5</div>
                    <div className="timeline__event__content">
                      <div className="timeline__event__title">Step Five</div>
                      <div className="timeline__event__description">
                        Post the screenshot of your profile/link when you reach
                        level 63 in #android-development channel with hashtag
                        <b>{" "}#cl-exercism-kotlin-63</b> to avail{" "}
                        <b>200 karma points.</b>
                      </div>
                    </div>
                  </div>
                  <div className="timeline__event animated fadeInUp delay-3s timeline__event--type3">
                    <div className="timeline__event__icon">
                      <img
                        src={require("../assets/steps/repo.svg").default}
                        alt=""
                      />
                    </div>
                    <div className="timeline__event__date">6</div>
                    <div className="timeline__event__content">
                      <div className="timeline__event__title">Step Six</div>
                      <div className="timeline__event__description">
                        Post the screenshot of your profile/link when you reach
                        level 85 in #android-development channel with hashtag first
                        <b>&nbsp;#cl-exercism-kotlin-85</b> to avail{" "}
                        <b>200 karma points.</b>
                      </div>
                    </div>
                  </div>
                  <div className={styles.sample_container}>
                    <b>
                      <p className={styles.sample_header}>
                        New lessons arriving shortly!
                      </p>
                    </b>
                  </div>

                  <div id="exercism" className={styles.sample_container}>
                    <b>
                      <p className={styles.sample_header}>
                        Exercism Message and Image
                      </p>
                    </b>
                    <p className={styles.sample_message}>
                      <b>#cl-exercism-kotlin-21</b>
                      <br />
                      Hey! I've reached Android Bootcamp Exercise 21. Here's my
                      progress. <br />
                      <b> https://exercism.org/profiles/ BijoMathewJose</b>
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
  )
}

export default Android
