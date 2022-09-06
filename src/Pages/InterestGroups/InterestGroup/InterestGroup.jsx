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
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
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

        <div className={styles.thrid_view_container}>
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
            <div className={styles.tv_image}>
              <img src={path} alt="" className={styles.tv_img} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InterestGroup;
