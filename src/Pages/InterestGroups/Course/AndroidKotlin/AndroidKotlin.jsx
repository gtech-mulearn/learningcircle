import Footer from "../../../../Components/Footer/Footer";
import Navbar from "../../../../Components/Navbar/Navbar";
import styles from "./AndroidKotlin.module.css";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import proejcts from "./data.json";

const AndroidKotlin = () => {
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

  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>Introduction to Kotlin</p>

              <p className={styles.fv_content}>
                Learn the Kotlin programming language in this introduction to
                Kotlin. Kotlin is a general purpose, open source, statically
                typed “pragmatic” programming language. It is used for many
                things, including Android development.
              </p>
            </div>

            <div className={styles.fv_image}>
              <img
                src="/assets/icourses/fvimg.gif"
                alt="Group Learning"
                className={styles.fv_img}
              />
            </div>
          </div>

          <div className={styles.second_view_container}>
            <div className={styles.second_view}>
              <p className={styles.sv_heading}>
                Learning <span>Materials</span>
              </p>
              <p className={styles.sv_content}>
                Here are some learning resources that you may use to master the
                fundamentals of Kotlin.
              </p>
              <div className={styles.learn_cards}>
                <div className={styles.learn_card}>
                  <div>
                    <p className={styles.lc_header}>
                      Official Kotlin Documentation
                    </p>
                    <p className={styles.lc_description}>
                      Kotlin Documentation is a website that offers a
                      comprehensive guide to learning the Kotlin programming
                      language, including tutorials, examples, and
                      documentation. It's a great resource for both beginners
                      and experienced programmers."
                    </p>
                  </div>
                  <a
                    href="https://kotlinlang.org/docs/getting-started.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className={styles.view_course}>
                      View Documentation
                    </button>
                  </a>
                </div>
                <div className={styles.learn_card}>
                  <div>
                    <p className={styles.lc_header}>
                      Freecodecamp Tutorial Video
                    </p>
                    <p className={styles.lc_description}>
                      Learn Kotlin with this comprehensive tutorial video from
                      freecodecamp. Suitable for both beginners and experienced
                      programmers, it covers a wide range of topics and takes
                      you through the process of building your own programs.
                    </p>
                  </div>
                  <a
                    href="https://www.youtube.com/watch?v=F9UC9DY-vIU"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className={styles.view_course}>
                      View Tutorial Video
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.second_view_container}>
            <div className={styles.second_view}>
              <div className={styles.sv_texts}>
                <p className={styles.sv_heading}>
                  Course <span>Assignment</span>
                </p>
                <p className={styles.sv_content}>
                  Now that you have learnt the basics of Kotlin, it’s time to
                  test yourselves by building few real-world applications. Below
                  listed are few projects according to their level of
                  difficulty. Complete each one and earn 200 karma points for
                  each.
                </p>
              </div>

              <p className={styles.sv_heading}>
                <span>Beginner</span> Projects
              </p>

              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Project Name</StyledTableCell>
                      <StyledTableCell align="right">
                        Tutorial Link
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        Discord Tags
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        Karma Points
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {proejcts &&
                      proejcts.beginner.map((project) => (
                        <StyledTableRow key={project.name}>
                          <StyledTableCell component="th" scope="row">
                            {project.name}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className={styles.link}>Click Here</span>
                            </a>
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {project.tag}
                          </StyledTableCell>

                          <StyledTableCell align="right">
                            {project.karma}
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <p className={styles.sv_heading}>
                <span>Intermediate</span> Projects
              </p>

              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Project Name</StyledTableCell>
                      <StyledTableCell align="right">
                        Tutorial Link
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        Discord Tags
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        Karma Points
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {proejcts &&
                      proejcts.intermediate.map((project) => (
                        <StyledTableRow key={project.name}>
                          <StyledTableCell component="th" scope="row">
                            {project.name}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className={styles.link}>Click Here</span>
                            </a>
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {project.tag}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {project.karma}
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <p className={styles.sv_heading}>
                <span>Advanced</span> Projects
              </p>

              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Project Name</StyledTableCell>
                      <StyledTableCell align="right">
                        Tutorial Link
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        Discord Tags
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        Karma Points
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {proejcts &&
                      proejcts.expert.map((project) => (
                        <StyledTableRow key={project.name}>
                          <StyledTableCell component="th" scope="row">
                            {project.name}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className={styles.link}>Click Here</span>
                            </a>
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {project.tag}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {project.karma}
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>

          <div className={styles.second_view_container}>
            <div className={styles.second_view}>
              <div className={styles.sv_texts}>
                <p className={styles.sv_heading}>
                  Once <span>Completed</span>
                </p>
                <p className={styles.sv_content}>
                  After completion of each assignment, post the Repository url
                  in the <b> #android-development</b> channel of the µLearn
                  Discord server with the respective hastags to avail karma
                  points
                </p>
              </div>

              <div className={styles.sample_container}>
                <p className={styles.sample_header}>Example Message</p>
                <p className={styles.sample_message}>
                  Hey, I have complete the Weather App using Kotlin, Here the
                  Github Repo Link https://github.com/username/reponame
                  #kotlin-weather-app
                </p>
              </div>
            </div>
          </div>

          <div className={styles.third_view_container}>
            <div className={styles.third_view}>
              <div className={styles.sample_container1}>
                <p className={styles.sv_heading}>
                  <span>Need </span> Help ?
                </p>
                <p className={styles.sample_message}>
                  If you are new to µLearn, do checkout
                  <a
                    href="https://mulearn.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    &nbsp;mulearn.org
                  </a>{" "}
                  and join us. Watch this video if you are confused with Discord
                  Onboarding.
                  <a
                    href="https://youtu.be/7Oj88zF2jY0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    &nbsp;Click Here to Watch
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AndroidKotlin;
