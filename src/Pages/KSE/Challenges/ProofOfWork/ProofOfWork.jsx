import React from "react";
import Footer from "../../../../Components/Footer/Footer";
import Navbar from "../../../../Components/Navbar/Navbar";
import styles from "./ProofOfWork.module.css";

import { useParams } from "react-router-dom";

import AIStructure from "../Data/ai";
import WebStructure from "../Data/web";

const ProofOfWork = () => {
  const { course, bootcamp, id } = useParams();
  const data = (function () {
    if (course === "ai") {
      return AIStructure;
    } else if (course === "web") {
      return WebStructure;
    }
  })();

  // To group the data to get the courseid from id
  const groupedData = data
    .filter((obj) => obj.bootcamp === bootcamp)
    .map((obj) => obj.courseid)
    .filter((value, index, self) => self.indexOf(value) === index);
  const courseid = groupedData[id];

  // To group the data according to bootcamp
  const courseGroup = data.filter(
    (obj) => obj.bootcamp === bootcamp && obj.courseid === courseid
  );

  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>{courseGroup[0].name}</p>
              <p className={styles.fv_content}>{courseGroup[0].proofOfWork}</p>

              {courseGroup[0].totalKarma ? (
                <p className={styles.karma_header}>
                  On Completion {courseGroup[0].totalKarma} Karma Points.
                </p>
              ) : (
                <br />
              )}
              {courseGroup[0].proofOfWorkLink && (
                <a
                  href={courseGroup[0].proofOfWorkLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className={styles.view_course}>Submit Work</button>
                </a>
              )}
            </div>

            <div className={styles.fv_image}>
              <img
                src="/assets/icourses/fvimg.gif"
                alt="Group Learning"
                className={styles.fv_img}
              />
            </div>
          </div>

          <div className={styles.second_view_container}>
            <div className={styles.second_view}>
              <div className={styles.sv_texts}>
                <p className={styles.sv_heading}>
                  Once <span>Completed</span>
                </p>
                <p className={styles.sv_content}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Alias amet est et debitis fuga quis voluptate officia
                  quibusdam deserunt perferendis ex quia nam rem nihil totam
                  dolore dolores, quasi hic?
                </p>
              </div>

              <div className={styles.sample_container}>
                <p className={styles.sample_header}>Example Message</p>
                <p className={styles.sample_message}>
                  {courseGroup[0].hashtags} Hey! I’ve completed the task in the
                  channel with the hashtag
                </p>
              </div>
            </div>
          </div>

          <div className={styles.third_view_container}>
            <div className={styles.third_view}>
              <div className={styles.sample_container}>
                <p className={styles.sv_heading}>
                  <span>Need </span> Help ?
                </p>
                <p className={styles.sample_message}>
                  If you are new to µLearn, do checkout
                  <a
                    href="https://mulearn.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    &nbsp;mulearn.org
                  </a>
                  and join us. Watch this video if you are confused with Discord
                  Onboarding.
                  <a
                    href="https://youtu.be/7Oj88zF2jY0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    &nbsp;Click Here to Watch
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProofOfWork;
