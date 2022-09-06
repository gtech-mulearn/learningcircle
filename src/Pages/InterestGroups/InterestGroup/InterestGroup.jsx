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

function createData(name, link, complexity, karma, time) {
  return { name, link, complexity, karma, time };
}

const enablementtasks = [
  createData(
    "Create a Survey Form",
    "https://www.notion.so/mulearn/Survey-From-139baee23b1344cb82183c9495156e81",
    3,
    200,
    "-"
  ),
  createData(
    "Recreate the given image using HTML CSS",
    "https://web.fe.up.pt/~arestivo/page/exercises/css/",
    3,
    200,
    "-"
  ),
];

const corecourses = [
  createData(
    "HTML and CSS",
    "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
    2,
    400,
    "-"
  ),
  createData(
    "Javascript Algorithms & Datastructure",
    "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/",
    3,
    400,
    "-"
  ),
  createData(
    "Frontend Development Libraries",
    "https://www.freecodecamp.org/learn/front-end-development-libraries/",
    3,
    400,
    "-"
  ),
  createData(
    "Backebd Development & APIs",
    "https://www.freecodecamp.org/learn/back-end-development-and-apis/#back-end-development-and-apis-projects",
    3,
    400,
    "-"
  ),
];

const subcourses = [
  createData(
    "Git & Github",
    "https://www.classcentral.com/course/udacity-version-control-with-git-8430",
    2,
    "-",
    "-"
  ),
  createData(
    "Application Programming Interface (API)",
    "https://youtu.be/GZvSYJDk-us",
    3,
    "-",
    "-"
  ),
];

const InterestGroup = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>Web Development</p>
              <p className={styles.fv_content}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                iste vitae natus facere vel amet enim doloremque, voluptate
                aliquam animi adipisci neque ex debitis odio laborum blanditiis
                fugiat eos tempore.
              </p>
              <p className={styles.officehrs}>
                <span>Office Hours</span> Every Sunday 7:30 PM at Discord Lobby
              </p>
              <p className={styles.community}>
                <span>Community Partner</span> Pygrammers
              </p>
              <div className={styles.fv_buttons}>
                <button className={styles.create}>
                  Create Learning Circles
                </button>
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

        <div className={styles.third_view_container}>
          <div className={styles.third_view}>
            <div className={styles.tv_texts}>
              <p className={styles.tv_heading}>Learning Paths</p>
              <p className={styles.tv_content}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                consequatur blanditiis mollitia tempora porro possimus.
              </p>
              <ul className={styles.tv_lists}>
                <li className={styles.list_item}>
                  <a
                    href="https://roadmap.sh/frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    FrontEnd Learning Path
                  </a>
                </li>
                <li className={styles.list_item}>
                  <a
                    href="http://roadmap.sh/backend"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Backend Learning Path
                  </a>
                </li>
                <li className={styles.list_item}>
                  <a
                    href="https://denic.hashnode.dev/you-want-to-learn-html-and-css-but-dont-know-where-to-get-started"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Complete Frontend Roadmap
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.tv_texts}>
              <p className={styles.tv_heading}>Other Interest Groups</p>
              <p className={styles.tv_content}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                consequatur blanditiis mollitia tempora porro possimus.
              </p>
              <div className={styles.ilinks}>
                <div className={styles.ilink}>UI/UX</div>
                <div className={styles.ilink}>Product Management</div>
                <div className={styles.ilink}>IOT</div>
                <div className={styles.ilink}>Android Developement</div>

                <div className={styles.ilink}>Cyber Security</div>
              </div>
            </div>
            <div className={styles.tv_texts}>
              <p className={styles.tv_heading}>Mentor Details</p>
              <p className={styles.tv_content}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                consequatur blanditiis mollitia tempora porro possimus.
              </p>
              <ul className={styles.tv_lists}>
                <li className={styles.list_item}>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Shaheen Hyder - Pygrammers
                  </a>
                </li>
                <li className={styles.list_item}>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Shahanad - Pygrammers
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.second_view_container}>
          <div className={styles.second_view}>
            <div className={styles.sv_texts}>
              <p className={styles.sv_heading}>Basic Enablement Tasks</p>
              <p className={styles.sv_contents}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                necessitatibus.
              </p>
            </div>

            <div className={styles.sv_tasks_container}>
              <div className={styles.sv_tasks}>
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
                      {enablementtasks.map((enablementtask) => (
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

        <div className={styles.second_view_container}>
          <div className={styles.second_view}>
            <div className={styles.sv_texts}>
              <p className={styles.sv_heading}>Core Tasks</p>
              <p className={styles.sv_contents}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                necessitatibus.
              </p>
            </div>

            <div className={styles.sv_tasks_container}>
              <div className={styles.sv_tasks}>
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
                      {corecourses.map((corecourse) => (
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

        <div className={styles.second_view_container}>
          <div className={styles.second_view}>
            <div className={styles.sv_texts}>
              <p className={styles.sv_heading}>Sub Courses</p>
              <p className={styles.sv_contents}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                necessitatibus.
              </p>
            </div>

            <div className={styles.sv_tasks_container}>
              <div className={styles.sv_tasks}>
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
                      {subcourses.map((subcourse) => (
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
