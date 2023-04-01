import React from "react";
import Navbar from "../../../../Components/Navbar/Navbar";
import Footer from "../../../../Components/Footer/Footer";
import ExampleMsg from "../../../../Components/ExampleMsg/ExampleMsg";

import styles from "./IntroToMarkdown.module.css";

const IntroToMarkdown = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>
                Introduction to <span>Markdown</span>
              </p>
              <p className={styles.fv_content}>
                The aim of the course is to learn how to communicate using
                Markdown, a lightweight language for text formatting.
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
                      Navigate to{" "}
                      <a
                        href="https://github.com/skills/communicate-using-markdown"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github Skills
                      </a>
                    </div>
                  </div>
                </div>
                <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
                  <div className="timeline__event__icon">
                    <img
                      src={require("../assets/steps/readme.svg").default}
                      alt=""
                      className="lni-cake"
                    />
                  </div>
                  <div className="timeline__event__date">2</div>
                  <div className="timeline__event__content">
                    <div className="timeline__event__title">Step Two</div>
                    <div className="timeline__event__description">
                      Go through the <code>README.md</code> file. Read the
                      instructions carefully, create the repository and complete
                      the 5 steps.
                    </div>
                  </div>
                </div>
                <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
                  <div className="timeline__event__icon">
                    <img
                      src={require("../assets/steps/check.svg").default}
                      alt=""
                      className="lni-cake"
                    />
                  </div>
                  <div className="timeline__event__date">3</div>
                  <div className="timeline__event__content">
                    <div className="timeline__event__title">Step Three</div>
                    <div className="timeline__event__description">
                      Post the repository URL of the file you've worked on in{" "}
                      <b>#students</b> channel with hashtag{" "}
                      <b>#ge-intro-to-markdown</b> (see example message below)
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ExampleMsg
             hashtag="#ge-intro-to-markdown"
              linkText="Hi! I've completed the Intro to Markdown course."
              link="https://github.com/Angelrose19/intro-to-markdown"
             
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default IntroToMarkdown;
