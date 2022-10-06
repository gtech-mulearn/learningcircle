import React from "react";
import Navbar from "../../../../Components/Navbar/Navbar";
import Footer from "../../../../Components/Footer/Footer";

import styles from "./MuLanding.module.css";
import MentorCard from "../../../../Components/MentorCard/MentorCard";

const MuLanding = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>
                Introducing <span>MuLearn</span> Challenges
              </p>
              <p className={styles.fv_content}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Distinctio culpa tempora, enim animi delectus dignissimos rerum
                autem atque tenetur expedita totam quisquam ab blanditiis natus!
              </p>
            </div>

            <div className={styles.fv_image}>
              <img
                src="/assets/challenge/mulanding.gif"
                alt="Mu Challenges"
                className={styles.fv_img}
              />
            </div>
          </div>
        </div>
        <div className={styles.second_view_container}>
          <div className={styles.second_view}>
            <div className={styles.sv_texts}>
              <p className={styles.sv_heading}>Existing Challenges</p>
              <p className={styles.sv_content}>
                Sounds Interesting? Come lets dive more deep into the challenge
                and see how it can be done easily.
              </p>
            </div>
            <div className={styles.mentor_container}>
              <div className={styles.mentors}>
                <MentorCard
                  name="3 Lakhs Buissness in Production"
                  designation="Learning by Solving challeges is much more interesting than simply learning them. Here we have a challenge to solve and if you are ready to learn, Then come let get three lakhs buissness into production."
                  mclink="/challenge/web"
                />
                <MentorCard
                  name="MuLearn Typing Challenge"
                  designation="Learning to master the skill of typing is always an advantage. It enables a person to be much more productive and use their time efficently and also increase the outlook of others on them."
                  mclink="/challenge/typing"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MuLanding;
