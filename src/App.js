import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

//LearningCirlces Section
import Home from "./Pages/LearningCircles/Home/Home";
import Create from "./Pages/LearningCircles/Create/Create";
import Join from "./Pages/LearningCircles/Join/Join.jsx";
import GettingStarted from "./Pages/LearningCircles/GettingStarted/GettingStarted";

//InterestGroups
import InterestGroup from "./Pages/InterestGroups/InterestGroup";
import CoursePage from "./Pages/InterestGroups/Course/CoursePage";
import WebData from "./Pages/InterestGroups/Course/web";
import AndroidData from "./Pages/InterestGroups/Course/android";
import CommonData from "./Pages/InterestGroups/Course/common";
import IoTData from "./Pages/InterestGroups/Course/iot";
import CybersecData from "./Pages/InterestGroups/Course/cybersec";
import PmData from "./Pages/InterestGroups/Course/pm";
import UxData from "./Pages/InterestGroups/Course/ux";
import AndroidKotlin from "./Pages/InterestGroups/Course/AndroidKotlin/AndroidKotlin";
import BlockchainData from "./Pages/InterestGroups/Course/blockchain";
import AutoCADData from "./Pages/InterestGroups/Course/autocad";
import RevitData from "./Pages/InterestGroups/Course/revit";

//Bootcamp Section
import BootcampsHome from "./Pages/Bootcamps/BootcampsHome/BootcampsHome";
import Android from "./Pages/Bootcamps/NewYearNewSkill/Android/Android";
import Rust from "./Pages/Bootcamps/NewYearNewSkill/Rust/Rust";
import Flutter from "./Pages/Bootcamps/NewYearNewSkill/Flutter/Flutter";
import CTFPage from "./Pages/Bootcamps/NewYearNewSkill/CTFPage/CTFPage";
import JavaScript from "./Pages/Bootcamps/NewYearNewSkill/JavaScript/JavaScript";
import Python from "./Pages/Bootcamps/NewYearNewSkill/Python/Python";
import AI from "./Pages/Bootcamps/NewYearNewSkill/AI/AI";

// KSE Bootcamps Section
// import KSE from "./Pages/KSE/KSE";
// import Challenges from "./Pages/KSE/Challenges/Challenges";
// import IndividualChallenge from "./Pages/KSE/Challenges/IndividualChallenge/IndividualChallenge";
// import ProofOfWork from "./Pages/KSE/Challenges/ProofOfWork/ProofOfWork";

//Interest Group Bootcamps
import IGBootcamp from "./Pages/Bootcamps/IGBootcamps/IGBootcamp";

//Misc
import NotFound from "./Pages/Misc/404/NotFound";

//Search Section
import MentorDirectory from "./Pages/Search/MentorDirectory/MentorDirectory";
import Search from "./Pages/Search/Search/Search";

// Practice Section
import ProblemShelves from "./Pages/Practice/ProblemShelves/ProblemShelves";
import OpenSource from "./Pages/Practice/OpenSource/OpenSource";
import APISetu from "./Pages/Practice/APISetu/APISetu";
import Courses from "./Pages/Practice/Courses/Courses";
import IndividualPage from "./Pages/Practice/ProblemShelves/IndividualPage/IndividualPage";

