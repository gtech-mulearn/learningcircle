import React from "react";
import Footer from "../../../../Components/Footer/Footer";
import Navbar from "../../../../Components/Navbar/Navbar";
import styles from "./ProofOfWork.module.css";

import { useParams } from "react-router-dom";

import AIStructure from "../Data/ai";
import WebStructure from "../Data/web";
import AndroidStructure from "../Data/android";
import BlockchainStructure from "../Data/blockchain";
import CivilStructure from "../Data/civil";
import CybersecStructure from "../Data/cybersec";
import FlutterStructure from "../Data/flutter";
import IEStructure from "../Data/i&e";
import QAStructure from "../Data/qa";
import RustStructure from "../Data/rust";
import Animation3DStructure from "../Data/animation3d";

const ProofOfWork = () => {
  const { course, bootcamp, id, sid } = useParams();
  const data = (function () {
    if (course === "ai") {
      return AIStructure;
    } else if (course === "web") {
      return WebStructure;
    } else if (course === "android") {
      return AndroidStructure;
    } else if (course === "blockchain") {
      return BlockchainStructure;
    } else if (course === "civil") {
      return CivilStructure;
    } else if (course === "cybersec") {
      return CybersecStructure;
    } else if (course === "flutter") {
      return FlutterStructure;
    } else if (course === "i&e") {
      return IEStructure;
    } else if (course === "qa") {
      return QAStructure;
    } else if (course === "rust") {
      return RustStructure;
    } else if (course === "animation3d") {
      return Animation3DStructure;
    }
  })();

  const sindex = (function () {
    const i = sid ? sid : 0;
    return i;
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
              <p className={styles.fv_heading}>
                {courseGroup[sindex].name}
                {courseGroup[sindex].segments && (
                  <span> - {courseGroup[sindex].segments}</span>
                )}
              </p>
              <p className={styles.fv_content}>
                {courseGroup[sindex].proofOfWork}
              </p>

              {courseGroup[sindex].segmentKarma ? (
                <p className={styles.karma_header}>
                  On Completion {courseGroup[sindex].segmentKarma} Karma Points.
                </p>
              ) : (
                courseGroup[sindex].totalKarma && (
                  <p className={styles.karma_header}>
                    On Completion {courseGroup[sindex].totalKarma} Karma Points.
                  </p>
                )
              )}
              {courseGroup[sindex].proofOfWorkLink && (
                <a
                  href={courseGroup[sindex].proofOfWorkLink}
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
                  Course <span>Details</span>
                </p>
                {courseGroup[sindex].courseContent && (
                  <p className={styles.coursedetails}>
                    <span>Content : </span> {courseGroup[sindex].courseContent}
                  </p>
                )}
                <p className={styles.coursedetails}>
                  <span>Bootcamp : </span>{" "}
                  {courseGroup[sindex].bootcamp.charAt(0).toUpperCase() +
                    courseGroup[sindex].bootcamp.slice(1)}
                </p>
                {courseGroup[sindex].time && (
                  <p className={styles.coursedetails}>
                    <span>Time : </span> {courseGroup[sindex].time}
                  </p>
                )}

                {courseGroup[sindex].syllabus && (
                  <p className={styles.coursedetails}>
                    <span>Syllabus : </span>
                    {courseGroup[sindex].syllabus.replace(/\n/g, ", ")}
                  </p>
                )}
                {courseGroup[sindex].complexity && (
                  <p className={styles.coursedetails}>
                    <span>Complexity : </span>
                    {courseGroup[sindex].complexity}
                  </p>
                )}

                {courseGroup[sindex].courseLink && (
                  <a
                    href={courseGroup[sindex].courseLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className={styles.view_course}>Course Link</button>
                  </a>
                )}
              </div>
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
                  Hey! I’ve completed the task in the channel with the hashtag{" "}
                  <span>{courseGroup[sindex].hashtags} </span>
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
