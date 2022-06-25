import React, { useEffect, useState } from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";

import styles from "./Home.module.css";
import learningcircles from "./assets/learningcircles.jpg";

import Box from "@mui/material/Box";
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
import { margin } from "@mui/system";
import { Link } from "react-router-dom";

const Home = ({
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
  const [teams, setTeams] = useState("");

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

        <div className={styles.body_container}>
          <img src={learningcircles} alt="" className={styles.mimage} />
          <div className={styles.form}>
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

            {colleges && (
              <Box sx={{ minWidth: 300, maxWidth: 300, margin: 1.5 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Select College
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Select College"
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                  >
                    {colleges.map((college) => (
                      <MenuItem value={college.code}>{college.name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            )}

            {interests && college && (
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
                      <MenuItem value={interest.id}>{interest.title}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
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
                        Lead: {team.lead}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Team Code: {team.code}
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
                    </CardActions>
                  </Card>
                ))}
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  } else {
    <>
      <Navbar />
      <p>Loading....</p>
      <Footer />
    </>;
  }
};

export default Home;
