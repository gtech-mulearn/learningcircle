import React from "react";
import Footer from "../../../Components/Footer/Footer";
import Navbar from "../../../Components/Navbar/Navbar";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Create = ({
  interest,
  setInterest,
  interests,
  college,
  setCollege,
  colleges,
  create,
  setCreate,
}) => {
  return (
    <>
      <Navbar />
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Circle Code" variant="outlined" />
        <TextField id="outlined-basic" label="Lead Name" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Email Address"
          variant="outlined"
        />
        <TextField id="outlined-basic" label="Discord ID" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Karma Points"
          variant="outlined"
        />

        <TextField id="outlined-basic" label="Passcode" variant="outlined" />
        <TextField id="outlined-basic" label="College" variant="outlined" />
        <TextField id="outlined-basic" label="Phone" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Interest Group"
          variant="outlined"
        />
      </Box>
      <Footer />
    </>
  );
};

export default Create;
