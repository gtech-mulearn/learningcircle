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
                <br />
              </p>
              <a
                href="https://airtable.com/shrJpHwakqmNxjWE1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={styles.joinchallenge}>Join Challenge</button>
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
                      and Register an Account on it. <br />
                      <br /> After completing each stage Post a screenshot of
                      your submission along with the hashtag{" "}
                      <b>#marathon-challenge-day-10</b> in the{" "}
                      <b>marathon-challenge</b> channel
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
                      <b>Day 1-10:</b> This is a 30-day challenge that is split
                      into three parts. The first part requires to run a total
                      of 20km in the first 10 days, which will earn you{" "}
                      <b>100 Karma Points</b>. If you are able to achieve more
                      then you will get <b>200 Karma Points</b>
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
                      <b>Day 11-20: </b>In the second stage you will have to run
                      a total of 60km in 10-days, Join the GTech Marathon and
                      Refer a Friend of yours to join to get{" "}
                      <b>400 Karma Points</b>. If you are able to achieve more
                      you will be awarded <b>800 Karma Points</b>
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
                      <b>Day 21-30: </b>In the second stage you will have to run
                      a total of 100km in 10-days, along with regular exercise
                      to get <b>800 Karma Points</b>. If you are able to achieve
                      more you will be awarded <b>1000 Karma Points</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.sample_container}>
              <p className={styles.sample_header}>Example Message</p>
              <p className={styles.sample_message}>
                Hey! I've completed 20days in the marathon challenge. Here is a
                screenshot of my achievement
                <br />
                #marathon-challenge-day-20
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
