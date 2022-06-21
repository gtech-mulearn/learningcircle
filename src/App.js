import "./App.css";

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/LearningCircle/Home/Home";
import axios from "axios";

function App() {
  const [districts, setDistricts] = useState("");
  const [colleges, setColleges] = useState("");

  const [district, setDistrict] = useState("");
  const [colelge, setCollege] = useState("");

  const [interests, setInterests] = useState("");
  const [interest, setInterest] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/districts`)
      .then(function (response) {
        setDistricts(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/interests`)
      .then(function (response) {
        setInterests(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
