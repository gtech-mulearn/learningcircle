import React, { useState } from "react";
import Footer from "../../../Components/Footer/Footer";
import Navbar from "../../../Components/Navbar/Navbar";
import styles from "./Join.module.css";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import axios from "axios";

const Join = ({
  code,
  join,
  setJoin,
  districts,
  district,
  setDistrict,
  college,
  setCollege,
  colleges,
}) => {
  const [pass, setPass] = useState("");
  const changeHandler = (event) => {
    setJoin((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
    console.log(join);
  };

  const postData = () => {
    const baseURL = `${process.env.REACT_APP_BACKEND_URL}/join`;
    axios
      .post(
        baseURL,
        {
          code: join.code || code,
          name: join.name,
          email: join.email,
          discord_id: join.discord_id,
          karma: join.karma,
          college: join.college,
          phone: join.phone,
        },
        {
          headers: {
            Authorization: pass,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      });
  };

  return (
    <>
      <Navbar />
      <div className={styles.form}>
        <TextField
          sx={{ minWidth: 300, maxWidth: 300, margin: 1.5 }}
          required
          name="code"
          id="outlined-basic"
          label="Circle Code"
          variant="outlined"
          value={join.code || code}
          onChange={changeHandler}
        />
        <TextField
          sx={{ minWidth: 300, maxWidth: 300, margin: 1.5 }}
          required
          name="name"
          id="outlined-basic"
          label="Your Name"
          variant="outlined"
          value={join.name}
          onChange={changeHandler}
        />
        <TextField
          sx={{ minWidth: 300, maxWidth: 300, margin: 1.5 }}
          required
          name="email"
          id="outlined-basic"
          label="Email Address"
          variant="outlined"
          value={join.email}
          onChange={changeHandler}
        />
        <TextField
          sx={{ minWidth: 300, maxWidth: 300, margin: 1.5 }}
          required
          name="discord_id"
          id="outlined-basic"
          label="Discord ID"
          variant="outlined"
          value={join.discord_id}
          onChange={changeHandler}
        />
        <TextField
          sx={{ minWidth: 300, maxWidth: 300, margin: 1.5 }}
          required
          name="karma"
          id="outlined-basic"
          label="Karma Points"
          variant="outlined"
          value={join.karma}
          onChange={changeHandler}
        />

        <TextField
          sx={{ minWidth: 300, maxWidth: 300, margin: 1.5 }}
          required
          name="phone"
          id="outlined-basic"
          label="Phone"
          variant="outlined"
          value={join.phone}
          onChange={changeHandler}
        />

        <TextField
          sx={{ minWidth: 300, maxWidth: 300, margin: 1.5 }}
          required
          name="passcode"
          id="outlined-basic"
          label="Passcode"
          variant="outlined"
          value={pass}
          onChange={(event) => setPass(event.target.value)}
        />
        {districts && !college && (
          <Box sx={{ minWidth: 300, maxWidth: 300, margin: 1.5 }}>
            <FormControl required fullWidth>
              <InputLabel id="demo-simple-select-label">
                Select District
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Select District"
                value={district}
                onChange={(e) => {
                  setDistrict(e.target.value);
                }}
              >
                {districts.map((district) => (
                  <MenuItem value={district}>{district}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        )}

        {colleges && (
          <Box sx={{ minWidth: 300, maxWidth: 300, margin: 1.5 }}>
            <FormControl required fullWidth>
              <InputLabel id="demo-simple-select-label">
                Select College
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Select College"
                name="college"
                value={college}
                onChange={(e) => {
                  setCollege(e.target.value);
                  setJoin((prevState) => ({
                    ...prevState,
                    college: e.target.value,
                  }));
                }}
              >
                {colleges.map((college) => (
                  <MenuItem value={college.code}>{college.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        )}

        <Button
          sx={{ minWidth: 300, maxWidth: 300, margin: 1.5 }}
          onClick={() => {
            postData();
          }}
          variant="contained"
        >
          Join Circle
        </Button>
      </div>
      <Footer />
    </>
  );
};

export default Join;
