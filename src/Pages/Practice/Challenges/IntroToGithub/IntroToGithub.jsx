import React from "react";
import Navbar from "../../../../Components/Navbar/Navbar";
import Footer from "../../../../Components/Footer/Footer";
import ExampleMsg from "../../../../Components/ExampleMsg/ExampleMsg";

import styles from "./introToGithub.module.css";
import "../common/steps.css";

const IntroToGithub = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>
                Introduction to <span>GitHub</span>
              </p>
              <p className={styles.fv_content}>
                The aim of the course is to teach you about GitHub and its
                numerous tools and processes, such as Issues and Pull Requests.
              </p>
              <p className={styles.fv_content_karma}>
                On Completion Earn 200 Karma Points
              </p>
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
                      src={require("../assets/steps/github.svg").default}
                      alt=""
                      className="lni-cake"
                    />
                  </div>
                  <div className="timeline__event__date">1</div>
                  <div className="timeline__event__content">
                    <div className="timeline__event__title">Step One</div>
                    <div className="timeline__event__description">
                      Create a{" "}
                      <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub Account
                      </a>
                    </div>
                  </div>
                </div>
                <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
                  <div className="timeline__event__icon">
                    <img
                      src={require("../assets/steps/repo.svg").default}
                      alt=""
                      className="lni-cake"
                    />
                  </div>
                  <div className="timeline__event__date">2</div>
                  <div className="timeline__event__content">
                    <div className="timeline__event__title">Step Two</div>
                    <div className="timeline__event__description">
                      Navigate to{" "}
                      <a
                        href="https://github.com/skills/introduction-to-github"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        github.com/skills/introduction-to-github
                      </a>
                    </div>
                  </div>
                </div>
                <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
                  <div className="timeline__event__icon">
                    <img
                      src={require("../assets/steps/readme.svg").default}
                      alt=""
                      className="lni-cake"
                    />
                  </div>
                  <div className="timeline__event__date">3</div>
                  <div className="timeline__event__content">
                    <div className="timeline__event__title">Step Three</div>
                    <div className="timeline__event__description">
                      Go through the <code>README.md</code> file. Read the
                      instructions carefully, create the repository and complete
                      the 4 steps.
                    </div>
                  </div>
                </div>
                <div className="timeline__event animated fadeInUp timeline__event--type1">
                  <div className="timeline__event__icon">
                    <img
                      src={require("../assets/steps/check.svg").default}
                      alt=""
                      className="lni-cake"
                    />
                  </div>
                  <div className="timeline__event__date">4</div>
                  <div className="timeline__event__content">
                    <div className="timeline__event__title">Step Four</div>
                    <div className="timeline__event__description">
                      Post the repository URL of the file you've worked on in{" "}
                      <b>#students</b> channel with hashtag{" "}
                      <b>#ge-intro-to-github</b> (see example message below)
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ExampleMsg
              hashtag="#ge-intro-to-github"
              firstLine="Hi! I've completed the Intro to GitHub course."
              link="https://github.com/Angelrose19/intro-to-github"
            
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default IntroToGithub;
