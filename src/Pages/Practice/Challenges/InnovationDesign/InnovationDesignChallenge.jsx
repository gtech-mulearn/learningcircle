import React from "react"
import Navbar from "../../../../Components/Navbar/Navbar"
import Footer from "../../../../Components/Footer/Footer"

import styles from "./InnovationDesignChallenge.module.css"

const InnovationDesignChallenge = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>
                Innovation Design <span>Challenge</span>
              </p>
              <p className={styles.fv_content}>
                Design solutions for home problems in the Civil Engineering
                course project. Complete five steps and submit work with
                appropriate hashtags in <b>#civil</b> channel.
                Includes identifying problems, surveying stakeholders, preparing
                a design sketch, and creating a mock-up model with a video
                presentation.
                <br />
              </p>

              <br />
              <a
                href="https://www.youtube.com/watch?v=uzDCc_lShAY&list=PLOzRYVm0a65epMo6DDrlT0X5ejGWDbT13"
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
                      Identify three problems in your home, document them
                      including photographs, and mention the
                      stakeholders/beneficiaries. Submit the document link in
                      the <b>#civil</b> channel with the hashtag
                      <b>#cl-ie-design1</b> to get 50 Karma Points
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
                      Conduct a survey for the three chosen problems with
                      corresponding stakeholders. Conduct a detailed study of
                      the problem by asking questions and document it. Submit
                      the document, including questions and their responses
                      along with photographs, in the <b>#civil</b>{" "}
                      channel with the hashtag <b>#cl-ie-design2</b> to get 50
                      Karma Points
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
                      Select a problem statement to solve and study existing
                      solutions. Prepare a detailed document of the new design
                      and what values the improvement makes. Submit the
                      documentation link in the <b>#civil</b>{" "}
                      channel with the hashtag <b>#cl-ie-design3</b> to get 50
                      Karma Points.
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
                      Prepare a sketch of the new/improved design and submit the
                      image in the <b>#civil</b> channel with the
                      hashtag
                      <b>#cl-ie-design4</b> to get 50 Karma Points
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
                      Make a mock-up model and prepare a one-minute video of the
                      product or design that contains the problem, solution, and
                      advantages. Submit the video in the{" "}
                      <b>#civil</b>
                      channel with the hashtag <b>#cl-ie-design5</b> to get 50
                      Karma Points
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.sample_container}>
              <p className={styles.sample_header}>Example Message</p>
              <p className={styles.sample_message}>
                <b>#cl-ie-design5</b>
                Hey, I have completed the mock-up model and here is my video of
                the product [link].
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
