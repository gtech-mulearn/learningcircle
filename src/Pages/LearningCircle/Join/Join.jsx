import React, { useState, useEffect } from "react";
import Footer from "../../../Components/Footer/Footer";
import Navbar from "../../../Components/Navbar/Navbar";
import styles from "./Join.module.css";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

const Join = ({ code, join, setJoin, college, setCollege }) => {
  const recaptchaRef = React.createRef();
  
  const [pass, setPass] = useState("");
  const [verify, setVerify] = useState(false);
  const changeHandler = (event) => {
    setJoin((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
    console.log(join);
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/team/${join.code || code}`)
        .then(function (response) {
          setCollege(response.data.data.college.name);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, 3000);

    return () => clearTimeout(delayDebounceFn);
  }, [join.code, setCollege]);

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

        {college && (
          <TextField
            sx={{ minWidth: 300, maxWidth: 300, margin: 1.5 }}
            required
            disabled
            name="college"
            id="outlined-basic"
            label="Select College"
            variant="outlined"
            value={college}
          />
        )}

        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          onChange={() => {
            setVerify(true);
            console.log(recaptchaRef.current.getValue());
          }}
        />

        <Button
          disabled={college && verify ? false : true}
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
