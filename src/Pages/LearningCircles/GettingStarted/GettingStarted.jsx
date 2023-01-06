import React, { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import styles from "./GettingStarted.module.css";

import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";

import axios from "axios";

const GettingStarted = ({ create, wlink, join }) => {
  const { id } = useParams();
  const [circledata, setCircleData] = useState();
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/team/${
          join.code || create.code || id
        }`
      )
      .then(function (response) {
        setCircleData(response.data.data);
        setRedirect(false);
      })
      .catch(function (error) {
        console.log(error);
        setRedirect(true);
      });
  }, [id, create, join]);

  return (
    <>
      {redirect && <Navigate to={`/notfound`} replace={true} />}
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.view_container}>
          <div className={styles.view}>
            <div className={styles.v_texts}>
              <p className={styles.v_heading}>
                <span>Getting</span>&nbsp;Started
              </p>
              {create && create.code && (
                <p className={styles.v_content}>
                  Congratulations! Your learning circle has been successfully
                  created on µLearn. You can now invite others to join your
                  learning circle, and use µLearn's resources to facilitate your
                  learning sessions. Make sure to set goals and create a
                  schedule for your learning sessions, and share resources and
                  knowledge with other members.
                </p>
              )}
              {join && join.code && (
                <p className={styles.v_content}>
                  Congratulations on joining the learning circle on µLearn! You
                  can now use our resources to facilitate your learning sessions
                  and collaborate with other members. Be sure to set goals,
                  create a schedule, and share resources and knowledge with the
                  group. Let's work together to achieve our learning goals!
                </p>
              )}
              {!(create && create.code) && !(join && join.code) && (
                <p className={styles.v_content}>
                  Welcome to the learning circle on MuLearn! We're glad to have
                  you here as we work towards our learning goals together. You
                  can find resources and connect with other members on our
                  Discord server as you progress on your learning journey. We
                  hope you find value in our community and resources as we
                  strive for success. Let's get started!
                </p>
              )}
              {wlink && wlink.length > 0 && (
                <a href={wlink} target="_blank" rel="noopener noreferrer">
                  <button className={styles.button}>Join Whatsapp Group</button>
                </a>
              )}
              {!(wlink && wlink.length > 0) && circledata && (
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <button className={styles.button}>
                    Join Learning Circle
                  </button>
                </a>
              )}
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
          {wlink && wlink.length > 0 && (
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
                  To stay connected and receive updates, we encourage you to
                  join our WhatsApp group. Simply click on the link provided
                  below to be added to the group.
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
          )}

          <div className={styles.steps_viewss}>
            <div className={styles.reverse}>
              <div className={styles.ssv_texts}>
                <p className={styles.ssv_heading}>
                  Start <span>Learning</span>
                </p>
                <p className={styles.ssv_content}>
                  Check out the free learning resources for your interest group
                  and start learning them with your circle! There is a wide
                  range of courses available, from basics to advanced, and it's
                  a great way to gain new knowledge, skills and karma points
                  with the support of your peers.
                  <br />
                  <br />
                  Join in on the regularly scheduled office hours at the mulearn
                  discord server if you have any questions or need mentor help.
                </p>
                {circledata && (
                  <Link to={`/${circledata.interest}`}>
                    <button className={styles.button}>
                      Checkout Resources
                    </button>
                  </Link>
                )}
              </div>

              <div className={styles.v_image}>
                <img
                  src="/assets/postcirclecreation/learning.gif"
                  alt=""
                  className={styles.v3_img}
                />
              </div>
            </div>
          </div>

          <div className={styles.steps_view}>
            <div className={styles.v_image}>
              <img
                src="/assets/postcirclecreation/discord.gif"
                alt=""
                className={styles.v3_img}
              />
            </div>

            <div className={styles.ssv_texts}>
              <p className={styles.ssv_heading}>
                Join <span>Discord Server</span>
              </p>
              <p className={styles.ssv_content}>
                Welcome to µLearn! Join our Discord server to participate in
                events like the Inspiration Station Radio and Salt Mango Tree,
                connect with others, and earn karma points. We're a community of
                learners looking to support and grow with one another. We hope
                to see you there!
              </p>
              <a
                href="https://discord.mulearn.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={styles.button}>Join Discord Server</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GettingStarted;
