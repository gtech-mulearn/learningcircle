import React from "react";
import styles from "./IndividualChallenge.module.css";

import Navbar from "../../../../Components/Navbar/Navbar";
import Footer from "../../../../Components/Footer/Footer";

import { useParams } from "react-router-dom";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import AIStructure from "../Data/ai";
import WebStructure from "../Data/web";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#f6842c",
    fontFamily: "Noto Sans",
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

const IndividualChallenge = () => {
  const { course, bootcamp, id } = useParams();
  const data = (function () {
    if (course === "ai") {
      return AIStructure;
    } else if (course === "web") {
      return WebStructure;
    }
  })();

  // To group the data to get courseid from id
  const groupedData = data
    .filter((obj) => obj.bootcamp === bootcamp)
    .map((obj) => obj.courseid)
    .filter((value, index, self) => self.indexOf(value) === index);
  const courseid = groupedData[id];

  // To group the data according to bootcamp
  const courseGroup = data.filter(
    (obj) => obj.bootcamp === bootcamp && obj.courseid === courseid
  );

  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>{courseGroup[0].name}</p>
              <p className={styles.fv_content}>
                {courseGroup[0].courseContent}
              </p>
            </div>
            <div className={styles.fv_image}>
              <img
                src="/assets/challenge/mulanding.gif"
                alt=""
                className={styles.fv_img}
              />
            </div>
          </div>
        </div>
        <div className={styles.second_view_container}>
          <div className={styles.second_view}>
            <div className={styles.sv_texts}>
              <p className={styles.tav_heading}>Details</p>
              <p className={styles.officehrs}>
                <span>Bootcamp : </span>{" "}
                {courseGroup[0].bootcamp.charAt(0).toUpperCase() +
                  courseGroup[0].bootcamp.slice(1)}
              </p>
              {courseGroup[0].time && (
                <p className={styles.officehrs}>
                  <span>Time : </span> {courseGroup[0].time}
                </p>
              )}
              {courseGroup[0].totalKarma && (
                <p className={styles.officehrs}>
                  <span>Total Karma Points : </span>
                  {courseGroup[0].totalKarma}
                </p>
              )}
              {courseGroup[0].syllabus && (
                <p className={styles.officehrs}>
                  <span>Syllabus : </span>
                  {courseGroup[0].syllabus.replace(/\n/g, ", ")}
                </p>
              )}
              {courseGroup[0].complexity && (
                <p className={styles.officehrs}>
                  <span>Complexity : </span>
                  {courseGroup[0].complexity}
                </p>
              )}
              {courseGroup[0].proofOfWork && (
                <p className={styles.officehrs}>
                  <span>Proof Of Work: </span>
                  Submit Certificate and a project that solves an industrial
                  problem
                  <a
                    href={`/kse/pow/${course}/${bootcamp}/${id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={styles.link}> :&nbsp;Click Here</span>
                  </a>
                </p>
              )}
              {!courseGroup[0].segments && courseGroup[0].courseLink && (
                <a
                  href={courseGroup[0].courseLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className={styles.create}>Course Link</button>
                </a>
              )}
            </div>
          </div>
        </div>

        {courseGroup[0].segments && (
          <div className={styles.table_view_container}>
            <div className={styles.table_view}>
              <div className={styles.tav_tasks_container}>
                <div className={styles.tav_texts}>
                  <p className={styles.tav_heading}>Segments</p>
                  <p className={styles.tav_contents}>
                    These courses will help you have a much better grasp over
                    the domain. Learning these will always be an important
                    advantage for your upcoming journey.
                  </p>
                </div>
                <div className={styles.tav_tasks}>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                      <TableHead>
                        <TableRow>
                          <StyledTableCell>Segment</StyledTableCell>
                          <StyledTableCell align="right">
                            Hashtag
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            Course's Link
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            Karma Points
                          </StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {courseGroup.map((courses) => (
                          <StyledTableRow key={courses.courseid}>
                            <StyledTableCell component="th" scope="row">
                              {courses.segments}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {courses.hashtags}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              <a
                                href={courses.courseLink}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <span className={styles.link}>Click Here</span>
                              </a>
                            </StyledTableCell>

                            <StyledTableCell align="right">
                              {courses.segmentKarma}
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
        )}
      </div>

      <Footer />
    </>
  );
};

export default IndividualChallenge;
