import React from "react"
import styles from "./AI.module.css"

import Navbar from "../../../Components/Navbar/Navbar"
import Footer from "../../../Components/Footer/Footer"

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
                Heard of the many AI writing tools and wondered how they work?
                This weekend build features exactly that using GPT-3 and Open
                AI. You'll then deploy the app to show off to your friends!
              </p>
              <p className={styles.officehrs}>
                <span>Office Hours : </span> Thursday 09:00PM @ Discord Lobby
              </p>
              <p className={styles.officehrs}>
                <span>Think Tank Meet : </span> Tuesday 09:00 PM @ Google Meet
              </p>

              <a
                href="https://airtable.com/shrEwzetTRedLVAJS"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.atag}
              >
                <button className={styles.register}>Register Now</button>
              </a>
            </div>
            <div className={` select-none ${styles.fv_image}`}>
              <img
                src="/assets/bootcamp/ai/fvimg.gif"
                alt=""
                className={styles.fv_img}
              />
            </div>
          </div>
        </div>
        <div className={styles.second_view_container}>
          <p className={styles.sv_header}>Practice AI</p>
          <p className={styles.sv_content}>
            In this bootcamp we introduce you to concepts of Artificial
            Intelligence and Machine Learning via BuildSpace
          </p>
          <div className={styles.second_view}>
            <div className={styles.steps}>
              <div className="timeline-container">
                <div className="timeline">
                  <div className="timeline__event animated fadeInUp delay-2s timeline__event--type6">
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
                        Go to{" "}
                        <a href="https://buildspace.so/builds/ai-writer">
                          https://buildspace.so/builds/ai-writer
                        </a>{" "}
                        and create an account on <b>buildspace</b>. The Bootcamp
                        is divided into 4 phases, and upon completing each
                        stage, you will be directed to share your submission on
                        Twitter and LinkedIn ( Let the world know of your
                        progress)
                      </div>
                    </div>
                  </div>
                  <div className="timeline__event animated fadeInUp delay-1s timeline__event--type6">
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
                        The 1st stage of the boot-camp involves{" "}
                        <b>creating your first ML Model</b>. <br />
                        Once you’ve completed the stage and shared it on your
                        socials as directed, post the links in the <b>
                          #ai
                        </b>{" "}
                        channel of the μLearn Discord server with the hashtag{" "}at first
                        <b>#cl-buildspace-ai-1</b> to avail{" "}
                        <b>200 Karma points</b>
                      </div>
                    </div>
                  </div>
                  <div className="timeline__event animated fadeInUp timeline__event--type6">
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
                        The 2nd stage of the boot-camp involves{" "}
                        <b>setting up your own GPT-3 Writer</b>. <br />
                        Once you’ve completed the stage and shared it on your
                        socials as directed, post the links in the <b>
                          #ai
                        </b>{" "}
                        channel of the μLearn Discord server with the hashtag{" "}first 
                        <b>#cl-buildspace-ai-2</b> to avail{" "}
                        <b>200 Karma points</b>
                      </div>
                    </div>
                  </div>
                  <div className="timeline__event animated fadeInUp delay-3s timeline__event--type6">
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
                        The 3rd stage of the boot-camp involves{" "}
                        <b>building a chrome extension to write anywhere</b>.{" "}
                        <br />
                        Once you’ve completed the stage and shared it on your
                        socials as directed, post the links in the <b>
                          #ai
                        </b>{" "}
                        channel of the μLearn Discord server with the hashtag{" "}
                        <b>#cl-buildspace-ai-3</b> to avail{" "}
                        <b>200 Karma points</b>
                      </div>
                    </div>
                  </div>
                  <div className="timeline__event animated fadeInUp delay-3s timeline__event--type6">
                    <div className="timeline__event__icon">
                      <img
                        src={require("../assets/steps/check.svg").default}
                        alt=""
                      />
                    </div>
                    <div className="timeline__event__date">5</div>
                    <div className="timeline__event__content">
                      <div className="timeline__event__title">Step Five</div>
                      <div className="timeline__event__description">
                        The final stage of the boot-camp involves{" "}
                        <b>adding final touches to your application</b>. <br />
                        Once you’ve completed the stage and shared it on your
                        socials as directed, post the links in the <b>
                          #ai
                        </b>{" "}
                        channel of the μLearn Discord server with the hashtag{" "} first
                        <b>#cl-buildspace-ai-4</b> to avail{" "}
                        <b>200 Karma points</b>
                      </div>
                    </div>
                  </div>
                  <div className="timeline__event animated fadeInUp timeline__event--type6">
                    <div className="timeline__event__icon">
                      <img
                        src={require("../assets/steps/html-tag.svg").default}
                        alt=""
                        className="lni-cake"
                      />
                    </div>
                    <div className="timeline__event__date"></div>
                    <div className="timeline__event__content">
                      <div className="timeline__event__title">Bonus Step</div>
                      <div className="timeline__event__description">
                        To receive additional karma points, list any Chrome
                        extensions you have built either on Product Hunt or the
                        Chrome Extension webstore and share the link in the{" "}
                        <b>#ai </b>channel on the μLearn Discord server using
                        the hashtag  <b>#cl-buildspace-ai-bonus</b> first to earn a
                        bonus <b>200 Karma points</b> Please note that hosting
                        the Chrome extension is not part of the final chapter,
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
  )
}

export default AI
