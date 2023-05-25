import React, { useState, useEffect } from "react";
import styles from "./IGBootcamp.module.css";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";

import { useParams } from "react-router-dom";

const IGBootcamp = () => {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    const dataVar = require(`./data/${id}.json`);
    setData(dataVar);
  }, [id]);

  const boldTextBetweenHashtagAndSpace = (text) => {
    const pattern = /#([^ ]+)/g;
    const boldText = text.replace(pattern, (match, word) => `<b>#${word}</b>`);
    return <div dangerouslySetInnerHTML={{ __html: boldText }} />;
  };

  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>
                Android Basics with <span> Compose</span>
              </p>
              <p className={styles.fv_content}>
                In this course, you'll learn the basics of building Android apps
                with Jetpack Compose, the new UI toolkit for building Android
                apps. Along the way, you'll develop a collection of apps to
                start your journey as an Android developer.
                <br />
              </p>
              <p className={styles.late_date}>
                Get 1200 Karma Points on Course Completion
              </p>
              <br />
              <a
                href="https://developer.android.com/courses/android-basics-compose/course"
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
              <p className={styles.sv_heading}>How to Complete the Course?</p>
            </div>
          </div>

          <div className={styles.steps}>
            <div className="timeline-container">
              <div className="timeline">
                {data &&
                  data.map((item, index) => (
                    <div className="timeline__event animated fadeInUp timeline__event--type1">
                      <div className="timeline__event__icon">
                        <img
                          src={
                            require("../assets/steps/freecodecamp.svg").default
                          }
                          alt=""
                        />
                      </div>
                      <div className="timeline__event__date">{item.slno}</div>
                      <div className="timeline__event__content">
                        <div className="timeline__event__title">
                          {item.step}
                        </div>
                        <div className="timeline__event__description">
                          {boldTextBetweenHashtagAndSpace(item.description)}
                        </div>
                        <br />
                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Click Here: Resource Link
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className={styles.sample_container}>
              <p className={styles.sample_header}>Example Message</p>
              <p className={styles.sample_message}>
                <b>&nbsp;#cl-android-unit1</b>
                <br />
                Hey, I have completed the 1st unit of the Android Basics with
                Compose track.
                <br /> Here's my Google Developer Profile :&nbsp;
                <a href="https://g.dev/vinubalagopalap">
                  https://g.dev/vinubalagopalap
                </a>
              </p>
              <img
                src="/assets/challenge/google-developer.png"
                alt="google developer profile"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default IGBootcamp;
