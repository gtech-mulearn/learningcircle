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
  const [options, setOptions] = useState("");
  const [teams, setTeams] = useState("");

  const [members, setMembers] = useState("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                  fugit dolor rerum, incidunt magni voluptatibus commodi
                  expedita in repellat modi, blanditiis dolorem pariatur cumque
                  aliquid?
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
                  )}
                </div>
              </div>
              <div className={styles.fv_image}>
                <img src={fvimg} alt="" className={styles.fv_img} />
              </div>
            </div>
          </div>
          <div className={styles.circles_cointainer}>
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
                      <Card sx={{ minWidth: 300, maxWidth: 300, marginY: 1 }}>
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
                            <Button
                              onClick={() => setCode(team.code)}
                              size="small"
                            >
                              Join Group Now!
                            </Button>
                          </Link>
                          {/* <Button
                            onClick={() => {
                              setCode(team.code);
                              handleOpen();
                            }}
                            size="small"
                          >
                            View Members
                          </Button> */}
                        </CardActions>
                      </Card>
                    </>
                  ))}
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
