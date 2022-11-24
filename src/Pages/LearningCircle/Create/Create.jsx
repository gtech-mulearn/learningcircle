import React, { useState, useEffect } from "react";
import Footer from "../../../Components/Footer/Footer";
import Navbar from "../../../Components/Navbar/Navbar";
import learningcircles from "./assets/learningcircles.jpg";
import styles from "./Create.module.css";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

import CustomizedSnackbars from "../../../Components/SnackBar/SnackBar";
import Autocomplete from "@mui/material/Autocomplete";

import confetti from "canvas-confetti";

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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [wlink, setWLink] = useState();

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
    if (token) {
      setCompleted(false); //For showing snackbars if multiple circles are created without page reloading.
      setSnackError();
      recaptchaRef.current.reset();
      setToken();
      setVerify(false);
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
          meet_place: create.meet_place,
          meet_time: create.meet_time,
        })
        .then((response) => {
          console.log(response);
          if (response.data.status === "success") {
            setCreate({
              code: "",
              lead: {
                name: "",
                email: "",
              },
              passcode: "",
              college: college,
              phone: "",
              interest: interest,
              meet_place: "",
              meet_time: "",
            });
            setErrors("");
            setCompleted(true);
            setWLink(response.data.wa_url);
            handleOpen();
            confetti();
          }
        })
        .catch((error) => {
          if (error.response.status === 400) {
            if (error.response.data.detail) {
              setErrors(error.response.data.detail.errors);
            }
            setSnackError(error.response.data.message);
          } else if (
            error.response.status === 401 ||
            error.response.status === 500
          ) {
            setErrors(error.response.status);
            setSnackError(error.response.data.message);
          } else {
            setErrors("");
          }
        });
    }
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

      {completed && wlink && (
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
                variant="h5"
                component="h2"
                className={styles.modaltext}
                sx={{ marginY: 1.5 }}
              >
                Circle Created!
              </Typography>
              <Typography variant="body2" gutterBottom component="div">
                The Circle is created and furthur details has been already
                mailed to you. Kindly check it out. Also all the upcoming
                communications will be done through a whatsapp group so do join
                it.
              </Typography>
              <a href={wlink} target="_blank" rel="noopener noreferrer">
                <Button
                  sx={{ minWidth: 250, maxWidth: 250, marginY: 1.5 }}
                  variant="contained"
                >
                  Join Whatsapp Group
                </Button>
              </a>
            </Box>
          </Modal>
        </div>
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

        <TextField
          sx={{ minWidth: 300, maxWidth: 300, margin: 1.5 }}
          required
          error={
            errors && JSON.stringify(errors).includes("code") ? true : false
          }
          helperText={
            errors && JSON.stringify(errors).includes("code")
              ? "Team Code is Required"
              : "*Spaces and Special Characters aren't allowed!"
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
          required
          sx={{ minWidth: 300, maxWidth: 300, margin: 1.5 }}
          name="phone"
          id="outlined-basic"
          label="Phone"
          variant="outlined"
          value={create.phone}
          onChange={changeHandler}
        />
        <TextField
          required
          sx={{ minWidth: 300, maxWidth: 300, margin: 1.5 }}
          name="meet_place"
          id="outlined-basic"
          label="Meet Place"
          placeholder="A Place in your campus to meet"
          variant="outlined"
          value={create.meet_place}
          onChange={changeHandler}
        />
        <TextField
          required
          sx={{ minWidth: 300, maxWidth: 300, margin: 1.5 }}
          name="meet_time"
          id="outlined-basic"
          label="Meet Time"
          placeholder="HH:MM AM/PM"
          variant="outlined"
          value={create.meet_time}
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
              : "*Key to be shared with members only!"
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
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey="6LfPKtogAAAAAAPFTnQyySYQa6Txbg9HQLS2Twb7"
          onChange={() => {
            setToken(recaptchaRef.current.getValue());
            setVerify(true);
          }}
        />

        <Button
          sx={{ minWidth: 300, maxWidth: 300, margin: 1.5 }}
          disabled={
            create.phone &&
            create.phone.length >= 10 &&
            college &&
            verify &&
            confirm === create.passcode
              ? false
              : true
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
