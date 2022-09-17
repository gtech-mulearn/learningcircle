import React from "react";

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

const InterestGroup = () => {
  let { id } = useParams();
  const data = InterestGroups.filter(function (interestgroups) {
    return interestgroups.id === id;
  });
  console.log(data);
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
                <a href="/create">
                  <button className={styles.create}>
                    Create Learning Circles
                  </button>
                </a>
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
              <p className={styles.sv_heading}>Learning Paths</p>
              <p className={styles.sv_content}>
                Having a plan/roadmap before to reach the destination on time is
                a great advantage. Here are some learning paths for you to
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
                      {learningpath.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.sv_texts}>
              <p className={styles.sv_heading}>Mentor Details</p>
              <p className={styles.sv_content}>
                Having Doubts?. Our Mentors are here to help you get all your
                doubts cleared and get to going forward. Join in for our Office
                Hours and get all your doubts cleared.
              </p>
              <ul className={styles.sv_lists}>
                {data[0].mentors.map((mentor) => (
                  <li className={styles.list_item}>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      {mentor}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.table_view_container}>
          <div className={styles.table_view}>
            <div className={styles.tav_texts}>
              <p className={styles.tav_heading}>Basic Enablement Tasks</p>
              <p className={styles.tav_contents}>
                These are the basic enablement tasks which will help you gain
                the basic knowledege about your domain and will help you gain
                some of the basic skills which is useful for your upcoming
                journey.
              </p>
            </div>

            <div className={styles.tav_tasks_container}>
              <div className={styles.tav_tasks}>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>Enablement Task Name</StyledTableCell>
                        <StyledTableCell align="right">
                          Enablement Task Link
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          Complexity (Out of 5)
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          Karma Points
                        </StyledTableCell>
                        <StyledTableCell align="right">Time</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data[0].basicenablementtasks.map((enablementtask) => (
                        <StyledTableRow key={enablementtask.name}>
                          <StyledTableCell component="th" scope="row">
                            {enablementtask.name}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            <a
                              href={enablementtask.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Click Here
                            </a>
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {enablementtask.complexity}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {enablementtask.karma}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {enablementtask.time}
                          </StyledTableCell>
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
                        <StyledTableCell align="right">
                          Complexity (Out of 5)
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          Karma Points
                        </StyledTableCell>
                        <StyledTableCell align="right">Time</StyledTableCell>
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
                                Click Here
                              </a>
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {corecourse.complexity}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {corecourse.karma}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {corecourse.time}
                            </StyledTableCell>
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
                        <StyledTableCell align="right">
                          Complexity (Out of 5)
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          Karma Points
                        </StyledTableCell>
                        <StyledTableCell align="right">Time</StyledTableCell>
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
                              Click Here
                            </a>
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {subcourse.complexity}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {subcourse.karma}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {subcourse.time}
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InterestGroup;
