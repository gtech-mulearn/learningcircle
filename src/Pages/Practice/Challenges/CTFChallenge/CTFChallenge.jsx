import React from "react";
import Navbar from "../../../../Components/Navbar/Navbar";
import Footer from "../../../../Components/Footer/Footer";
import ExampleMsg from "../../../../Components/ExampleMsg/ExampleMsg";
import styles from "./CTFChallenge.module.css";
import { Link } from "react-router-dom";

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
                Get ready to gear up your skills and machines on March 12 to win
                the 𝐇𝐚𝐜𝐤𝐨𝐮𝐭 𝐂𝐓𝐅⛳, organized by GTech µLearn in association with
                Nixiebytes, Riglabs and Lyminal space. The only thing you need
                to do to secure your entry is to crack this preliminary task
              </p>
              <p className={styles.late_date}>
                Late Date of Submission: 4th March 2023
              </p>
              <div className={styles.buttons}>
                <a
                  href="https://airtable.com/shruzfIc8SR4BLCg2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className={styles.joinchallenge}>Register</button>
                </a>
                <a
                  href="https://forms.gle/MTgBoNJd7RMhs3yc8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
          </div>

          <div className={styles.resource_materials}>
            <div className={styles.rm_texts}>
              <p className={styles.rm_heading}>Resource Materials</p>
              <p className={styles.rm_content}>
                If in case you need more information regarding the bootcamps and
                on how to complete it. Checkout these videos and page.
              </p>
            </div>
            <br />
            <div className={styles.videos_container}>
              <div className={styles.bootcamp}>
                <p className={styles.b_heading}>Capture the Flag</p>
                <p className={styles.b_tagline}>
                  Pentesting is a hard thing. It's even harder to figure out how
                  to get started on this journey. This workshop is aimed toward
                  absolute beginners and to give them an easy understanding
                  learning path.
                </p>

                <Link to="/bootcamps/ctf">
                  <button className={styles.b_button}>View Details</button>
                </Link>
              </div>
              <div className={styles.video}>
                <iframe
                  className={styles.ytvideo}
                  src="https://www.youtube.com/embed/videoseries?list=PLJSAUrkqv_1kNQW0viwTcTuBKdSb7OaoN"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CTFChallenge;
