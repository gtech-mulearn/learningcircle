import React, { useEffect, useState } from "react"
import styles from "./TypingMastery.module.css"
import Navbar from "../../../../../Components/Navbar/Navbar"
import Footer from "../../../../../Components/Footer/Footer"
import axios from "axios"

import { styled } from "@mui/material/styles"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell, { tableCellClasses } from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"

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
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}))

const TypingMastery = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get(
        "https://opensheet.elk.sh/1TeGv6a8jsIRX_7wRyokic_EatIbJ8a0TwMcziYDdp84/LeaderboardSheet"
      )
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  // Sort the data by number of days and last day participants
  const sortedData = data.sort((a, b) => {
    const aDays = Object.keys(a).filter((key) => key.startsWith("day")).length
    const bDays = Object.keys(b).filter((key) => key.startsWith("day")).length
    if (aDays !== bDays) {
      return bDays - aDays
    } else {
      const aLast = a[`day${aDays}`]
      const bLast = b[`day${bDays}`]
      return bLast - aLast
    }
  })

  // Create an array of day labels
  const days = Array.from(Array(30).keys()).map((i) => `day${i + 1}`)

  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>
                <span>µLearn</span> Typing Mastery
              </p>
              <p className={styles.fv_content}>
                Ready for a typing challenge that will improve your speed and
                grit? Join our 30_day typing challenge and become a keyboard
                ninja!
              </p>
            </div>

            <div className={styles.fv_image}>
              <img
                src="/assets/challenge/typing.gif"
                alt="Group Learning Pic"
                className={styles.fv_img}
              />
            </div>
          </div>
        </div>
        <div className={styles.second_view_container}>
          <div className={styles.sv_texts}>
            <p className={styles.sv_heading}>Inter-College Leaderboard</p>
          </div>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Rank</StyledTableCell>

                  <StyledTableCell sx={{ minWidth: 450 }} align="left">
                    College Name
                  </StyledTableCell>

                  {days.map((day) => (
                    <StyledTableCell align="right">{day}</StyledTableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {sortedData.map((college, index) => (
                  <StyledTableRow key={college.name}>
                    <StyledTableCell component="th" scope="row">
                      {index + 1}
                    </StyledTableCell>
                    <StyledTableCell sx={{ minWidth: 450 }} align="left">
                      {college.name}
                    </StyledTableCell>

                    {days.map((day) => (
                      <StyledTableCell align="right">
                        {college[day]}
                      </StyledTableCell>
                    ))}
                    <StyledTableCell align="right">
                      {college[`day${days.length}`]}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default TypingMastery
