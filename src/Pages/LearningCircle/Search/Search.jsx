import React, { useState, useEffect } from "react";
import Footer from "../../../Components/Footer/Footer";
import Navbar from "../../../Components/Navbar/Navbar";
import styles from "./Search.module.css";

import fvimg from "./assets/fvimg.png";

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

const Search = ({
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
  // eslint-disable-next-line no-unused-vars
  const [options, setOptions] = useState("");
  const [teams, setTeams] = useState("");

  // eslint-disable-next-line no-unused-vars
  const [members, setMembers] = useState("");

  // eslint-disable-next-line no-unused-vars
  const [open, setOpen] = React.useState(false);
  // eslint-disable-next-line no-unused-vars
  const handleOpen = () => setOpen(true);
  // eslint-disable-next-line no-unused-vars
  const handleClose = () => setOpen(false);

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

  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.search_container}>
          <div className={styles.first_view_container}>
            <div className={styles.first_view}>
              <div className={styles.fv_texts}>
                <p className={styles.fv_heading}>
                  Search µLearn <span> Learning Circles</span>
                </p>
                <p className={styles.fv_content}>
                  Learning things for which you are curious is interesting,
                  right? What about learning the same thing along with a group
                  of like-minded peers and mentors, Much more interesting,
                  right? Join in Now and Start Learning!
                </p>
                <div className={styles.form}>
                  {districts && (
                    <Box
                      sx={{
                        minWidth: 150,
                        maxWidth: 300,
                        marginY: 1.5,
                        marginRight: 1.5,
                      }}
                    >
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
                  )}

                  {interests && district && (
                    <Box
                      sx={{
                        minWidth: 150,
                        maxWidth: 300,
                        marginY: 1.5,
                        marginRight: 1.5,
                      }}
                    >
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
                  )}

                  {colleges && interest && (
                    <Box
                      sx={{
                        minWidth: 150,
                        maxWidth: 300,
                        marginY: 1.5,
                        marginRight: 1.5,
                      }}
                    >
                      {options && (
                        <Autocomplete
                          id="grouped-demo"
                          options={options.sort(
                            (a, b) =>
                              -b.firstLetter.localeCompare(a.firstLetter)
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
                      )}
                    </Box>
                  )}
                </div>
              </div>
              <div className={styles.fv_image}>
                <img src={fvimg} alt="" className={styles.fv_img} />
              </div>
            </div>
          </div>
          <div className={styles.circles_container}>
            {teams.length > 0 && (
              <div className={styles.thirdsection}>
                <div className={styles.tssheading1}>
                  <span>Existing </span>Learning Circles.
                </div>
                <div className={styles.tsstagline}>
                  These are the existing learning circles which are present in
                  your campus. You contact the circle lead if you are interested
                  to join into the learning circles. If you are intersted to
                  create a learning circle. <a href="/create"> Click Here</a>
                </div>
              </div>
            )}
            <div className={styles.circles}>
              <>
                {teams.length > 0 &&
                  teams.map((team) => (
                    <>
                      <div className={styles.circles_card}>
                        <div className={styles.circle_text}>
                          <p className={styles.interest}>
                            Interest: {interest}
                          </p>
                          <p className={styles.circle_name}>{team.code}</p>
                          <p className={styles.circle_lead}>
                            Lead: {team.lead}
                          </p>
                          <p className={styles.circle_member}>Members: 10</p>
                          <p className={styles.circle_place}>
                            Meet Place: {team.meet_place}
                          </p>
                          <p className={styles.circle_time}>
                            Meet Time: {team.meet_time}
                          </p>
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
              <>
                <p className={styles.notfound}>
                  It seems there is <span>No Learning Cirlces</span> in your
                  college. <span> Come Lets Create One.</span>
                </p>
                <Link to={`/create`}>
                  <button class={styles.createbtn}>Create Circles</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Search;
