import React from "react"
import Navbar from "../../../../Components/Navbar/Navbar"
import Footer from "../../../../Components/Footer/Footer"

import styles from "./MarathonChallenge.module.css"

const MarathonChallenge = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>
                µLearn Marathon <span>Challenge</span>
              </p>
              <p className={styles.fv_content}>
                Join our Marathon Challenge and earn karma points while
                improving your health and fitness! Simply run a few kilometers
                every day and track your progress on the Runkeeper app. This
                challenge is open to all levels of runners, from beginners to
                experienced athletes.
                <br />
              </p>
              <p className={styles.late_date}>
                Free Tickets for the First 25 completions. Hurry up and run to
                secure your FREE tickets!
              </p>

              <br />
              <a
                href="https://airtable.com/shrJpHwakqmNxjWE1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={styles.joinchallenge}>
                  Complete Challenge
                </button>
              </a>
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
                    />
                  </div>
                  <div className="timeline__event__date">1</div>
                  <div className="timeline__event__content">
                    <div className="timeline__event__title">Step One</div>
                    <div className="timeline__event__description">
                      Download the{" "}
                      <a
                        href="https://play.google.com/store/apps/details?id=com.fitnesskeeper.runkeeper.pro&hl=en_IN&gl=US&pli=1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        ASICS Runkeeper - Run Tracker
                      </a>{" "}
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
                      Complete the first stage of the marathon challenge by
                      running 3 km and post a screenshot of the statistics with
                      the hashtag <b>#marathon-challenge-3km</b> in the
                      marathon-challenge channel to earn <b>200 Karma</b>.
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
                      Run 7 km to complete the second stage of the marathon
                      challenge and earn <b>200 Karma</b>. Post a screenshot of
                      the statistics with the hashtag{" "}
                      <b>#marathon-challenge-10km</b> in the marathon-challenge
                      channel for completing this stage.
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
                      Run 11 km to complete the final stage of the marathon
                      challenge and earn <b>400 Karma</b>. Post a screenshot of
                      the statistics with the hashtag{" "}
                      <b>#marathon-challenge-21km</b> in the marathon-challenge
                      channel for completing this stage.
                      <br />
                      <br />
                      You can also{" "}
                      <a
                        href="http://mulearn.org/gtechmarathon"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <b>Buy Tickets</b>
                      </a>{" "}
                      for the GTech Marathon
                      <b>
                        <p>
                          Make sure your profile is visible in the screenshot
                        </p>
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.sample_container}>
              <p className={styles.sample_header}>Example Message</p>
              <p className={styles.sample_message}>
                #marathon-challenge-11km
                <br />
                Hey! I've completed 11km in the marathon challenge. Here is a
                screenshot of my achievement
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default MarathonChallenge
