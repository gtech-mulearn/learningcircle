import React from "react";
import Footer from "../../../../Components/Footer/Footer";
import Navbar from "../../../../Components/Navbar/Navbar";
import styles from "./TrafficLightSimulation.module.css";

const TrafficLightSimulation = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>
                Traffic Light <span>Simulation </span>
              </p>
              <p className={styles.fv_content}>
                As children, we've always adored Traffic lights. Ever considered
                building a Traffic Light by yourself. In this Challenges, you
                will use TinkerCad to create a simulation of a Traffic Light
                Arduino project.
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
                      src={require("../assets/steps/freecodecamp.svg").default}
                      alt=""
                    />
                  </div>
                  <div className="timeline__event__date">1</div>
                  <div className="timeline__event__content">
                    <div className="timeline__event__title">Step One</div>
                    <div className="timeline__event__description">
                      Create a simulation of the following Arduino project in{" "}
                      <a
                        href="https://www.tinkercad.com/login"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Tinkercard
                      </a>
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
                      Build a traffic light controller with 3 LEDs (Red, Yellow,
                      Green). Each LED should light up one after the other after
                      a specified amount of time to emulate a traffic light.
                      <br />
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
                      A button should be connected to the Arduino to emulate a
                      “Pedestrian crossing” button that makes the traffic light
                      turn to Red on demand.
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
                      Submit the project link from Tinkercad in #task-dropbox
                      channel with the hashtag #ge-iot-traffic-light
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className={styles.callout}>
              Complete the full FreeCodeCamp Responsive Web Design Course and
              avail 400 karma points. Checkout{" "}
              <a href="https://learn.mulearn.org/web/core/1">
                https://learn.mulearn.org/web/core/1
              </a>
            </div> */}

            <div className={styles.sample_container}>
              <p className={styles.sample_header}>Example Message</p>
              <p className={styles.sample_message}>
                Submit the project link from Tinkercad in #task-dropbox channel with
                the hashtag #ge-iot-traffic-light at the beginning
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TrafficLightSimulation;
