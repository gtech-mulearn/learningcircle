import React from "react"
import styles from "./Flutter.module.css"

import Navbar from "../../../Components/Navbar/Navbar"
import Footer from "../../../Components/Footer/Footer"

const Flutter = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.main_container}>
          <div className={styles.first_view_container}>
            <div className={styles.first_view}>
              <div className={styles.fv_texts}>
                <p className={styles.fv_heading}>
                  <span> Dart & Flutter </span> Bootcamp
                </p>
                <p className={styles.fv_content}>
                  Learn Dart hands-on so that you may integrate it in your
                  campus for your peers who are eager to venture into learning
                  Dart.This Boot-camp aims to minimize the learning process into
                  micro-steps to enhance your learning curve.
                </p>
                {/* <p className={styles.officehrs}>
                  <span>Office Hours : </span> Thursday 07:00PM @ Discord Lobby
                </p>
                <p className={styles.officehrs}>
                  <span>Think Tank Meet : </span> Tuesday 09:00 PM @ Google Meet
                </p> */}
                <a
                  href="https://airtable.com/shrRElDWCjn1KszVz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.atag}
                >
                  <button className={styles.register}>Register Now!</button>
                </a>
              </div>
              <div className={styles.fv_image}>
                <img
                  src="/assets/bootcamp/dart/fvimg.png"
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
                    <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
                      <div className="timeline__event__icon">
                        <img
                          src={require("../assets/steps/privacy.svg").default}
                          alt=""
                          className="lni-cake"
                        />
                      </div>
                      <div className="timeline__event__date">1</div>
                      <div className="timeline__event__content">
                        <div className="timeline__event__title">Step One</div>
                        <div className="timeline__event__description">
                          Download and Install any standard
                          <a
                            href="https://code.visualstudio.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            &nbsp;Code Editor
                          </a>
                          &nbsp;as well as the{" "}
                          <a
                            href="https://dart.dev/get-dart"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Dart SDK
                          </a>
                          For more usablity and easiness, install the following
                          extension for the VSCode Marketplace/Code Editor.
                          Error Lens, Dart, Flutter, Prettier Material Icons,
                          Night Owl Theme(Optional)
                        </div>
                      </div>
                    </div>
                    <div className="timeline__event animated fadeInUp delay-1s timeline__event--type2">
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
                            href="https://exercism.org/tracks/dart"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Dart
                          </a>
                          &nbsp;through exercism platform. Refer these videos
                          for Exerism Dart Installation.{" "}
                          <a
                            href="https://screenrec.com/share/3hxdq2gYsp"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Installation Part 1&nbsp;
                          </a>
                          &
                          <a
                            href="https://screenrec.com/share/3swkuYxalX"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            &nbsp;Installation Part 2
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="timeline__event animated fadeInUp timeline__event--type2">
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
                          Post the screenshot of your profile/link when you
                          reach level 10 in #web-and-mobile-app-development
                          channel with hashtag <b>&nbsp;#cl-exercism-dart-10</b>{" "}
                          to avail <b>200 karma points.</b>
                          <br />
                        </div>
                      </div>
                    </div>
                    <div className="timeline__event animated fadeInUp delay-3s timeline__event--type2">
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
                          Post the screenshot of your profile/link when you
                          reach level 20 in #web-and-mobile-app-development
                          channel with hashtag
                          <b>&nbsp;#cl-exercism-dart-20</b> to avail{" "}
                          <b>200 karma points.</b>
                        </div>
                      </div>
                    </div>
                    <div className="timeline__event animated fadeInUp delay-3s timeline__event--type2">
                      <div className="timeline__event__icon">
                        <img
                          src={require("../assets/steps/repo.svg").default}
                          alt=""
                        />
                      </div>
                      <div className="timeline__event__date">5</div>
                      <div className="timeline__event__content">
                        <div className="timeline__event__title">Step Five</div>
                        <div className="timeline__event__description">
                          Post the screenshot of your profile/link when you
                          reach level 30 in #web-and-mobile-app-development
                          channel with hashtag
                          <b>&nbsp;#cl-exercism-dart-30</b> to avail{" "}
                          <b>200 karma points.</b>
                        </div>
                      </div>
                    </div>
                    <div className="timeline__event animated fadeInUp delay-3s timeline__event--type2">
                      <div className="timeline__event__icon">
                        <img
                          src={require("../assets/steps/monitor.svg").default}
                          alt=""
                        />
                      </div>
                      <div className="timeline__event__date">6</div>
                      <div className="timeline__event__content">
                        <div className="timeline__event__title">Step Six</div>
                        <div className="timeline__event__description">
                          Post the screenshot of your profile/link when you
                          reach level 41 in #web-and-mobile-app-development
                          channel with hashtag
                          <b>&nbsp;#cl-exercism-dart-41</b> to avail{" "}
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
                    <div className={styles.sample_container}>
                      <b>
                        <p className={styles.sample_header}>
                          Exercism Message and Image
                        </p>
                      </b>
                      <p className={styles.sample_message}>

                      <b>#cl-exercism-dart-10</b>
                        <br />
                        Hey! I've reached Dart Bootcamp Exercise 21. Here's my
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
      </div>
      <Footer />
    </>
  )
}

export default Flutter
