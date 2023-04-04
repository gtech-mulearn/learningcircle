import React from "react";
import Navbar from "../../../../Components/Navbar/Navbar";
import Footer from "../../../../Components/Footer/Footer";
import ExampleMsg from "../../../../Components/ExampleMsg/ExampleMsg";

import styles from "./IntroToCommandLine.module.css";

const IntroToCommandLine = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>
                Introduction to <span>Command Line</span>
              </p>
              <p className={styles.fv_content_karma}>
              On Course Completion 200 Karma Points.
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
                      src={require("../assets/steps/cli.svg").default}
                      alt=""
                      className="lni-cake"
                    />
                  </div>
                  <div className="timeline__event__date">1</div>
                  <div className="timeline__event__content">
                    <div className="timeline__event__title">Step One</div>
                    <div className="timeline__event__description">
                      Complete the course end to end, Go through all commands
                      and try it in your own terminal{" "}
                      <a
                        href="https://ubuntu.com/tutorials/command-line-for-beginners#1-overview"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        - Intro to Command Line
                      </a>
                    </div>
                  </div>
                </div>
                <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
                  <div className="timeline__event__icon">
                    <img
                      src={require("../assets/steps/search.svg").default}
                      alt=""
                      className="lni-cake"
                    />
                  </div>
                  <div className="timeline__event__date">2</div>
                  <div className="timeline__event__content">
                    <div className="timeline__event__title">Step Two</div>
                    <div className="timeline__event__description">
                      <p>
                        When you're stuck or have any doubts, make sure to
                        Google for a solution
                      </p>
                    </div>
                  </div>
                </div>
                <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
                  <div className="timeline__event__icon">
                    <img
                      src={require("../assets/steps/msg.svg").default}
                      alt=""
                      className="lni-cake"
                    />
                  </div>
                  <div className="timeline__event__date">3</div>
                  <div className="timeline__event__content">
                    <div className="timeline__event__title">Step Three</div>
                    <div className="timeline__event__description">
                      If you still seem to have doubts, feel free to ask in the
                      #students channel
                    </div>
                  </div>
                </div>
                <div className="timeline__event animated fadeInUp timeline__event--type1">
                  <div className="timeline__event__icon">
                    <img
                      src={require("../assets/steps/tree.svg").default}
                      alt=""
                      className="lni-cake"
                    />
                  </div>
                  <div className="timeline__event__date">4</div>
                  <div className="timeline__event__content">
                    <div className="timeline__event__title">Step Four</div>
                    <div className="timeline__event__description">
                      Once you've completed the course, prepare a directory
                      structure in your home directory as shown in the image
                      below
                      <br></br>
                      <br />
                      <a href="#step4">see screenshot ↓</a>
                    </div>
                  </div>
                </div>
                <div className="timeline__event animated fadeInUp timeline__event--type2">
                  <div className="timeline__event__icon">
                    <img
                      src={require("../assets/steps/pencil.svg").default}
                      alt=""
                      className="lni-cake"
                    />
                  </div>
                  <div className="timeline__event__date">5</div>
                  <div className="timeline__event__content">
                    <div className="timeline__event__title">Step Five</div>
                    <div className="timeline__event__description">
                      Replace the directory names in the image with your
                      details, see example image below<br></br>
                      <br />
                      <a href="#step5">see screenshot ↓</a>
                    </div>
                  </div>
                </div>
                <div className="timeline__event animated fadeInUp timeline__event--type3">
                  <div className="timeline__event__icon">
                    <img
                      src={require("../assets/steps/tree.svg").default}
                      alt=""
                      className="lni-cake"
                    />
                  </div>
                  <div className="timeline__event__date">6</div>
                  <div className="timeline__event__content">
                    <div className="timeline__event__title">Step Six</div>
                    <div className="timeline__event__description">
                      Do a 'tree Gtech-Mulearn' from your home directory to
                      obtain the above directory structure and take a screenshot
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
                  <div className="timeline__event__date">7</div>
                  <div className="timeline__event__content">
                    <div className="timeline__event__title">Step Seven</div>
                    <div className="timeline__event__description">
                      Post a message on <b>#students</b> channel with the
                      screenshot with hashtag <b>#ge-intro-to-command-line</b>{" "}
                      (see example message below)
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.screenshots}>
                <p id="step4" className={styles.ss_title}>
                  Step 4 - Screenshot
                </p>
                <img
                  src="https://mulearn.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F8e0bf7fa-faaa-4f39-85f5-22a806c58820%2Fcommand-line-tree.png?table=block&id=2dd20cc4-70c5-45e9-9074-18706a4a18e8&spaceId=be508055-0311-452f-8715-e58ce6ed999f&width=420&userId=&cache=v2"
                  alt=""
                />

                <p id="step5" className={styles.ss_title}>
                  Step 5 - Screenshot
                </p>
                <img
                  src="https://mulearn.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F45944188-af4d-4c30-bc5f-e9cdf37ff88a%2Fcommand-line-tree-example.png?table=block&id=68f01d56-ef91-41d7-9955-93ca32f1f55e&spaceId=be508055-0311-452f-8715-e58ce6ed999f&width=410&userId=&cache=v2"
                  alt=""
                />
              </div>
            </div>
            <ExampleMsg
             hashtag="#ge-intro-to-command-line"
              firstLine="Hey! I've completed the Intro to Command Line course. I'm a command line Ninja!"
              linkText=""
              img="https://mulearn.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F451e8af7-8155-41fd-a608-6284cfd1b82c%2Fcommand-line-tree-example_(1).png?table=block&id=576fbb3b-f951-4108-b233-259a90e1f76a&spaceId=be508055-0311-452f-8715-e58ce6ed999f&width=410&userId=&cache=v2"
              imgMaxWidth={300}
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default IntroToCommandLine;
