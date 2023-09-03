import React, { useEffect, useState } from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";

import styles from "./Home.module.css";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import axios from "axios";

import Modal from "@mui/material/Modal";

import BeagleSecurity from "./assets/Others/BeagleSecurity.png";
import FoxLabs from "./assets/Others/FoxLabs.png";
import Pygrammers from "./assets/Others/Pygrammers.png";

import illustrations from "./assets/illustrations.png";
import InterestCard from "../../../Components/InterestCard/InterestCard";

import InterestGroups from "./data.js";
import Preloader from "../../../Components/Preloader/Preloader";

const Home = ({
  backenderr,
  code,
  setCode,
  districts,
  setDistrict,
  colleges,
  setCollege,
  district,
  college,
  interests,
  setInterest,
  interest,
}) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: "5px",
    p: 4,
  };

  const [teams, setTeams] = useState("");
  const [options, setOptions] = useState("");

  const [members, setMembers] = useState("");
  const [place, setPlace] = useState("No Data");
  const [time, setTime] = useState("No Data");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (code) {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/team/${code}`)
        .then(function (response) {
          setMembers(response.data.data.members);
        })
        .catch(function (error) {
          // console.log(error);
        });
    }
  }, [code]);

  useEffect(() => {
    if (colleges) {
      setOptions(
        colleges.map((option) => {
          const firstLetter = option.name[0].toUpperCase();
          return {
            firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
            ...option,
          };
        })
      );
    }
  }, [colleges]);

  useEffect(() => {
    if (college && interest) {
      axios
        .get(
          `${process.env.REACT_APP_BACKEND_URL}/teams/${college}/${interest}`
        )
        .then(function (response) {
          setTeams(response.data.data);
        })
        .catch(function (error) {
          // console.log(error);
        });
    }
  }, [college, interest]);

  if (districts) {
    return (
      <>
        <Navbar />

        {members && (
          <div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  className={styles.modaltext}
                >
                  Members in your Circle
                </Typography>

                {members.map((member, key) => (
                  <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                    {key + 1}). {member}
                  </Typography>
                ))}
                <br />
                {(place !== "No Data" || time !== "No Data") && (
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    className={styles.modaltext}
                  >
                    Circle Details
                  </Typography>
                )}
                {place !== "No Data" && (
                  <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                    Meet Place: {place}
                  </Typography>
                )}
                {time !== "No Data" && (
                  <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                    Meet Time: {time}
                  </Typography>
                )}
              </Box>
            </Modal>
          </div>
        )}

        <div className={styles.body_container}>
          <div class={styles.first_section}>
            <div class={styles.fstexts}>
              <p class={styles.fsheading}>
                Introducing <span> µLearn Learning Circles</span>
              </p>
              <p class={styles.fssheading}>
                Android and Web Development, IoT, CyberSecurity and
                <span> much more....</span>
              </p>
              <p class={styles.fstagline}>
                An informal mechanism for bringing together learners who are
                interested in the same topic from across different fields and
                disciplines. A fantastic way to spend a small amount of time
                learning about new things with a group of people with same
                interests!
              </p>

              <div class={styles.supporters}>
                <span>Supported By </span>

                <div className={styles.s_images}>
                  <img
                    src={BeagleSecurity}
                    alt="Beagle Security"
                    class={styles.supporter}
                  />
                  <img src={FoxLabs} alt="" class={styles.supporter} />
                  <img
                    src={Pygrammers}
                    alt="Pygrammers"
                    class={styles.supporter}
                  />
                </div>
              </div>

              <div class={styles.buttons}>
                <a
                  href="https://app.mulearn.org/dashboard/learning-circle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button class={styles.fsbtn}>Join/Create Circles</button>
                </a>
              </div>
            </div>

            <div class={styles.fsimage}>
              <img src={illustrations} alt="" class={styles.fs_img} />
            </div>
          </div>
        </div>

        <div className={styles.secondsection}>
          <div className={styles.fssheading1}>
            <span>Existing</span> Interest Groups
          </div>
          <div className={styles.fsstagline}>
            Learning things for which you are curious is interesting, right?
            What about learning the same thing along with a group of like-minded
            peers and mentors, Much more interesting, right? Join in Now and
            Start Learning!
          </div>
          <div className={styles.cards_container}>
            {InterestGroups.map((InterestGroup) => (
              <InterestCard
                id={InterestGroup.id}
                interestgroup={InterestGroup.interestgroup}
                interestgroupdescription={
                  InterestGroup.interestgroupdescription
                }
                officetime={InterestGroup.officetime}
              />
            ))}
            <div class={styles.icard}>
              <div class={styles.icard_text}>
                <p class={styles.icardheading}>Interest Group Request Form</p>
                <p class={styles.icardcontent}>
                  Your Interest Group is not listed there. No worries, you can
                  request the formation of a new Interest Group. We will analyse
                  it from our perspective and see whether there is a majority
                  for a certain interest. It will be made available with all of
                  the necessary resources.
                </p>
                {/* <p class={styles.icardcontent}>Office Hours: {officetime}</p> */}

                <a
                  href="https://airtable.com/shriAaNO6q4cQzKKl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button class={styles.icardbtn}>Submit Request</button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  } else if (backenderr) {
    return (
      <>
        <Navbar />
        <div className={styles.body_container}>
          <div className={styles.fsview}>
            <div className={styles.backenderror}>
              <p className={styles.errorheading}>
                Encountered Technical Difficulty
              </p>
              <p className={styles.errortext}>
                We are really sorry for the inconvience caused. Since we are
                experiencing some technical difficulties we kindly request you
                to check back again later or reload the page again.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Preloader />
        </Box>
      </>
    );
  }
};

export default Home;
