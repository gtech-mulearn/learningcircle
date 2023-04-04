import React from "react"
import Navbar from "../../../../Components/Navbar/Navbar"
import Footer from "../../../../Components/Footer/Footer"

import styles from "./DesignChallenge.module.css"

const InnovationDesignChallenge = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>
                Engineering Design <span>Challenge</span>
              </p>
              <p className={styles.fv_content}>
                This challenge challenges engineering students to identify
                real-world problems, conduct surveys and research, and propose
                innovative solutions through sketches, prototypes, and videos.
                Submissions will be shared in the #civil channel
                using specific hashtags.
                <br />
              </p>

              <br />
              <a
                href="https://www.youtube.com/watch?v=Uiqlu2gJu3k&list=PLOzRYVm0a65dRU1hBCsd3rqyhjpcGCioi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={styles.joinchallenge}>
                  Resource Material
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
                      <b>1. Identify 3 Problems</b> from industry or society
                      document it including photographs of the problems and
                      mention the benificiary submit the document link in the
                      channel <b>#civil</b> with hash tag{" "}
                      <b>#cl-ie-tech1</b> to get 100 Karma Points.
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
                      <b>2. Conduct a survey</b> with stakeholders, Conduct
                      detailed study of the problem by asking questions and
                      document it including photographs., questions and the
                      corresponding responses submit the doc link in the{" "}
                      <b>#civil</b> with the hash tag{" "}
                      <b>#cl-ie-tech2</b> to get 50 Karma Points.
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
                      <b>3. Select a problem statement</b> and study existing
                      solutions and detailed doc prepareation of new design and
                      what values does the improvement makes,ubmit the
                      documenttion link in <b>#civil</b> with the
                      hash tag <b>#cl-ie-tech3</b> to get 100 Karma Points.
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
                      <b>4. Prepare a sketch</b> of new /improved design and
                      submit the image in the <b>#civil</b> with the
                      hashtag <b>#cl-ie-tech4</b> to get 200 Karma Points.
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
                  <div className="timeline__event__date">5</div>
                  <div className="timeline__event__content">
                    <div className="timeline__event__title">Step Five</div>
                    <div className="timeline__event__description">
                      <b>5. Make a mock-up model</b> and prepare a 1 min video
                      of the product or design including problem statement,
                      solution and its advantages and submit the video in the
                      channel <b>#civil</b> with the hash tag{" "}
                      <b>#cl-ie-tech5</b> to get 200 Karma Points.
                    </div>
                  </div>
                </div>
                <div className="timeline__event animated fadeInUp delay-3s timeline__event--type1">
                  <div className="timeline__event__icon">
                    <img
                      src={require("../assets/steps/freecodecamp.svg").default}
                      alt=""
                    />
                  </div>
                  <div className="timeline__event__date">6</div>
                  <div className="timeline__event__content">
                    <div className="timeline__event__title">Step Six</div>
                    <div className="timeline__event__description">
                      <b>6. Fabricate/ create a prototype</b> and submit the
                      short video in <b>#civil</b> with the hashtag{" "}
                      <b>#cl-ie-tech6</b> to get 200 Karma Points.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.sample_container}>
              <p className={styles.sample_header}>Example Message</p>
              <p className={styles.sample_message}>
                <b>#cl-ie-tech6</b>
                Hey, I have created the prototype of the product and here is my
                video submission.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default InnovationDesignChallenge
