import React, { useEffect, useRef, useState } from "react";

import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import styles from "./InterestGroup.module.css";

import fvimg from "./assets/fvimg.png";
import { useParams } from "react-router-dom";

import MentorCard from "../../Components/MentorCard/MentorCard";
import NotFound from "../Misc/404/NotFound";
import SheetAPI from "../../Utils/SheetAPI";
import CourseCard from "../../Components/CourseCard/CourseCard";
import TableStyles from "./Dropdown.module.css";


const InterestGroup = ({ setInterest }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setInterest(id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setInterest]);
  let { id, level } = useParams();
  const mainSheetLink = "https://docs.google.com/spreadsheets/d/1F3rdjrJ8cS12oR90ClqNNrw10WgWYOQU0A6G4WHdRbA/edit#gid=1291474495"
  const [igSummary, setIgSummary] = useState({})

  const firstCall = useRef(true)
  const [summary, setSummary] = useState([])
  const [people, setPeople] = useState([])

  const [mentors] = useState([])
  const [studentleads] = useState([])
  useEffect(() => {
    if (firstCall.current) {
      SheetAPI(mainSheetLink, "Summary", setSummary)
      firstCall.current = false
    }
  }, [])
  useEffect(() => {
    if (Object.values(igSummary).length > 0)
      SheetAPI(igSummary.sheet_link, "People", setPeople)
  }, [igSummary])
  useEffect(() => {
    if (people) {
      for (let person of people) {
        let m = mentors.find(mentor => mentor.name === person.name)
        let p = studentleads.find(lead => lead.name === person.name)
        if (person.type === 'Mentor') {
          if (!m?.name)
            mentors.push(person)
        }
        else if (person.type === 'Lead') {
          if (!p?.name)
            studentleads.push(person)
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [people])
  useEffect(() => {
    if (summary) {
      for (let ig of summary) {
        if (ig?.id === id) {
          console.log(ig)
          setIgSummary(ig)
        }
      }
    }
  }, [summary, id])
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
                    height="500px" frameborder="10"
                  ></iframe>

                </div>
              </div>
              {mentors && <CardSection {...mentorIntro}>
                {
                  mentors.map((mentor, index) => (
                    <MentorCard
                      key={index}
                      name={mentor.name}
                      designation={mentor.organization}
                      image={mentor?.photo}
                      linkedIn={mentor.linkedin}
                      twitter={mentor.twitter}
                      github={mentor.github}
                    />
                  ))
                }
              </CardSection>}
              {/* STUDENT LEAD CARDS */}
              {studentleads && <CardSection {...studentLeadIntro}>
                {
                  studentleads.map((leads, index) => (
                    <MentorCard
                      {...leads}
                      key={index}
                      designation={leads.organization}
                      image={leads?.photo}
                      linkedIn={leads.linkedin}
                    />
                  ))
                }
              </CardSection>}
              {/* COURSE STRUCTURE */}
              {courseStructure && <CardSection {...courseIntro}>
                {
                  courseStructure.map((leads, index) => (
                    <CourseCard
                      {...leads}
                      key={index}
                      link={`${id}/${leads.link}`}
                    />
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
const LevelSection = ({ level, sheet_link }) => {
  const index = level === 'Beginner' ? 0 : level === 'Intermediate' ? 1 : level === 'Advanced' ? 2 : ''
  const firstCall = useRef(true), firstCourses = useRef(true)
  const [courses, setCourses] = useState([])
  const [groupedCourses, setGroupedCourses] = useState([])
  useEffect(() => {
    if (sheet_link && firstCall.current) {
      SheetAPI(sheet_link, level, setCourses)
      firstCall.current = false
    }
  }, [sheet_link])
  useEffect(() => {
    if (courses.length && firstCourses.current) {
      const transformedObject = courses.reduce((acc, item) => {
        const { dropdown_header } = item;
        if (!acc[dropdown_header]) {
          acc[dropdown_header] = [];
        }
        acc[dropdown_header].push(item);
        return acc;
      }, {});
      setGroupedCourses(transformedObject)
      firstCourses.current = false
    }
  }, [courses])

  return (
    <>
      <CardSection
        title={`${level} Courses`}
        description={courseStructure[index].desc}
      />
      <div className={styles.second_view_container}>
        {Object.entries(groupedCourses).map(([key, value], index) => (
          <InfoTab key={index} courses={value} title={key} />
        ))}
      </div>
    </>
  )
}
const InfoTab = (
  { key,
    courses,
    title }
) => {
  console.log(courses)
  const [open, setOpen] = useState(false)
  return (
    <div key={key} className={TableStyles.container}>
      <div className={TableStyles.tab}>
        <div className={TableStyles.first} onClick={() => setOpen(!open)}>
          <ion-icon name={`chevron-${open ? 'up' : 'down'}-outline`} />
          <p>{title}</p>
        </div>
        {courses.length} Courses
      </div >
      {open &&
        <table className={TableStyles.tabler}>
          <thead className={TableStyles.thead}>
            <tr className={TableStyles.row}>
              <th className={TableStyles.head}>S/N</th>
              <th className={TableStyles.head}>
                <div className={TableStyles.box}>
                  Name
                </div>
              </th>
              <th className={TableStyles.head}>Hashtag</th>
              <th className={TableStyles.head}>Karma</th>
              <th className={TableStyles.head}>Link</th>
            </tr>
          </thead>
          <tbody className={TableStyles.tbody}>
            {courses.map((course, index) => (
              <tr key={index} className={TableStyles.row}>
                <td className={TableStyles.block}>{index + 1}</td>
                <td className={TableStyles.block}>
                  <div className={TableStyles.box}>
                    {course.course_name}
                  </div>
                </td>
                <td className={TableStyles.block}>{course.hashtag}</td>
                <td className={TableStyles.block}>{course.karma}</td>
                <td className={TableStyles.block}>
                  <a href={course.link} className={TableStyles.linked}
                    target="_blank"
                    rel="noreferrer"
                  >Click here</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </div >
  )
}

const CardSection = ({ title, description, children, }) => {
  return (
    <div className={styles.second_view_container}>
      <div className={styles.second_view}>
        <div className={styles.sv_texts}>
          <p className={styles.sv_heading}>{title}</p>
          <p className={styles.sv_content}>
            {description}
          </p>
          <div className={styles.mentor_container}>
            <div className={styles.mentors}>
              {children}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
const InterestGroupBoard = ({ children, igSummary }) => {
  return (<div className={styles.main_container}>
    <div className={styles.first_view_container}>
      <div className={styles.first_view}>
        <div className={styles.fv_texts}>
          {igSummary &&
            <>
              <p className={styles.fv_heading}>
                {igSummary?.name}
              </p>
              <p className={styles.fv_content}>
                {igSummary?.description}
              </p>
              <p className={styles.officehrs}>
                <span> Office Hours: </span> {igSummary?.office_hour}
                {' @ ' + igSummary?.offlice_place}
              </p>
            </>
          }
        </div>
        <div className={styles.fv_image}>
          <img
            src={fvimg}
            alt="Group Learning pic"
            className={styles.fv_img}
          />
        </div>
      </div>
    </div>
    {children}
  </div>)
}
const mentorIntro = {
  title: 'Mentor Details',
  description: <>
    Have Doubts?Our Mentors are here to help you get all your
    doubts cleared and help you along your journey.Join in for
    our Office Hours and get all your doubts cleared.
  </>
}
const studentLeadIntro = {
  title: 'Interest Group Leads',
  description: <>
    Interest group leads manage the activities and events within
    interest groups and serve as a point of contact for students
    interested in getting involved.Students can connect with
    these leads to learn about opportunities within their
    interests.
  </>
}
const courseIntro = {
  title: 'Course Structure',
  description: <>
    Every subject or skill has some core set of things to be
    learned.Here are a few resources curated by us to
    understand them
  </>
}
const courseStructure = [
  {
    title: 'Beginner Level Courses',
    desc: 'Designed for those with little to no prior knowledge. Covers foundational concepts, terminology, and practical examples to build a strong understanding.',
    link: 'Beginner'
  },
  {
    title: 'Intermediate Level Courses',
    desc: ' Intended for learners with some prior knowledge. Explores complex ideas, theories, and methodologies to bridge the gap between foundational and advanced concepts.',
    link: 'Intermediate'
  },
  {
    title: 'Advanced Level Courses',
    desc: 'Targets experienced individuals. Focuses on specialized and research-oriented topics, aiming to develop expertise and proficiency within the subject area.',
    link: 'Advanced'
  }
]