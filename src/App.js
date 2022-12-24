import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/LearningCircle/Home/Home";
import axios from "axios";
import Create from "./Pages/LearningCircle/Create/Create";
import Join from "./Pages/LearningCircle/Join/Join.jsx";
import InterestGroup from "./Pages/InterestGroups/InterestGroup/InterestGroup";
import MentorDirectory from "./Pages/Search/MentorDirectory/MentorDirectory";
import Search from "./Pages/LearningCircle/Search/Search";

import WebCourse from "./Pages/InterestGroups/InterestGroup/Course/web/WebCourse";
import UIUXCourse from "./Pages/InterestGroups/InterestGroup/Course/uiux/UIUXCourse";
import PMCourse from "./Pages/InterestGroups/InterestGroup/Course/pm/PMCourse";
import AndroidCourse from "./Pages/InterestGroups/InterestGroup/Course/android/AndroidCourse";
import IoTCourse from "./Pages/InterestGroups/InterestGroup/Course/iot/IoTCourse";
import CybersecCourse from "./Pages/InterestGroups/InterestGroup/Course/cybersec/CybersecCourse";
import CommonCourse from "./Pages/InterestGroups/InterestGroup/Course/common/CommonCourse";


import Android from "./Pages/Bootcamp/Android/Android";

import ProblemShelves from "./Pages/Practice/ProblemShelves/ProblemShelves";
import OpenSource from "./Pages/Practice/OpenSource/OpenSource";
import APISetu from "./Pages/Practice/APISetu/APISetu";
import Courses from "./Pages/Practice/Courses/Courses";
import IndividualPage from "./Pages/Practice/ProblemShelves/IndividualPage/IndividualPage";

//Practice => Challenges
import TypingChallenge from "./Pages/Practice/Challenges/TypingChallenge/TypingChallenge";
import MuLanding from "./Pages/Practice/Challenges/MuLanding";
import DefensiveDriving from "./Pages/Practice/Challenges/DefensiveDriving/DefensiveDriving";
import IntroToGithub from "./Pages/Practice/Challenges/IntroToGithub/IntroToGithub";
import IntroToMarkdown from "./Pages/Practice/Challenges/IntroToMarkdown/IntroToMarkdown";
import IntroToCommandLine from "./Pages/Practice/Challenges/IntroToCommandLine/IntroToCommandLine";
import IntroToGithubPages from "./Pages/Practice/Challenges/IntroToGithubPages/IntroToGithubPages";
import IntroToHtml from "./Pages/Practice/Challenges/IntroToHtml/IntroToHtml";
import TrafficLightSimulation from "./Pages/Practice/Challenges/TrafficLightSimulation/TrafficLightSimulation";
import IntroToMulearn from "./Pages/Practice/Challenges/IntroToMuLearn/IntroToMuLearn";

function App() {
  //Home Page state Variables
  const [districts, setDistricts] = useState("");
  const [colleges, setColleges] = useState("");

  const [district, setDistrict] = useState("");
  const [college, setCollege] = useState("");

  const [interests, setInterests] = useState("");
  const [interest, setInterest] = useState("");

  //Routing States
  const [code, setCode] = useState("");

  //Error Vars
  const [backenderr, setBackenderr] = useState(false);

  //Create Page State Variables
  const [create, setCreate] = useState({
    code: "",
    lead: {
      name: "",
      email: "",
      // discord_id: "",
      // karma: "",
    },
    passcode: "",
    college: college,
    phone: "",
    interest: interest,
    meet_time: "",
    meet_place: "",
  });

  //Join page State Variable
  const [join, setJoin] = useState({
    code: "",
    name: "",
    email: "",
    // discord_id: "",
    // karma: "",
    college: "",
    phone: "",
  });

  useEffect(() => {
    if (!districts) {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/districts`)
        .then(function (response) {
          setDistricts(response.data.data);
        })
        .catch(function (error) {
          console.log(error);
          setBackenderr(true);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [district, college]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                backenderr={backenderr}
                code={code}
                setCode={setCode}
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
          <Route
            path="/create"
            element={
              <Create
                interest={interest}
                districts={districts}
                district={district}
                setDistrict={setDistrict}
                setInterest={setInterest}
                interests={interests}
                college={college}
                setCollege={setCollege}
                colleges={colleges}
                create={create}
                setCreate={setCreate}
              />
            }
          />

          <Route
            path="/join"
            element={
              <Join
                code={code}
                setCode={setCode}
                join={join}
                setJoin={setJoin}
                college={college}
                setCollege={setCollege}
              />
            }
          />

          <Route
            path="/join/:id"
            element={
              <Join
                code={code}
                setCode={setCode}
                join={join}
                setJoin={setJoin}
                college={college}
                setCollege={setCollege}
              />
            }
          />

          <Route
            path="/:id"
            element={<InterestGroup setInterest={setInterest} />}
          />
          <Route path="/mentors" element={<MentorDirectory />} />
          <Route path="/problemshelves" element={<ProblemShelves />} />
          <Route path="/opensource" element={<OpenSource />} />
          <Route path="/problemshelves/:id" element={<IndividualPage />} />
          <Route path="/challenges" element={<MuLanding />} />
          <Route path="/challenge/typing" element={<TypingChallenge />} />
          <Route
            path="/challenge/intro-to-github"
            element={<IntroToGithub />}
          />
          <Route
            path="/challenge/intro-to-mulearn"
            element={<IntroToMulearn />}
          />
          <Route
            path="/challenge/intro-to-markdown"
            element={<IntroToMarkdown />}
          />
          <Route
            path="/challenge/intro-to-command-line"
            element={<IntroToCommandLine />}
          />
          <Route
            path="/challenge/intro-to-github-pages"
            element={<IntroToGithubPages />}
          />
          <Route path="/challenge/intro-to-html" element={<IntroToHtml />} />
          <Route
            path="/challenge/traffic-light-simulation"
            element={<TrafficLightSimulation />}
          />
          <Route
            path="/challenge/defensivedriving"
            element={<DefensiveDriving />}
          />
          <Route path="/web/:type/:id" element={<WebCourse />} />
          <Route path="/uiux/:type/:id" element={<UIUXCourse />} />
          <Route path="/pm/:type/:id" element={<PMCourse />} />
          <Route path="/iot/:type/:id" element={<IoTCourse />} />
          <Route path="/android/:type/:id" element={<AndroidCourse />} />
          <Route path="/cybersec/:type/:id" element={<CybersecCourse />} />
          <Route path="/common/:type/:id" element={<CommonCourse />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/apisetu" element={<APISetu />} />
          <Route path="/bootcamp/android" element={<Android />} />
          <Route
            path="/searchcircles"
            element={
              <Search
                code={code}
                setCode={setCode}
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
          <Route
            path="/create/:id"
            element={
              <Create
                interest={interest}
                districts={districts}
                district={district}
                setDistrict={setDistrict}
                setInterest={setInterest}
                interests={interests}
                college={college}
                setCollege={setCollege}
                colleges={colleges}
                create={create}
                setCreate={setCreate}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
