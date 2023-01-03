import React from "react";
import styles from "./PostCircleCreatio.module.css";

import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";

const PostCircleCreation = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.view_container}>
          <div className={styles.view}>
            <div className={styles.v_texts}>
              <p className={styles.v_heading}>
                <span>Learning Circle</span> Created
              </p>
              <p className={styles.v_content}>
                Congratulations! Your learning circle has been successfully
                created on MuLearn. You can now invite others to join your
                learning circle, and use MuLearn's resources to facilitate your
                learning sessions. Make sure to set goals and create a schedule
                for your learning sessions, and share resources and knowledge
                with other members.
              </p>
              <button className={styles.button}>Join Whatsapp Group</button>
            </div>
            <div className={styles.v_image}>
              <img
                src="/assets/postcirclecreation/fvimg.gif"
                alt=""
                className={styles.v_img}
              />
            </div>
          </div>
        </div>
        <div className={styles.second_view_container}>
          <div className={styles.second_view}>
            <div>
              <p className={styles.sv_heading}>
                Getting <span>Started</span>
              </p>
              <p className={styles.sv_content}>
                Since you've made your learning circle, follow the steps below
                to find out what you need to do next.
              </p>
            </div>
          </div>
          <div className={styles.steps_view}>
            <div className={styles.ssv_texts}>
              <p className={styles.ssv_heading}>
                Step 1: <span>Invite</span> Your Peers
              </p>
              <p className={styles.ssv_content}>
                learning circles can be a great way to learn and grow with
                others, and can help you stay motivated and accountable as you
                work towards your learning goals. So, the first thing you need
                to do is invite your friends to join your group.
                <br />
                <br />
                You can share you circle details along with your secret key to
                invite your friends.If you have any questions or need help
                getting started, don't hesitate to reach out to us.
              </p>
            </div>

            <div>
              <div className={styles.circle_details}>
                <p className={styles.circle_name}>
                  <span>Circle Name:</span> Learning Cirlce
                </p>
                <p className={styles.circle_interest}>
                  <span>Interest Group:</span> Web Development
                </p>
                <p className={styles.circle_team_pass}>
                  <span>Team Passcode: </span> 78945296
                </p>
                <p className={styles.circle_lead}>
                  <span>Team Lead:</span> Aswin Asok
                </p>
                <p className={styles.circle_college}>
                  <span>College Name:</span> Marian Engineering College
                </p>
                <button className={styles.button}>Copy Team Link</button>
              </div>
            </div>
          </div>
          <div className={styles.steps_view}>
            <div className={styles.v_image}>
              <img
                src="/assets/postcirclecreation/communcation.gif"
                alt=""
                className={styles.v2_img}
              />
            </div>

            <div className={styles.ssv_texts}>
              <p className={styles.ssv_heading}>
                Step 2: Join <span>Whatsapp Group</span>
              </p>
              <p className={styles.ssv_content}>
                To stay connected and receive updates, we encourage you to join
                our WhatsApp group. Simply click on the link provided below to
                be added to the group.
                <br />
                <br />
                We look forward to seeing you in the group and engaging in
                meaningful discussions and learning opportunities.
              </p>
              <button className={styles.button}>Join Whatsapp Group</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PostCircleCreation;
