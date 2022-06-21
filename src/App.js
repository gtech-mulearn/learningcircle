import "./App.css";

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/LearningCircle/Home/Home";
import axios from "axios";

function App() {
  const [districts, setDistricts] = useState("");
  const [colleges, setColleges] = useState("");

  const [district, setDistrict] = useState("");
  const [college, setCollege] = useState("");

  const [interests, setInterests] = useState("");
  const [interest, setInterest] = useState("");

  useEffect(() => {
    if (!districts) {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/districts`)
        .then(function (response) {
          setDistricts(response.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    if (!interests) {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/interests`)
        .then(function (response) {
          setInterests(response.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    if (district) {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/colleges/${district}`)
        .then(function (response) {
          setColleges(response.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [district, college]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                districts={districts}
                district={district}
                setDistrict={setDistrict}
                colleges={colleges}
                setCollege={setCollege}
                college={college}
                interests={interests}
                setInterest={setInterest}
                interest={interest}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
