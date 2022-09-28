import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import styles from "./InterestGroup.module.css";

import fvimg from "./assets/fvimg.png";
import path from "./assets/path.png";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useParams } from "react-router-dom";
import InterestGroups from "../../LearningCircle/Home/data";
import MentorCard from "../../../Components/MentorCard/MentorCard";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#f6842c",
    fontFamily: "Inter",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontFamily: "Poppins",
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const InterestGroup = ({ setInterest }) => {
  useEffect(() => {
    setInterest(id);
  }, []);
  let { id } = useParams();
  const link = `/create/${id}`;
  const data = InterestGroups.filter(function (interestgroups) {
    return interestgroups.id === id;
  });
  let next = "";
  let previous = "";
  if (data) {
    previous = `/${data[0].pagination[0].id}`;
    next = `/${data[0].pagination[1].id}`;
  }

  console.log(data[0].mentorscard);

  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>{data[0].interestgroup}</p>
              <p className={styles.fv_content}>
                {data[0].interestgroupdescription}
              </p>
              <p className={styles.officehrs}>
                <span>Office Hours</span> {data[0].officetime} at{" "}
                {data[0].officeplace}
              </p>
              <p className={styles.community}>
                <span>Community Partner</span> {data[0].community[0]}
              </p>
              <div className={styles.fv_buttons}>
                {" "}
                <Link to={link}>
                  <button className={styles.create}>
                    Create Learning Circles
                  </button>
                </Link>
              </div>
            </div>

            <div className={styles.fv_image}>
              <img
                src={fvimg}
                alt="Group Learning Image"
                className={styles.fv_img}
              />
            </div>
          </div>
        </div>
        <div className={styles.second_view_container}>
          <div className={styles.second_view}>
            <div className={styles.sv_texts}>
              <p className={styles.sv_heading}>Mentor Details</p>
              <p className={styles.sv_content}>
                Having Doubts?. Our Mentors are here to help you get all your
                doubts cleared and get to going forward. Join in for our Office
                Hours and get all your doubts cleared.
              </p>

              <div className={styles.mentor_container}>
                <div className={styles.mentors}>
                  {data[0].mentorscard.map((mentor) => (
                    <MentorCard
                      name={mentor.name}
                      designation={mentor.designation}
                      image={mentor.image}
                      linkedIn={mentor.linkedIn}
                      interest={mentor.stack ? mentor.stack : ""}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.table_view_container}>
          <div className={styles.table_view}>
            <div className={styles.tav_texts}>
              <p className={styles.tav_heading}>Core Tasks</p>
              <p className={styles.tav_contents}>
                Every subject or skill has some core set of things that has to
                be learn. Here are few resouces curated by us for learning them.
              </p>
            </div>

            <div className={styles.tav_tasks_container}>
              <div className={styles.tav_tasks}>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>Core Course Name</StyledTableCell>
                        <StyledTableCell align="right">
                          Core Course Link
                        </StyledTableCell>
                        {/* <StyledTableCell align="right">
                          Complexity (Out of 5)
                        </StyledTableCell> */}
                        <StyledTableCell align="right">
                          Karma Points
                        </StyledTableCell>
                        {/* <StyledTableCell align="right">Time</StyledTableCell> */}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data[0].corecourses &&
                        data[0].corecourses.map((corecourse) => (
                          <StyledTableRow key={corecourse.name}>
                            <StyledTableCell component="th" scope="row">
                              {corecourse.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              <a
                                href={corecourse.link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <span className={styles.link}>Click Here</span>
                              </a>
                            </StyledTableCell>
                            {/* <StyledTableCell align="right">
                              {corecourse.complexity}
                            </StyledTableCell> */}
                            <StyledTableCell align="right">
                              {corecourse.karma}
                            </StyledTableCell>
                            {/* <StyledTableCell align="right">
                              {corecourse.time}
                            </StyledTableCell> */}
                          </StyledTableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.table_view_container}>
          <div className={styles.table_view}>
            <div className={styles.tav_texts}>
              <p className={styles.tav_heading}>Sub Courses</p>
              <p className={styles.tav_contents}>
                These are the courses which will help to have a much more grasp
                over your domain. Learning these will be always an important
                advantage for your upcoming journey.
              </p>
            </div>

            <div className={styles.tav_tasks_container}>
              <div className={styles.tav_tasks}>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>Sub Courses Name</StyledTableCell>
                        <StyledTableCell align="right">
                          Sub Courses Link
                        </StyledTableCell>
                        {/* <StyledTableCell align="right">
                          Complexity (Out of 5)
                        </StyledTableCell> */}
                        <StyledTableCell align="right">
                          Karma Points
                        </StyledTableCell>
                        {/* <StyledTableCell align="right">Time</StyledTableCell> */}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data[0].subcourses.map((subcourse) => (
                        <StyledTableRow key={subcourse.name}>
                          <StyledTableCell component="th" scope="row">
                            {subcourse.name}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            <a
                              href={subcourse.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className={styles.link}>Click Here</span>
                            </a>
                          </StyledTableCell>
                          {/* <StyledTableCell align="right">
                            {subcourse.complexity}
                          </StyledTableCell> */}
                          <StyledTableCell align="right">
                            {subcourse.karma}
                          </StyledTableCell>
                          {/* <StyledTableCell align="right">
                            {subcourse.time}
                          </StyledTableCell> */}
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
            <div className={styles.learning_paths}>
              <div className={styles.sv_texts}>
                <p className={styles.sv_heading}>Learning Paths</p>
                <p className={styles.sv_content}>
                  Having a plan/roadmap before to reach the destination on time
                  is a great advantage. Here are some learning paths for you to
                  follow.
                </p>
                <ul className={styles.sv_lists}>
                  {data[0].learningpaths.map((learningpath) => (
                    <li className={styles.list_item}>
                      <a
                        href={learningpath.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {learningpath.name} -{" "}
                        <span className={styles.link}>Click Here</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.sv_texts}>
                <p className={styles.sv_heading}>Opportunities</p>
                <p className={styles.sv_content}>
                  Learning a new skill always brings in new opportunties. Here
                  are some possible opportunties/roles you could grab by
                  learning this skill.
                </p>
                <ul className={styles.sv_lists}>
                  {data[0].opportunities.map((opportunity) => (
                    <li className={styles.list_item}>{opportunity}</li>
                  ))}
                </ul>
              </div>
            </div>
            {data[0].challenges && (
              <div className={styles.learning_paths}>
                <div className={styles.sv_texts}>
                  <p className={styles.sv_heading}>MuChallenges</p>
                  <p className={styles.sv_content}>
                  Learning by Solving challeges is much more interesting than simply learning them. Here we have a challenge to solve and if you are ready to learn, Then come let get three lakhs buissness into production.
                  </p>
                  <ul className={styles.sv_lists}>    
                      <li className={styles.list_item}>
                        <a
                          href='/challenge/web'
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          3 Lakhs Buissness in Production - 
                          <span className={styles.link}> Click Here</span>
                        </a>
                      </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={styles.next_previous}>
          <Link to={previous}>
            <div className={styles.previous}>
              <p className={styles.pretext}>{data[0].pagination[0].name}</p>
            </div>
          </Link>
          <Link to={next}>
            <div className={styles.next}>
              <p className={styles.nexttext}>{data[0].pagination[1].name}</p>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InterestGroup;