//Practice => Challenges
import TypingChallengeLeaderboard from "./Pages/Practice/Challenges/TypingChallenge/TypingChallengeLeaderboard";
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
import MarathonChallenge from "./Pages/Practice/Challenges/MarathonChallenge/MarathonChallenge";
import CTFChallenge from "./Pages/Practice/Challenges/CTFChallenge/CTFChallenge";
import CivilInterestGroup from "./Pages/InterestGroups/CivilInterestGroup/Template/CivilInterestGroup";
import GoogleSolutionsChallenge from "./Pages/Practice/Challenges/GoogleSolutionsChallenge/GoogleSolutionsChallenge";
import FayaDigitalMarketing from "./Pages/Practice/Challenges/FayaDigitalMarketing/FayaDigitalMarketing";
import InnovationDesignChallenge from "./Pages/Practice/Challenges/InnovationDesign/InnovationDesignChallenge";
import DesignChallenge from "./Pages/Practice/Challenges/DesignChallenge/DesignChallenge";
import TypingMastery from "./Pages/Practice/Challenges/TypingChallenge/TypingMastery/TypingMastery";

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
  const [wlink, setWLink] = useState();
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
          <Route path="*" element={<NotFound />} />
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
                setWLink={setWLink}
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
                setWLink={setWLink}
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
                setWLink={setWLink}
              />
            }
          />
          <Route
            path="/civil/:id"
            element={<CivilInterestGroup setInterest={setInterest} />}
          />


          <Route
            path="/gettingstarted/:id"
            element={
              <GettingStarted create={create} wlink={wlink} join={join} />
            }
          />

          <Route
            path="/:id"
            element={<InterestGroup setInterest={setInterest} />}
          />
            <Route
              path="/:id/:sub"
              element={<InterestGroup setInterest={setInterest} />}
            />

            <Route
              path="/:id/:sub/:level"
              element={<InterestGroup setInterest={setInterest} />}
            />
          <Route path="/mentors" element={<MentorDirectory />} />
          <Route path="/problemshelves" element={<ProblemShelves />} />
          <Route path="/opensource" element={<OpenSource />} />
          <Route path="/problemshelves/:id" element={<IndividualPage />} />
          <Route path="/challenges" element={<MuLanding />} />
          <Route path="/challenge/typing" element={<TypingChallenge />} />
          <Route
            path="/challenge/typing/leaderboard"
            element={<TypingChallengeLeaderboard />}
          />
          <Route path="/challenge/hackout" element={<CTFChallenge />} />
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
          <Route path="/challenge/marathon" element={<MarathonChallenge />} />
          <Route
            path="/challenge/googlesolution"
            element={<GoogleSolutionsChallenge />}
          />
          <Route
            path="/challenge/innovationdesign"
            element={<InnovationDesignChallenge />}
          />
          <Route
            path="/challenge/designchallenge"
            element={<DesignChallenge />}
          />
          <Route
            path="/web/:type/:id"
            element={<CoursePage CourseData={WebData} />}
          />
          <Route
            path="/ux/:type/:id"
            element={<CoursePage CourseData={UxData} />}
          />
          <Route
            path="/pm/:type/:id"
            element={<CoursePage CourseData={PmData} />}
          />
          <Route
            path="/iot/:type/:id"
            element={<CoursePage CourseData={IoTData} />}
          />

          <Route
            path="/android/:type/:id"
            element={<CoursePage CourseData={AndroidData} />}
          />
          <Route
            path="/cybersec/:type/:id"
            element={<CoursePage CourseData={CybersecData} />}
          />

          <Route
            path="/blockchain/:type/:id"
            element={<CoursePage CourseData={BlockchainData} />}
          />
          <Route
            path="/common/:type/:id"
            element={<CoursePage CourseData={CommonData} />}
          />
          <Route
            path="/civil/autocad/:type/:id"
            element={<CoursePage CourseData={AutoCADData} />}
          />
          <Route
            path="/civil/revit/:type/:id"
            element={<CoursePage CourseData={RevitData} />}
          />
          <Route path="/android/core/learnkotlin" element={<AndroidKotlin />} />
          <Route
            path="/challenge/digitalmarketing"
            element={<FayaDigitalMarketing />}
          />
          <Route path="/challenge/typingmastery" element={<TypingMastery />} />

          <Route path="/courses" element={<Courses />} />
          <Route path="/apisetu" element={<APISetu />} />
          <Route path="/bootcamps" element={<BootcampsHome />} />
          <Route path="/bootcamps/android" element={<Android />} />
          <Route path="/bootcamps/ctf" element={<CTFPage />} />
          <Route path="/bootcamps/rust" element={<Rust />} />
          <Route path="/bootcamps/flutter" element={<Flutter />} />
          <Route path="/bootcamps/javascript" element={<JavaScript />} />
          <Route path="/bootcamps/python" element={<Python />} />
          <Route path="/bootcamps/ai" element={<AI />} />

          <Route path="/bootcamps/ig/:id" element={<IGBootcamp />} />

          {/* <Route path="/kse" element={<KSE />} />
          <Route path="/kse/challenges/:course" element={<Challenges />} />
          <Route
            path="/kse/challenges/:course/:bootcamp/:id"
            element={<IndividualChallenge />}
          />
          <Route
            path="/kse/pow/:course/:bootcamp/:id"
            element={<ProofOfWork />}
          />
          <Route
            path="/kse/pow/:course/:bootcamp/:id/segment/:sid"
            element={<ProofOfWork />}
          /> */}

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
