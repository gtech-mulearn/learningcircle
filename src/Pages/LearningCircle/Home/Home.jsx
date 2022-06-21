import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Home = ({
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
  if (districts) {
    return (
      <>
        <Navbar />

        <Box sx={{ minWidth: 120 }}>
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
          <Box sx={{ minWidth: 120 }}>
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
          <Box sx={{ minWidth: 120 }}>
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
