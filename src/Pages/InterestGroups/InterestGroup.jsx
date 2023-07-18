import React, { useEffect, useState } from "react";

import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import styles from "./InterestGroup.module.css";

import { useParams } from "react-router-dom";

import MentorCard from "../../Components/MentorCard/MentorCard";
import NotFound from "../Misc/404/NotFound";
import CourseCard from "../../Components/CourseCard/CourseCard";
import LevelSection from "./IComponents/LevelSection/Level";
import CardSection from "./IComponents/ListCards/CardSection";
import InterestGroupBoard from "./IComponents/Board/Board";
import { courseIntro, courseStructure, mentorIntro, studentLeadIntro } from "./IComponents/Info";
import getInterestGroupsData from "./Utils/getInterestGroupsData";
import getPeopleData, { groupPeople } from "./Utils/People";

const InterestGroup = ({ setInterest }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setInterest(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setInterest]);
  let { id, level } = useParams();
  const [igSummary, setIgSummary] = useState({})

  const [summary, setSummary] = useState([])
  const [people, setPeople] = useState([])

  const [mentors, setMentors] = useState([])
  const [studentleads, setStudentleads] = useState([])
  useEffect(() => {
    getInterestGroupsData(summary, id, setSummary, setIgSummary)
  }, [summary, id])
  useEffect(() => {
    getPeopleData(igSummary, level, setPeople)
  }, [igSummary, level])
  useEffect(() => {
    if (people.length) {
      groupPeople(people, setMentors, setStudentleads)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [people.length])
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      <Navbar />
      {summary &&
        <InterestGroupBoard igSummary={igSummary}>

          {/* MENTOR CARDS */}
          {level === undefined &&
            <>
              <div className={styles.first_view_container}>

                <div className="iframe">
                  <iframe src={igSummary.iframe_link}
                    title="Title"
                    width="100%"
                    height="500px"
                  ></iframe>

                </div>
              </div>
              {mentors && <CardSection {...mentorIntro}>
                {
                  mentors.map((mentor, index) => (
                    <div key={index}>
                      <MentorCard
                        name={mentor.name}
                        designation={mentor.organization}
                        image={mentor?.photo}
                        linkedIn={mentor.linkedin}
                        twitter={mentor.twitter}
                        github={mentor.github}
                      />
                    </div>
                  ))
                }
              </CardSection>}
              {/* STUDENT LEAD CARDS */}
              {studentleads && <CardSection {...studentLeadIntro}>
                {
                  studentleads.map((leads, index) => (
                    <div key={index}>
                      <MentorCard
                        {...leads}
                        designation={leads.organization}
                        image={leads?.photo}
                        linkedIn={leads.linkedin}
                      />

                    </div>))
                }
              </CardSection>}
              {/* COURSE STRUCTURE */}
              {courseStructure && <CardSection {...courseIntro}>
                {
                  courseStructure.map((leads, index) => (
                    <div key={index}>
                      <CourseCard
                        {...leads}
                        index={index}
                        link={`${id}/${leads.link}`}
                      />
                    </div>
                  ))
                }
              </CardSection>}
            </>}
          {level && <LevelSection level={level} sheet_link={igSummary?.sheet_link} />}
        </InterestGroupBoard >
      }
      {!summary && <NotFound />}
      <Footer />
    </>
  );
};

export default InterestGroup;