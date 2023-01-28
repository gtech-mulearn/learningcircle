import React from "react";
import styles from "./AI.module.css";

import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";

const AI = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>
                <span> AI </span> Bootcamp
              </p>
              <p className={styles.fv_content}>
                Heard of the many AI writing tools and wondered how they work? This weekend build features exactly that using GPT-3 and Open AI. You'll then deploy the app to show off to your friends!
              </p>
              <div class={styles.supporters}>
                <span>Supported By </span>
                <div className={styles.s_images}>
                  <a
                    href="  "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/assets/bootcamp/ai/buildspace.svg"
                      alt="buildspace"
                      className={`${styles.supporter} select-none`}
                      width="100%" height="100%"
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
            <div className={` select-none ${styles.fv_image}`}>
              <img
                src="/assets/bootcamp/ai/ai.webp"
                alt=""
                className={styles.fv_img}
              />
            </div>
          </div>
        </div>
        <div className={styles.second_view_container}>
          <p className={styles.sv_header}>Practice AI</p>
          <p className={styles.sv_content}>
            In this bootcamp we introduce you to concepts of Artificial Intelligence and Machine Learning via BuildSpace course <a href="https://buildspace.so/builds/ai-writer"><u> Intro to ML : Create an AI Writer w/ GPT3 </u></a>
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
                        Step 1
                      </div>
                      <div className="timeline__event__description">
                        <b>Program your AI model</b><br />
                        Complete and Share it in Twitter and Linkedin as directed at the end of each module.Then post both the links to the post (twitter and Linkedin) in <b> #ai-ml</b> channel of Gtech Mulearn Server to avail <b>200 karma points</b>
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
                        <b>SETUP YOUR OWN GPT-3 WRITER.</b><br />
                        Complete and Share it in Twitter and Linkedin as directed at the end of each module.Then post both the links to the post (twitter and Linkedin) in
                        <b> #ai-ml</b> channel of Gtech Mulearn Server to avail <b>200 karma points</b>
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
                        <b>BUILD CHROME EXTENSION TO WRITE ANYWHERE</b><br />
                        Complete and Share it in Twitter and Linkedin as directed at the end of each module.Then post both the links to the post (twitter and Linkedin) in
                        <b> #ai-ml</b> channel of Gtech Mulearn Server to avail <b>200 karma points</b>
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
                        <b>FINISHING TOUCH</b><br />
                        At the end host the webapp and share the link of your webapp in
                        <b> #ai-ml</b> channel of Gtech Mulearn Server to avail <b>200 karma points</b>
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
                    <div className="timeline__event__date"></div>
                    <div className="timeline__event__content">
                      <div className="timeline__event__title">Bonus</div>
                      <div className="timeline__event__description">
                        List the chrome extension you have built in Product hunt or Chrome Extension webstore to avail some extra karma
                        <br />
                        <b>NB: </b> Hosting the chrome extension is not in the final chapter. They only just ask you to do it.
                      </div>
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
  );
};


function card() {
  return (
    <div className="timeline__event animated fadeInUp timeline__event--type3">
      <div className="timeline__event__icon">
        <img
          src={require("../assets/steps/html-tag.svg").default}
          alt=""
          className="lni-cake"
        />
      </div>
      <div className="timeline__event__date"></div>
      <div className="timeline__event__content">
        <div className="timeline__event__title">Bonus</div>
        <div className="timeline__event__description">
          List the chrome extension you have built in Product hunt or Chrome Extension webstore to avail some extra karma
          <br />
          <b>NB: </b> Hosting the chrome extension is not in the final chapter. They only just ask you to do it.
        </div>
      </div>
    </div>)
}
export default AI;
