import React, { useEffect, useState } from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";

import styles from "./Home.module.css";
import learningcircles from "./assets/learningcircles.jpg";

import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { Link } from "react-router-dom";
import Modal from "@mui/material/Modal";

const Home = ({
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
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [teams, setTeams] = useState("");
  const [options, setOptions] = useState("");

  const [members, setMembers] = useState("");

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
          console.log(response.data.data.members);
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
          console.log(error);
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
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Members in your Circle
                </Typography>

                {members.map((member) => (
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {member}.
                  </Typography>
                ))}
              </Box>
            </Modal>
          </div>
        )}

        <div className={styles.body_container}>
          <img src={learningcircles} alt="" className={styles.mimage} />

          <div className={styles.fsview}>
            <p className={styles.fsheading}>µlearn Learning Circles</p>
            <p className={styles.fstagline}>
              An informal mechanism for bringing together learners who are
              interested in the same topic from across different fields and
              disciplines. A fantastic way to spend a small amount of time
              learning about new things with a group of people with same
              interests!
            </p>
            <Link to={`/create`}>
              <button className={styles.fscreate}>Create</button>
            </Link>
            <Link to={`/join`}>
              <button className={styles.fsjoin}>Join</button>
            </Link>
          </div>
          <div className={styles.form}>
            <div className={styles.formheading}>
              {/* <hr className={styles.line} /> */}
              <p className={styles.fhtext}>Find Existing Circles</p>
              <p className={styles.fhcontent}>
                If incase you don't know your learning circle code for joining
                the circle. You could fill in below details you find the right
                circle
              </p>
              {/* <hr className={styles.line} /> */}
            </div>
            <div className={styles.iview}>
              <p className={styles.iheading}>What is your District ?</p>
              <p className={styles.itext}>
                There can be multiple learning circles already existing in your
                district or even in your own college. Select your district and
                let check them out!.
              </p>
              <Box sx={{ minWidth: 300, maxWidth: 300, margin: 1.5 }}>
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
                    {districts.map((district) => (
                      <MenuItem value={district}>{district}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </div>

            {interests && district && (
              <div className={styles.iview}>
                <p className={styles.iheading}>What is your Interest.</p>
                <p className={styles.itext}>
                  Alright, So you are from {district}. We have several interest
                  groups here at Mulearn for you to join. Kindly select one.
                </p>
                <Box sx={{ minWidth: 300, margin: 1.5 }}>
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
                        <MenuItem value={interest.id}>
                          {interest.title}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
              </div>
            )}

            {colleges && interest && (
              <div className={styles.iview}>
                <p className={styles.iheading}>What is your Instution Name?</p>
                <p className={styles.itext}>
                  One last Question. Select your institution name from the below
                  list so that we could filter our data and show the results for
                  you.
                </p>
                <Box sx={{ minWidth: 300, maxWidth: 300, margin: 1.5 }}>
                  <Autocomplete
                    id="grouped-demo"
                    options={options.sort(
                      (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
                    )}
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
              </div>
            )}

            <div className={styles.circles}>
              {teams.length > 0 &&
                teams.map((team) => (
                  <Card sx={{ minWidth: 275, margin: 3 }}>
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        Interest Group: {interest}
                      </Typography>
                      <Typography variant="h5" component="div">
                        Circle Code: {team.code}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Circle Lead: {team.lead}
                      </Typography>
                      <Typography variant="body2">
                        Member Count: {team.count}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Link to={`/join`}>
                        <Button onClick={() => setCode(team.code)} size="small">
                          Join Group Now!
                        </Button>
                      </Link>
                      <Button
                        onClick={() => {
                          setCode(team.code);
                          handleOpen();
                        }}
                        size="small"
                      >
                        View Members
                      </Button>
                    </CardActions>
                  </Card>
                ))}

              {college && teams.length === 0 && (
                <>
                  <p className={styles.notfound}>
                    It seems there is <span>No Learning Cirlces</span> in your
                    college. <span> Come Lets Create One.</span>
                  </p>
                  <Link to={`/create`}>
                    <button className={styles.fscreate1}>Create</button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        <div className={styles.body_container}>
          <img src={learningcircles} alt="" className={styles.mimage} />

          <div className={styles.fsview}>
            <p className={styles.fsheading}>µlearn Learning Circles</p>
            <p className={styles.fstagline}>
              An informal mechanism for bringing together learners who are
              interested in the same topic from across different fields and
              disciplines. A fantastic way to spend a small amount of time
              learning about new things with a group of people with same
              interests!
            </p>
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
  }
};

export default Home;
