import React from "react";
import Footer from "../../../Components/Footer/Footer";
import Navbar from "../../../Components/Navbar/Navbar";
import styles from "./Create.module.css";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import axios from "axios";

const Create = ({
  interest,
  setInterest,
  interests,
  college,
  setCollege,
  colleges,
  create,
  setCreate,
  districts,
  district,
  setDistrict,
}) => {
  const changeHandler = (event) => {
    setCreate((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const postData = () => {
    const baseURL = `${process.env.REACT_APP_BACKEND_URL}/create`;
    axios
      .post(baseURL, {
        code: create.code,
        lead: {
          name: create.lead.name,
          email: create.lead.email,
          discord_id: create.lead.discord_id,
          karma: create.lead.karma,
        },
        passcode: create.passcode,
        college: create.college,
        phone: create.phone,
        interest: create.interest,
      })
      .then((response) => {
        console.log(response.data);
      });
  };

  const leadchangeHandler = (event) => {
    setCreate((prevState) => ({
      ...prevState,
      lead: { ...prevState.lead, [event.target.name]: event.target.value },
    }));
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
          value={create.code}
          onChange={changeHandler}
        />
        <TextField
          sx={{ minWidth: 300, maxWidth: 300, margin: 1.5 }}
          required
          name="name"
          id="outlined-basic"
          label="Lead Name"
          variant="outlined"
          value={create.name}
          onChange={leadchangeHandler}
        />
        <TextField
          sx={{ minWidth: 300, maxWidth: 300, margin: 1.5 }}
          required
          name="email"
          id="outlined-basic"
          label="Email Address"
          variant="outlined"
          value={create.email}
          onChange={leadchangeHandler}
        />
        <TextField
          sx={{ minWidth: 300, maxWidth: 300, margin: 1.5 }}
          required
          name="discord_id"
          id="outlined-basic"
          label="Discord ID"
          variant="outlined"
          value={create.discord_id}
          onChange={leadchangeHandler}
        />
        <TextField
          sx={{ minWidth: 300, maxWidth: 300, margin: 1.5 }}
          required
          name="karma"
          id="outlined-basic"
          label="Karma Points"
          variant="outlined"
          value={create.karma}
          onChange={leadchangeHandler}
        />

        <TextField
          sx={{ minWidth: 300, maxWidth: 300, margin: 1.5 }}
          required
          name="phone"
          id="outlined-basic"
          label="Phone"
          variant="outlined"
          value={create.phone}
          onChange={changeHandler}
        />

        <TextField
          sx={{ minWidth: 300, maxWidth: 300, margin: 1.5 }}
          required
          name="passcode"
          id="outlined-basic"
          label="Passcode"
          variant="outlined"
          value={create.passcode}
          onChange={changeHandler}
        />
        {districts && (
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
                  setCreate((prevState) => ({
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

        {interests && college && (
          <Box sx={{ minWidth: 300, maxWidth: 300, margin: 1.5 }}>
            <FormControl required fullWidth>
              <InputLabel id="demo-simple-select-label">
                Select Interest Group
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Select College"
                name="interest"
                value={interest}
                onChange={(e) => {
                  setInterest(e.target.value);
                  setCreate((prevState) => ({
                    ...prevState,
                    interest: e.target.value,
                  }));
                }}
              >
                {interests.map((interest) => (
                  <MenuItem value={interest.id}>{interest.title}</MenuItem>
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
          Create Circle
        </Button>
      </div>

      <Footer />
    </>
  );
};

export default Create;
