import React, { useEffect, useState } from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";

import styles from "./Home.module.css";

import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { Link } from "react-router-dom";
import Modal from "@mui/material/Modal";

import BeagleSecurity from "./assets/Others/BeagleSecurity.png";
import FoxLabs from "./assets/Others/FoxLabs.png";
import Pygrammers from "./assets/Others/Pygrammers.png";

import illustrations from "./assets/illustrations.png";
import InterestCard from "../../../Components/InterestCard/InterestCard";

import Preloader from "../../../Components/Preloader/Preloader";

import getInterestGroupsData from "../../InterestGroups/Utils/getInterestGroupsData";

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
          console.log(error);
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
  const [summary, setSummary] = useState([])

  useEffect(() => {
    if (!summary.length)
      getInterestGroupsData(summary, undefined, setSummary)
  }, [summary])
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
          <div className={styles.first_section}>
            <div className={styles.fstexts}>
              <p className={styles.fsheading}>
                Introducing <span> µLearn Learning Circles</span>
              </p>
              <p className={styles.fssheading}>
                Android and Web Development, IoT, CyberSecurity and
                <span> much more....</span>
              </p>
              <p className={styles.fstagline}>
                An informal mechanism for bringing together learners who are
                interested in the same topic from across different fields and
                disciplines. A fantastic way to spend a small amount of time
                learning about new things with a group of people with same
                interests!
              </p>

              <div className={styles.supporters}>
                <span>Supported By </span>

                <div className={styles.s_images}>
                  <img
                    src={BeagleSecurity}
                    alt="Beagle Security"
                    className={styles.supporter}
                  />
                  <img src={FoxLabs} alt="" className={styles.supporter} />
                  <img
                    src={Pygrammers}
                    alt="Pygrammers"
                    className={styles.supporter}
                  />
                </div>
              </div>

              <div className={styles.buttons}>
                <Link to={`/create`}>
                  <button className={styles.fsbtn}>Create Circles</button>
                </Link>
                <Link to={`/join`}>
                  <button className={styles.fsobtn}>Join Existing Circles</button>
                </Link>
              </div>
            </div>

            <div className={styles.fsimage}>
              <img src={illustrations} alt="" className={styles.fs_img} />
            </div>
          </div>

          <div className={styles.secondsection}>
            <div className={styles.fssheading1}>
              <span>Search</span> Existing Learning Circles
            </div>
            <div className={styles.fsstagline}>
              µLearn currently has multiple active learning circles under
              several interest groups. Fill in the following data to find out
              existing learning circles near you so you can also join in and
              learn.
            </div>
          </div>

          <div className={styles.form}>
            <Box sx={{ minWidth: 300, maxWidth: 300, marginY: 1.5 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Select District
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Select District"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                >
                  {districts.map((district, index) => (
                    <MenuItem key={index} value={district}>{district}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            {interests && district && (
              <Box sx={{ minWidth: 300, maxWidth: 300, marginY: 1.5 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Select Interest Group
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Select College"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                  >
                    {interests.map((interest) => (
                      <MenuItem value={interest.id}>{interest.title}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            )}

            {colleges && interest && options && (
              <Box sx={{ minWidth: 300, maxWidth: 300, marginY: 1.5 }}>
                <Autocomplete
                  id="grouped-demo"
                  options={
                    options &&
                    options.sort(
                      (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
                    )
                  }
                  isOptionEqualToValue={(option, value) =>
                    option.value === value.value
                  }
                  groupBy={(option) => option.firstLetter}
                  getOptionLabel={(option) => option.name}
                  onChange={(event, newValue) => {
                    setCollege(newValue.code);
                  }}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Select College" />
                  )}
                />
              </Box>
            )}
          </div>
        </div>
        <div className={styles.circles_cointainer}>
          {teams.length > 0 && (
            <div className={styles.thirdsection}>
              <div className={styles.tssheading1}>
                <span>Existing </span>Learning Circles
              </div>
              {/* <div className={styles.tsstagline}>
                These are the existing learning circles which are present in
                your campus. You contact the circle lead if you are interested
                to join into the learning circles. If you are intersted to
                create a learning circle. <a href="/create"> Click Here</a>
              </div> */}
            </div>
          )}
          <div className={styles.circles}>
            <>
              {teams.length > 0 &&
                teams.map((team) => (
                  <>
                    <div className={styles.circles_card}>
                      <div className={styles.circle_text}>
                        <p className={styles.interest}>Interest: {interest}</p>
                        <p className={styles.circle_name}>{team.code}</p>
                        <p className={styles.circle_lead}>Lead: {team.lead}</p>
                        <p className={styles.circle_member}>
                          Members: {team.count}
                        </p>
                        {team.meet_place !== "No Data" && (
                          <p className={styles.circle_member}>
                            Meet Place: {team.meet_place}
                          </p>
                        )}
                        {team.meet_time !== "No Data" && (
                          <p className={styles.circle_member}>
                            Meet Time: {team.meet_time}
                          </p>
                        )}
                      </div>
                      <div className={styles.buttons}>
                        <Link to={`/join`}>
                          <button
                            onClick={() => setCode(team.code)}
                            className={styles.join_circle}
                          >
                            Join Circle
                          </button>
                        </Link>
                        <button
                          onClick={() => {
                            setPlace(team.meet_place);
                            setTime(team.meet_time);
                            setCode(team.code);
                            handleOpen();
                          }}
                          className={styles.view_members}
                        >
                          View Members
                        </button>
                      </div>
                    </div>
                  </>
                ))}

              {teams.length > 0 && (
                <div className={styles.circles_card}>
                  <div className={styles.circle_text}>
                    <p className={styles.circle_name}>Create New Circle</p>
                    <p className={styles.circle_lead}>
                      Only the Team Lead is required to create the circle.
                    </p>
                    <br />
                    <p className={styles.circle_member}>
                      {" "}
                      Call in your friends and let's learn.
                    </p>
                  </div>

                  <div className={styles.buttons}>
                    <Link to={`/create`}>
                      <button className={styles.view_members}>
                        Create Circle Now!
                      </button>
                    </Link>
                  </div>
                </div>
              )}
            </>
          </div>

          {college && teams.length === 0 && (
            <div className={styles.no_circle}>
              <p className={styles.notfound}>
                It seems there is <span>No Learning Cirlces</span> in your
                college. <span> Come Lets Create One.</span>
              </p>
              <div className={styles.createbtnalign}>
                <Link to={`/create`}>
                  <button className={styles.createbtn}>Create Circles</button>
                </Link>
              </div>
            </div>
          )}
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
            {summary.map((ig, index) => (
              ig.parent === 'null' && <InterestCard
                key={index}
                id={ig?.code}
                interestgroup={ig?.heading}
                interestgroupdescription={
                  ig.desc
                }
                officetime={ig?.office_hour}
                officePlacc={ig?.office_place}
              />
            ))}
            <div className={styles.icard}>
              <div className={styles.icard_text}>
                <p className={styles.icardheading}>Interest Group Request Form</p>
                <p className={styles.icardcontent}>
                  Your Interest Group is not listed there. No worries, you can
                  request the formation of a new Interest Group. We will analyse
                  it from our perspective and see whether there is a majority
                  for a certain interest. It will be made available with all of
                  the necessary resources.
                </p>
                {/* <p className={styles.icardcontent}>Office Hours: {officetime}</p> */}

                <a
                  href="https://airtable.com/shriAaNO6q4cQzKKl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className={styles.icardbtn}>Submit Request</button>
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
