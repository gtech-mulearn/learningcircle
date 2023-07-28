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
import { courseIntro, courseStructure, mainSheetLink, mentorIntro, parentIntro, studentLeadIntro } from "./IComponents/Info";
import { groupPeople } from "./Utils/People";
import InterestCard from "../../Components/InterestCard/InterestCard";
import SheetAPI from "../../Utils/SheetAPI";
import { handleData } from "./Utils/getInterestGroupsData";

const InterestGroup = ({ setInterest }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setInterest(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setInterest]);
  let { id, sub, level } = useParams();
  const [mainIg, setMainIg] = useState([])
  const [igSummary, setIgSummary] = useState({})
  const [subSummary, setSubSummary] = useState([])
  const [people, setPeople] = useState([])
  const [mentors, setMentors] = useState([])
  const [studentleads, setStudentleads] = useState([])

  useEffect(() => {
    handleData(mainIg, setMainIg, id, sub, setIgSummary, setSubSummary, setPeople)
  }, [id, mainIg, sub])

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
      {igSummary &&
        <InterestGroupBoard igSummary={igSummary} subSheetData={subSummary}>
          {
            id && sub === undefined && level === undefined &&
            <CardSection {...parentIntro} >
              {
                mainIg.map((ig, index) => (
                  ig?.parent === id &&
                  <div key={index}>
                    <InterestCard
                      id={ig?.code}
                      interestgroup={ig?.heading}
                      interestgroupdescription={ig?.desc}
                      link={`${id}/${ig?.code}`}
                    />
                  </div>
                ))
              }
            </CardSection>
          }
          {/* MENTOR CARDS */}
          {id && sub && level === undefined &&
            <>
              {subSummary.length > 0 && <>
                {
                  subSummary[0].iframe_link && <div className={styles.first_view_container}>

                    <div className="iframe">
                      <iframe src={subSummary[0].iframe_link}
                        title="Title"
                        width="100%"
                        height="500px"
                      ></iframe>
                    </div>
                    <div className={styles.credits}>Interest Group Roadmap Credits: <a target="_blank" rel="noreferrer" href={subSummary[0].iframe_link}>Roadmap.sh</a></div>
                  </div>
                }
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
              </>}
              {/* COURSE STRUCTURE */}
              {courseStructure && <CardSection {...courseIntro}>
                {
                  courseStructure.map((leads, index) => (
                    <div key={index}>
                      <CourseCard
                        {...leads}
                        index={index}
                        link={`${sub}/${leads.link}`}
                      />
                    </div>
                  ))
                }
              </CardSection>}
            </>}
          {id && level && sub && <LevelSection level={level} sheet_link={igSummary?.sheetlink} />}
        </InterestGroupBoard >
      }
      {!igSummary && <NotFound />}
      <Footer />
    </>
  );
};

export default InterestGroup;
