import React from "react"
import Footer from "../../../../Components/Footer/Footer"
import Navbar from "../../../../Components/Navbar/Navbar"
import styles from "./GoogleSolutionsChallenge.module.css"

const GoogleSolutionsChallenge = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <img
              src="/assets/challenge/gsolu.png"
              alt=""
              className={styles.fv_image}
            />
            <div className={styles.first_view_texts}>
              <p className={styles.fv_heading}>
                Google <span>Solutions Challenge</span> 2023
              </p>
              <p className={styles.fv_content}>
                Google Solution Challenge is a global annual competition for
                university students to solve one or more of the United
                Nations 17 Sustainable Development Goals using Google
                Technology.
              </p>
              <p className={styles.fv_content}>
                <b>Last Date for Registering: 17th March</b>
              </p>
              <a
                href="https://goo.gle/solutions-challenge23-promo"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.atag}
              >
                <button className={styles.register_now}>Register Now</button>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.second_view_container}>
          <div className={styles.second_view}>
            <div className={styles.second_view_texts}>
              <p className={styles.sv_heading}>
                {" "}
                <span>About</span> the Challenge
              </p>
              <p className={styles.sv_content}>
                Well, we know you are Interested, Here are steps to get
                you going.
              </p>
            </div>
          </div>

          <div className={styles.steps_container}>
            <div className={styles.step}>
              <p className={styles.step_heading}>Step 1</p>
              <p className={styles.step_content}>Register for the Challenge</p>
              <p className={styles.step_description}>
                <a
                  href="https://goo.gle/solutions-challenge23-promo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register&nbsp;
                </a>
                and showcase their interests before Mar 17, 2023. Remember to
                join a GDSC Club as a member to be eligible for future
                submissions.
              </p>
            </div>
            <div className={styles.step}>
              <p className={styles.step_heading}>Step 2</p>
              <p className={styles.step_content}>Build the Team</p>
              <p className={styles.step_description}>
                {" "}
                Build a team and&nbsp;
                <a
                  href="https://developers.google.com/community/gdsc-solution-challenge/UN-goals"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  choose a SDG&nbsp;
                </a>
                for which you want to build a solution for.{" "}
                <a
                  href="https://docs.google.com/document/u/1/d/18mg0fM_axvuGX3XlerHWlzvy5-R4qL2nGsKzyhCivkA/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Refer sample problem statements here.
                </a>
              </p>
            </div>
            <div className={styles.step}>
              <p className={styles.step_heading}>Step 3</p>
              <p className={styles.step_content}>Submit the Solutions</p>
              <p className={styles.step_description}>
                Submit solutions for the first round of evaluation between March
                17-March 31st.{" "}
                <a
                  href="https://developers.google.com/community/gdsc-solution-challenge/faq"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Refer here
                </a>{" "}
                to understand the judging criteria for the submissions.
              </p>
            </div>
            
          </div>
        </div>
        <div className={styles.second_view_container}>
          <div className={styles.second_view}>
            <div className={styles.sv_texts}>
              <p className={styles.sv_heading}>
                Earning <span> Karma Points</span>
              </p>
              <p className={styles.sv_content}>
                Show below are the milestones upon completion of which you can
                earn Karma Points.
              </p>
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
                      On registering for Solution Challenge, you will receive an
                      email confirmation. Post a screenshot of the email along
                      with the hashtag <b>#solution-challenge-register</b> in
                      the google-developers channel to earn{" "}
                      <b>20 karma points</b>
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
                      On successfully submitting your solution for the Solution
                      Challenge, you will receive a badge. Share the link of the
                      badge along with the hashtag{" "}
                      <b>#solution-challenge-project</b>
                      in the google-developers channel to earn{" "}
                      <b>200 karma points</b>
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
                      After evaluation of submissions, the top 100 solutions
                      will be announced. If your submission is part of the top
                      100, you will receive a badge. Share the link of the badge
                      with the hashtag <b>#solution-challenge-top100</b> in the
                      google-developers channel to earn{" "}
                      <b>#solution-challenge-top100</b> 50 karma points
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.sample_container}>
              <p className={styles.sample_header}>Example Message</p>
              <p className={styles.sample_message}>
                Hey! I've completed the registration for the google solutions
                challenge. Here is a screenshot of my email
                <br />
                <b>#solution-challenge-register</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default GoogleSolutionsChallenge
