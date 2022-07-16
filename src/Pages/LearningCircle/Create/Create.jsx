import React, { useState, useEffect } from "react";
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
import ReCAPTCHA from "react-google-recaptcha";

import CustomizedSnackbars from "../../../Components/SnackBar/SnackBar";
import Autocomplete from "@mui/material/Autocomplete";
import { Link } from "react-router-dom";

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
  const recaptchaRef = React.createRef();
  const [errors, setErrors] = useState();
  const [completed, setCompleted] = useState(false);

  const [confirm, setConfirm] = useState();
  const [snackerror, setSnackError] = useState();

  const [verify, setVerify] = useState(false);
  const [token, setToken] = useState("");

  const [options, setOptions] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const changeHandler = (event) => {
    setCreate((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

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

  const postData = () => {
    setCompleted(false); //For showing snackbars if multiple circles are created without page reloading.
    setSnackError();
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
        college: create.college || college,
        phone: create.phone,
        recaptcha: token,
        interest: create.interest || interest,
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
        console.log(error.response.data.message);
        if (error.response.status === 400) {
          setErrors(error.response.data.detail.errors);
          setSnackError(error.response.data.message);
        } else if (error.response.status === 401) {
          setErrors(error.response.status);
          setSnackError(error.response.data.message);
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

      {snackerror && (
        <CustomizedSnackbars severity="error" message={snackerror} />
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
          label="Learning Circle Name"
          placeholder="A Unique name for your circle"
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
              ? "Team Secret Key is Required"
              : ""
          }
          id="outlined-basic"
          label="Secret Key"
          placeholder="Try to Enter a Strong Key"
          variant="outlined"
          value={create.passcode}
          onChange={changeHandler}
        />

        <TextField
          sx={{ minWidth: 300, maxWidth: 300, margin: 1.5 }}
          required
          name="cpasscode"
          id="outlined-basic"
          label="Confirm Secret Key"
          variant="outlined"
          error={
            confirm !== create.passcode &&
            confirm &&
            create.passcode &&
            confirm.length > 0
              ? true
              : false
          }
          helperText={
            confirm !== create.passcode &&
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

        {colleges && options && (
          <>
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
          </>
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

        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey="6LfPKtogAAAAAAPFTnQyySYQa6Txbg9HQLS2Twb7"
          onChange={() => {
            setVerify(true);
            console.log(recaptchaRef.current.getValue());
            setToken(recaptchaRef.current.getValue());
          }}
        />

        <Button
          sx={{ minWidth: 300, maxWidth: 300, margin: 1.5 }}
          disabled={
            college && verify && confirm === create.passcode ? false : true
          }
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
