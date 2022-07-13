import React, { useState } from "react";
import Footer from "../../../Components/Footer/Footer";
import Navbar from "../../../Components/Navbar/Navbar";
import learningcircles from "./assets/learningcircles.jpg";
import styles from "./Create.module.css";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import axios from "axios";
import CustomizedSnackbars from "../../../Components/SnackBar/SnackBar";

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
  const [errors, setErrors] = useState();
  const [completed, setCompleted] = useState(false);

  const [confirm, setConfirm] = useState();

  const changeHandler = (event) => {
    setCreate((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const postData = () => {
    setCompleted(false); //For showing snackbars if multiple circles are created without page reloading.
    const baseURL = `${process.env.REACT_APP_BACKEND_URL}/create`;
    axios
      .post(baseURL, {
        code: create.code,
        lead: {
          name: create.lead.name,
          email: create.lead.email,
          // discord_id: create.lead.discord_id,
          // karma: create.lead.karma,
        },
        passcode: create.passcode,
        college: create.college,
        phone: create.phone,
        interest: create.interest,
      })
      .then((response) => {
        if (response.data.status === "success") {
          setErrors("");
          setCompleted(true);
        }
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 400) {
          setErrors(error.response.data.detail.errors);
        } else if (error.response.status === 401) {
          setErrors(error.response.status);
        } else {
          setErrors("");
        }
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
      {completed && (
        <CustomizedSnackbars
          severity="success"
          message="Circle Created Successfully"
        />
      )}
      <Navbar />
      <img src={learningcircles} alt="" className={styles.mimage} />
      <div className={styles.fsview}>
        <p className={styles.fsheading}>Create Learning Circles</p>
        <p className={styles.fstagline}>
          Learning Circles are a fantastic way to learn a new skill or
          technology. You get you learn from the different perspectives of the
          learners in the circle. So what are you waiting for click and create a
          circle now.
        </p>
      </div>
      <div className={styles.form}>
        <TextField
          sx={{ minWidth: 300, maxWidth: 300, margin: 1.5 }}
          required
          error={
            errors && JSON.stringify(errors).includes("code") ? true : false
          }
          helperText={
            errors && JSON.stringify(errors).includes("code")
              ? "Team Code is Required"
              : ""
          }
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
          error={
            errors && JSON.stringify(errors).includes("lead.name")
              ? true
              : false
          }
          helperText={
            errors && JSON.stringify(errors).includes("lead.name")
              ? "Lead Name is Required"
              : ""
          }
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
          error={
            errors && JSON.stringify(errors).includes("lead.email")
              ? true
              : false
          }
          helperText={
            errors && JSON.stringify(errors).includes("lead.email")
              ? "Lead Email Address is Required"
              : ""
          }
          name="email"
          id="outlined-basic"
          label="Email Address"
          variant="outlined"
          value={create.email}
          onChange={leadchangeHandler}
        />
        {/* <TextField
          sx={{ minWidth: 300, maxWidth: 300, margin: 1.5 }}
          required
          error={
            errors && JSON.stringify(errors).includes("lead.discord_id")
              ? true
              : false
          }
          helperText={
            errors && JSON.stringify(errors).includes("lead.discord_id")
              ? "Lead Discord ID is Required"
              : ""
          }
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
          error={
            errors && JSON.stringify(errors).includes("lead.karma")
              ? true
              : false
          }
          helperText={
            errors && JSON.stringify(errors).includes("lead.karma")
              ? "Lead Karma Points is Required"
              : ""
          }
          name="karma"
          id="outlined-basic"
          label="Karma Points"
          variant="outlined"
          value={create.karma}
          onChange={leadchangeHandler}
        /> */}

        <TextField
          sx={{ minWidth: 300, maxWidth: 300, margin: 1.5 }}
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
          error={
            errors && JSON.stringify(errors).includes("passcode") ? true : false
          }
          helperText={
            errors && JSON.stringify(errors).includes("passcode")
              ? "Team Passcode is Required"
              : ""
          }
          id="outlined-basic"
          label="Passcode"
          variant="outlined"
          value={create.passcode}
          onChange={changeHandler}
        />

        <TextField
          sx={{ minWidth: 300, maxWidth: 300, margin: 1.5 }}
          required
          name="cpasscode"
          id="outlined-basic"
          label="Confirm Passcode"
          variant="outlined"
          error={
            confirm != create.passcode &&
            confirm &&
            create.passcode &&
            confirm.length > 0
              ? true
              : false
          }
          helperText={
            confirm != create.passcode &&
            confirm &&
            create.passcode &&
            confirm.length > 0
              ? "Both Screct Keys Should be the Same"
              : ""
          }
          onChange={(e) => {
            setConfirm(e.target.value);
          }}
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
