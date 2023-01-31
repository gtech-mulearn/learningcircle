import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import styles from "./InterestGroup.module.css";

import fvimg from "./assets/fvimg.png";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useParams } from "react-router-dom";
import InterestGroups from "../LearningCircles/Home/data";
import MentorCard from "../../Components/MentorCard/MentorCard";
import NotFound from "../Misc/404/NotFound";

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

const InterestGroup = ({ setInterest }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setInterest(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setInterest]);
  let { id } = useParams();
  const link = `/create/${id}`;
  const data = InterestGroups.filter(function (interestgroups) {
    return interestgroups.id === id;
  });
  let next = "";
  let previous = "";
  if (data && data[0]) {
    previous = `/${data[0].pagination[0].id}`;
    next = `/${data[0].pagination[1].id}`;
  }

  return (
    <>
      <Navbar />
      {data && data[0] && (
        <div className={styles.main_container}>
          <div className={styles.first_view_container}>
            <div className={styles.first_view}>
              <div className={styles.fv_texts}>
                {data[0].interestgroup === "Entrepreneurship" && (
                  <p className={styles.fv_heading_entre}>
                    {data[0].interestgroup}
                  </p>
                )}
                {!(data[0].interestgroup === "Entrepreneurship") && (
                  <p className={styles.fv_heading}>{data[0].interestgroup}</p>
                )}

                <p className={styles.fv_content}>
                  {data[0].interestgroupdescription}
                </p>

                {data[0].officetime && (
                  <p className={styles.officehrs}>
                    <span>Office Hours: </span> {data[0].officetime}
                    {data[0].officeplace}
                  </p>
                )}
                {data[0].thinktanktime && (
                  <p className={styles.officehrs}>
                    <span>Think Tank Meet : </span> {data[0].thinktanktime}
                    {data[0].thinktankplace}
                  </p>
                )}
                {data[0].community[0] && (
                  <p className={styles.community}>
                    <span>Community Partner: </span> {data[0].community[0]}
                  </p>
                )}

                {!data[0].comingsoon && (
                  <div className={styles.fv_buttons}>
                    <Link to={link}>
                      <button className={styles.create}>
                        Create Learning Circles
                      </button>
                    </Link>

                    <a
                      href="https://learn.mulearn.org/searchcircles"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button class={styles.search_button}>
                        Search Existing Circles
                      </button>
                    </a>
                  </div>
                )}
                {data[0].comingsoon && (
                  <div className={styles.fv_buttons}>
                    <button className={styles.create}>Coming Soon</button>
                  </div>
                )}
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

          {data[0].mentors && data[0].mentors[0] && (
            <div className={styles.second_view_container}>
              <div className={styles.second_view}>
                <div className={styles.sv_texts}>
                  <p className={styles.sv_heading}>Mentor Details</p>
                  <p className={styles.sv_content}>
                    Have Doubts? Our Mentors are here to help you get all your
                    doubts cleared and help you along your journey. Join in for
                    our Office Hours and get all your doubts cleared.
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
          )}

          {data[0].leads && data[0].leads[0] && (
            <div className={styles.second_view_container}>
              <div className={styles.second_view}>
                <div className={styles.sv_texts}>
                  <p className={styles.sv_heading}>Interest Group Leads</p>
                  <p className={styles.sv_content}>
                    Interest group leads manage the activities and events within
                    interest groups and serve as a point of contact for students
                    interested in getting involved. Students can connect with
                    these leads to learn about opportunities within their
                    interests.
                  </p>

                  <div className={styles.mentor_container}>
                    <div className={styles.mentors}>
                      {data[0].leads.map((lead) => (
                        <MentorCard
                          name={lead.name}
                          designation={lead.college}
                          image={lead.images}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {data[0].corecourses && data[0].corecourses[0] && (
            <div className={styles.table_view_container}>
              <div className={styles.table_view}>
                <div className={styles.tav_texts}>
                  <p className={styles.tav_heading}>Core Tasks</p>
                  <p className={styles.tav_contents}>
                    Every subject or skill has some core set of things to be
                    learned. Here are a few resources curated by us to
                    understand them
                  </p>
                </div>

                <div className={styles.tav_tasks_container}>
                  <div className={styles.tav_tasks}>
                    <TableContainer component={Paper}>
                      <Table
                        sx={{ minWidth: 700 }}
                        aria-label="customized table"
                      >
                        <TableHead>
                          <TableRow>
                            <StyledTableCell>
                              Core Course's Name
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              Core Course's Link
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
                                    <span className={styles.link}>
                                      Click Here
                                    </span>
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
          )}

          <div className={styles.table_view_container}>
            <div className={styles.table_view}>
              {data[0].subcourses && data[0].subcourses[0] && (
                <div className={styles.tav_texts}>
                  <p className={styles.tav_heading}>Sub Courses</p>
                  <p className={styles.tav_contents}>
                    These courses will help you have a much better grasp over
                    the domain. Learning these will always be an important
                    advantage for your upcoming journey.
                  </p>
                </div>
              )}

              {data[0].subcourses && data[0].subcourses[0] && (
                <div className={styles.tav_tasks_container}>
                  <div className={styles.tav_tasks}>
                    <TableContainer component={Paper}>
                      <Table
                        sx={{ minWidth: 700 }}
                        aria-label="customized table"
                      >
                        <TableHead>
                          <TableRow>
                            <StyledTableCell>Sub Course's Name</StyledTableCell>
                            <StyledTableCell align="right">
                              Sub Course's Link
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
                                  <span className={styles.link}>
                                    Click Here
                                  </span>
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
              )}

              <div className={styles.learning_paths}>
                {data[0].learningpaths && data[0].learningpaths[0] && (
                  <div className={styles.sv_texts}>
                    <p className={styles.sv_heading}>Learning Paths</p>
                    <p className={styles.sv_content}>
                      Having a plan/roadmap before to reach the destination on
                      time is a great advantage. Here are some learning paths
                      for you to follow.
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
                )}
                {data[0].opportunities && data[0].opportunities[0] && (
                  <div className={styles.sv_texts}>
                    <p className={styles.sv_heading}>Opportunities</p>
                    <p className={styles.sv_content}>
                      Learning a new skill always brings in new opportunities.
                      Here are some possible opportunities/roles you could grab
                      by learning this skill.
                    </p>
                    <ul className={styles.sv_lists}>
                      {data[0].opportunities.map((opportunity) => (
                        <li className={styles.list_item}>{opportunity}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className={styles.learning_paths}>
                {data[0].people && (
                  <div className={styles.sv_texts}>
                    <p className={styles.sv_heading}>Top People to Follow</p>
                    <p className={styles.sv_content}>
                      These are list of people you should be following inorder
                      to learn as well as stay updated while learning web
                      development
                    </p>
                    <ul className={styles.sv_lists}>
                      {data[0].people.map((people) => (
                        <li className={styles.list_item}>
                          <a
                            href={people.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {people.name} -{" "}
                            <span className={styles.link}>Click Here</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {data[0].blogs && (
                  <div className={styles.sv_texts}>
                    <p className={styles.sv_heading}>Top Blogs to Follow</p>
                    <p className={styles.sv_content}>
                      Learning through Reading is a great method as it has many
                      advantages. There are multiple Blogs out there with
                      quailty content and here are few of them.
                    </p>
                    <ul className={styles.sv_lists}>
                      {data[0].blogs.map((blog) => (
                        <li className={styles.list_item}>
                          <a
                            href={blog.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {blog.name} -{" "}
                            <span className={styles.link}>Click Here</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              {data[0].challenges && (
                <div className={styles.learning_paths}>
                  <div className={styles.sv_texts}>
                    <p className={styles.sv_heading}>μChallenges</p>
                    <p className={styles.sv_content}>
                      Solving challenges while learning can be more engaging. A
                      specific problem presents an opportunity for hands-on
                      learning and skill development. If you are ready to take
                      on this learning approach, there is a challenge waiting
                      for you.
                    </p>
                    {data[0].challenges.map((challenge) => (
                      <ul className={styles.sv_lists}>
                        <li className={styles.list_item}>
                          <b>Challenge {challenge.id}: </b>
                          {challenge.name}
                          {challenge.link && (
                            <a
                              href={challenge.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className={styles.link}>
                                {" "}
                                :&nbsp;Click Here
                              </span>
                            </a>
                          )}
                        </li>
                      </ul>
                    ))}
                  </div>
                </div>
              )}
              {data[0].keywords && (
                <div className={styles.keywords_container}>
                  <p className={styles.sv_heading}>Top Keywords</p>
                  <p className={styles.sv_content}>
                    Listed below are the top keywords that you should be looking
                    for while learning this stack. Happy Learning!.
                  </p>
                  {data[0].keywords.map((keyword) => (
                    <div className={styles.box}>{keyword.keyword}</div>
                  ))}
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
      )}
      {!(data && data[0]) && <NotFound />}
      <Footer />
    </>
  );
};

export default InterestGroup;
