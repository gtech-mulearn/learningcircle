import React from "react";
import Navbar from "../../../../Components/Navbar/Navbar";
import Footer from "../../../../Components/Footer/Footer";
import ExampleMsg from "../../../../Components/ExampleMsg/ExampleMsg";
import styles from "./CTFChallenge.module.css";

const CTFChallenge = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>
                Hackout <span>Challenge</span>
              </p>
              <p className={styles.fv_content}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, eius ex. Dolores sint perspiciatis ex doloribus
                expedita non. Reprehenderit deleniti aliquam consequuntur vitae,
                fuga nisi.
              </p>
              <div className={styles.buttons}>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <button className={styles.joinchallenge}>Register</button>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <button className={styles.joinchallenge}>
                    Upload Solution
                  </button>
                </a>
              </div>
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
                      Download and Setup Kioptrix Level 1 Machine From Vulnhub.
                      <a
                        href="https://www.vulnhub.com/entry/kioptrix-level-1-1,22/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Click Here to Download.
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
                      Unbox it and prepare a penetration testing report as per
                      the given template.{" "}
                      <a
                        href="https://docs.google.com/document/d/1ilAUrZp_6SFi01XIm8GBnvNFYMpGIx0QnBqF8uRwTD4/edit"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Click Here to Read More
                      </a>
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
                      Submit your complete challenge files in the given google
                      form.{" "}
                      <a
                        href="https://forms.gle/MTgBoNJd7RMhs3yc8"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Click Here to Submit.
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ExampleMsg
              linkText="Hi! I've completed the Intro to Markdown course."
              link="https://github.com/Angelrose19/intro-to-markdown"
              hashtag="#ge-intro-to-markdown"
            />
          </div>

          <div className={styles.resource_materials}>
            
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CTFChallenge;
