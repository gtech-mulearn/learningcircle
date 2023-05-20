import React, { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import learningcircles from "./assets/learningcircles.jpg";
import Footer from "../../../Components/Footer/Footer";
import Navbar from "../../../Components/Navbar/Navbar";
import styles from "./Join.module.css";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import CustomizedSnackbars from "../../../Components/SnackBar/SnackBar";
import CheckIcon from "@mui/icons-material/Check";
import { red } from "@mui/material/colors";
import confetti from "canvas-confetti";

const Join = ({
  code,
  setCode,
  join,
  setJoin,
  college,
  setCollege,
  setWLink,
}) => {
  const { id } = useParams();
  const recaptchaRef = React.createRef();
  const [pass, setPass] = useState("");
  const [errors, setErrors] = useState();
  const [completed, setCompleted] = useState(false);
  const [members, setMembers] = useState();

  const [valid, setValid] = useState(false);
  const [snackerror, setSnackError] = useState();

  const [verify, setVerify] = useState(false);
  const [token, setToken] = useState();

  const changeHandler = (event) => {
    setJoin((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      axios
        .get(
          `${process.env.REACT_APP_BACKEND_URL}/team/${join.code || code || id}`
        )
        .then(function (response) {
          setCollege(response.data.data.college.name);
          setMembers(response.data.data.members);
          setValid(true);
        })
        .catch(function (error) {
          setCollege();
          setMembers();
          setValid(false);
        });
    }, 3000);

    return () => clearTimeout(delayDebounceFn);
  }, [join.code, setCollege, setMembers, setValid, code, id]);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (id && code === "") {
      setCode(id);
    }
  }, [id, code, setCode]);

  const postData = () => {
    if (token) {
      setSnackError();
      recaptchaRef.current.reset();
      setToken();
      setVerify(false);
      const baseURL = `${process.env.REACT_APP_BACKEND_URL}/join`;
      axios
        .post(
          baseURL,
          {
            code: join.code || code,
            name: join.name,
            email: join.email,
            // discord_id: join.discord_id,
            // karma: join.karma,
            college: join.college,
            phone: join.phone,
            recaptcha: token,
          },
          {
            headers: {
              Authorization: pass,
            },
          }
        )
        .then((response) => {
          if (response.data.status === "success") {
            // setJoin({
            //   code: "",
            //   name: "",
            //   email: "",
            //   college: "",
            //   phone: "",
            // });
            setErrors("");
            setCompleted(true);
            setWLink(response.data.wa_url);
            setPass("");
            confetti();
          }
        })
        .catch((error) => {
          if (error.response.status === 400) {
            if (error.response.data.detail) {
              setErrors(error.response.data.detail.errors);
            }

            setSnackError(error.response.data.message);
          } else if (error.response.status === 401) {
            setErrors(error.response.status);
          } else {
            setErrors("");
          }
        });
    }
  };

  return (
    <>
      {completed && (
        <>
          <CustomizedSnackbars
            severity="success"
            message="Circle Joined Successfully"
          />
          <Navigate
            to={`/gettingstarted/${join.code || code}`}
            replace={true}
          />
          ;
        </>
      )}

      {valid && (
        <CustomizedSnackbars
          severity="success"
          message="Circle Code is Valid"
        />
      )}

      {snackerror && (
        <CustomizedSnackbars severity="error" message={snackerror} />
      )}

      <Navbar />

      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <img src={learningcircles} alt="" className={styles.mimage} />
          <div className={styles.fsview}>
            <p className={styles.fsheading}>
              Let's Join <br /> <span>Learning Circles</span>
            </p>
            <p className={styles.fstagline}>
              In order to join a learning circle, you need to enter the circle
              code as well as a secret key. Both of these credentials can be
              retrieved from your circle lead. If you already have them fill
              them out, and you are good to go!
            </p>
            <a href="/create" rel="noopener noreferrer">
              <button className={styles.search_button}>
                Create Learning Circles
              </button>
            </a>
          </div>
        </div>

        <div className={styles.form_container}>
          <div className={styles.first_form_section}>
            <div className={styles.ff_content}>
              <p className={styles.ff_heading}>Enter the Details</p>
              <p className={styles.ff_tagline}>
                Type in your circle name to verify it and enter in you details
                to join a learning circle
              </p>
            </div>
            <div className={styles.ff_form_fields}>
              <div className={styles.field_container}>
                <TextField
                  sx={{
                    minWidth: 300,
                    maxWidth: 300,
                    margin: 1.5,
                    marginLeft: 0,
                  }}
                  required
                  name="code"
                  id="outlined-basic"
                  label="Circle Name"
                  variant="outlined"
                  disabled={id ? true : false}
                  value={join.code || code}
                  onChange={changeHandler}
                />
                {!valid && (join.code || code) && (
                  <div className={styles.validator}>
                    {" "}
                    <CheckIcon sx={{ color: red[500] }} />
                    <p className={styles.validtext}>Enter Valid Circle Code!</p>
                  </div>
                )}

                {valid && (
                  <div className={styles.validator}>
                    {" "}
                    <CheckIcon color="success" />
                    <p className={styles.validtext1}>Circle Code is Valid!</p>
                  </div>
                )}
              </div>

              <TextField
                sx={{
                  minWidth: 300,
                  maxWidth: 300,
                  margin: 1.5,
                  marginLeft: 0,
                }}
                required
                disabled
                name="college"
                id="outlined-basic"
                label="Select College"
                variant="outlined"
                value={college}
              />

              <TextField
                sx={{
                  minWidth: 300,
                  maxWidth: 300,
                  margin: 1.5,
                  marginLeft: 0,
                }}
                required
                name="name"
                error={
                  errors && JSON.stringify(errors).includes("name")
                    ? true
                    : false
                }
                helperText={
                  errors && JSON.stringify(errors).includes("name")
                    ? "Name is Required"
                    : ""
                }
                id="outlined-basic"
                label="Your Name"
                variant="outlined"
                value={join.name}
                onChange={changeHandler}
              />
              <TextField
                sx={{
                  minWidth: 300,
                  maxWidth: 300,
                  margin: 1.5,
                  marginLeft: 0,
                }}
                required
                name="email"
                error={
                  errors && JSON.stringify(errors).includes("email")
                    ? true
                    : false
                }
                helperText={
                  errors && JSON.stringify(errors).includes("email")
                    ? "Email Address is Required"
                    : ""
                }
                id="outlined-basic"
                label="Email Address"
                type="email"
                variant="outlined"
                value={join.email}
                onChange={changeHandler}
              />

              <TextField
                sx={{
                  minWidth: 300,
                  maxWidth: 300,
                  margin: 1.5,
                  marginLeft: 0,
                }}
                name="phone"
                required
                id="outlined-basic"
                label="Phone"
                variant="outlined"
                value={join.phone}
                onChange={changeHandler}
              />
              <TextField
                sx={{
                  minWidth: 300,
                  maxWidth: 300,
                  margin: 1.5,
                  marginLeft: 0,
                }}
                name="passcode"
                error={
                  errors && JSON.stringify(errors).includes("401")
                    ? true
                    : false
                }
                helperText={
                  errors && JSON.stringify(errors).includes("401")
                    ? "Circle Screct Key is Wrong!"
                    : ""
                }
                id="outlined-basic"
                label="Secret Key"
                // type="password"
                variant="outlined"
                value={pass}
                onChange={(event) => setPass(event.target.value)}
              />
            </div>

            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LfPKtogAAAAAAPFTnQyySYQa6Txbg9HQLS2Twb7"
              onChange={() => {
                setToken(recaptchaRef.current.getValue());
                setVerify(true);
              }}
            />

            <Button
              disabled={
                join.phone &&
                join.phone.length >= 10 &&
                college &&
                verify &&
                pass
                  ? false
                  : true
              }
              sx={{ minWidth: 300, maxWidth: 300, margin: 1.5, marginLeft: 0 }}
              onClick={() => {
                postData();
              }}
              variant="contained"
            >
              Join Circle
            </Button>
          </div>
          {members && (
            <div className={styles.members}>
              <p className={styles.mheading}>Existing Members</p>
              <p className={styles.mtagline}>
                It seems like your circle already have some interesting
                learners. Learning is always amazing when its done in group.
              </p>

              <div className={styles.mlist}>
                {members.map((member) => (
                  <p className={styles.list}>{member}</p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Join;
