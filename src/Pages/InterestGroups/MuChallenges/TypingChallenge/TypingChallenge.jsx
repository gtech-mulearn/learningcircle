import React from "react";
import Navbar from "../../../../Components/Navbar/Navbar";
import Footer from "../../../../Components/Footer/Footer";

import styles from "./TypingChallenge.module.css";

const TypingChallenge = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>
                <span>µLearn</span> Typing Challenge
              </p>
              <p className={styles.fv_content}>
                Learning to master the skill of typing is always an advantage.
                It enables a person to be much more productive and use their
                time efficiently and also increase the outlook of others on
                them.
              </p>
            </div>

            <div className={styles.fv_image}>
              <img
                src="/assets/challenge/typing.gif"
                alt="Group Learning Pic"
                className={styles.fv_img}
              />
            </div>
          </div>
        </div>
        <div className={styles.second_view_container}>
          <div className={styles.second_view}>
            <div className={styles.sv_texts}>
              <p className={styles.sv_heading}>How to do the challenge?</p>
              <p className={styles.sv_content}>
                Do you know, The faster you type, the faster you communicate
                with others. Let's work on our rapid fingers and earn some
                karma.
              </p>
            </div>
          </div>
          <div className={styles.steps}>
            <ol className={styles.steps_olist}>
              <li>
                Login to <a href="https://www.typingclub.com/">Typing Club</a>
              </li>
              <li>Start your typing lessons.</li>
              <li>
                Karma Points can be availed in 4 stages
                <ol className={styles.steps_olist_sub}>
                  <li>
                    Post the screenshot of your progress when you reach Level
                    126 in #students channel with hashtag{" "}
                    <b>#ge-typing-challenge-126 </b>
                    to avail <b>200 Karma Points</b>
                  </li>
                  <li>
                    Post the screenshot of your progress when you reach Level
                    285 in #students channel with hashtag{" "}
                    <b>#ge-typing-challenge-285 </b>
                    to avail <b>200 Karma Points</b>
                  </li>
                  <li>
                    Post the screenshot of your progress when you reach Level
                    460 in #students channel with hashtag{" "}
                    <b>#ge-typing-challenge-460 </b>
                    to avail <b>200 Karma Points</b>
                  </li>
                  <li>
                    Post the screenshot of your progress when you reach Level
                    685 in #students channel with hashtag{" "}
                    <b>#ge-typing-challenge-685 </b>
                    to avail <b>400 Karma Points</b>
                  </li>
                </ol>
              </li>
            </ol>

            <div className={styles.sample_container}>
              <p className={styles.sample_header}>Example Message and Image</p>
              <p className={styles.sample_message}>
                Hey! I've reached Typing Challenge Level 126. Here's my
                progress. #ge-typing-challenge-126
              </p>
              <img
                className={styles.sample_img}
                src="/assets/challenge/typingsample.webp"
                alt="pic"
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TypingChallenge;
