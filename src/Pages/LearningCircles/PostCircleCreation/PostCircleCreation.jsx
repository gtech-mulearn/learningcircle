import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./PostCircleCreatio.module.css";

import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";

import confetti from "canvas-confetti";
import axios from "axios";

const PostCircleCreation = ({ create, wlink, join }) => {
  const { id } = useParams();
  const [circledata, setCircleData] = useState();
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/team/${
          join.code || create.code || id
        }`
      )
      .then(function (response) {
        confetti();
        setCircleData(response.data.data);
      })
      .catch(function (error) {});
  }, [id]);

  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.view_container}>
          <div className={styles.view}>
            <div className={styles.v_texts}>
              <p className={styles.v_heading}>
                <span>Congratulation </span>
                {id}
              </p>
              <p className={styles.v_content}>
                Congratulations! Your learning circle has been successfully
                created on MuLearn. You can now invite others to join your
                learning circle, and use MuLearn's resources to facilitate your
                learning sessions. Make sure to set goals and create a schedule
                for your learning sessions, and share resources and knowledge
                with other members.
              </p>
              <a href={wlink} target="_blank" rel="noopener noreferrer">
                <button className={styles.button}>Join Whatsapp Group</button>
              </a>
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
                Since you've made Joined learning circle, follow the steps below
                to find out what you need to do next.
              </p>
            </div>
          </div>
          {circledata && (
            <div className={styles.steps_view}>
              <div className={styles.ssv_texts}>
                <p className={styles.ssv_heading}>
                  <span>Invite</span> Your Peers
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
                    <span>Circle Name:</span> {id}
                  </p>
                  <p className={styles.circle_interest}>
                    <span>Interest Group: </span>
                    {circledata.interest}
                  </p>
                  {create && create.passcode && (
                    <p className={styles.circle_team_pass}>
                      <span>Team Passcode: </span> {create.passcode}
                    </p>
                  )}
                  <p className={styles.circle_lead}>
                    <span>Team Lead:</span> {circledata.members[0]}
                  </p>
                  <p className={styles.circle_college}>
                    <span>College Name:</span> {circledata.college.name}
                  </p>
                  {circledata.meet_place !== "No Data" && (
                    <p className={styles.circle_college}>
                      <span>Meet Place</span> {circledata.meet_place}
                    </p>
                  )}
                  {circledata.meet_time !== "No Data" && (
                    <p className={styles.circle_college}>
                      <span>Meet Time:</span> {circledata.meet_time}
                    </p>
                  )}

                  <button
                    onClick={() =>
                      navigator.clipboard.writeText(
                        `https://learn.mulearn.org/join/${id}`
                      )
                    }
                    className={styles.button}
                  >
                    Copy Invite Link
                  </button>
                </div>
              </div>
            </div>
          )}
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
                Join <span>Whatsapp Group</span>
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
              <a href={wlink} target="_blank" rel="noopener noreferrer">
                <button className={styles.button}>Join Whatsapp Group</button>
              </a>
            </div>
          </div>
          <div className={styles.steps_view}>
            <div className={styles.ssv_texts}>
              <p className={styles.ssv_heading}>
                Start <span>Learning</span>
              </p>
              <p className={styles.ssv_content}>
                Check out the free learning resources for your interest group
                and start learning them with your circle! There is a wide range
                of courses available, from basics to advanced, and it's a great
                way to gain new knowledge, skills and karma points with the
                support of your peers.
                <br />
                <br />
                Join in on the regularly scheduled office hours at the mulearn
                discord server if you have any questions or need mentor help.
              </p>
              {circledata && (
                <Link to={`/${circledata.interest}`}>
                  <button className={styles.button}>Checkout Resources</button>
                </Link>
              )}
            </div>

            <div className={styles.v_image}>
              <img
                src="/assets/postcirclecreation/learning.gif"
                alt=""
                className={styles.v_img}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PostCircleCreation;
