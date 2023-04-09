import React, { useEffect, useState } from "react"
import styles from "./TypingMastery.module.css"
import Navbar from "../../../../../Components/Navbar/Navbar"
import Footer from "../../../../../Components/Footer/Footer"
import axios from "axios"

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

  // Calculate drop percentage for each college
  const collegesWithDropPercentageAndCurrentCount = data.map((college) => {
    const numStudentsFirstDay = parseInt(college.day1)
    let numStudentsLastDay = 0
    let lastFilledDay = 1
    for (let i = 2; i <= 10; i++) {
      if (college[`day${i}`]) {
        numStudentsLastDay = parseInt(college[`day${i}`])
        lastFilledDay = i
      } else {
        break
      }
    }
    const dropPercentage =
      numStudentsFirstDay !== 0
        ? ((numStudentsFirstDay - numStudentsLastDay) / numStudentsFirstDay) *
          100
        : 0
    const currentCount =
      college[`day${lastFilledDay}`] !== undefined
        ? parseInt(college[`day${lastFilledDay}`])
        : 0
    return {
      ...college,
      dropPercentage,
      currentCount,
      startingCount: numStudentsFirstDay,
    }
  })

  // Sort colleges based on drop percentage
  const sortedColleges = collegesWithDropPercentageAndCurrentCount.sort(
    (a, b) => a.dropPercentage - b.dropPercentage
  )

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
          <div className={styles.second_view}>
            <div className={styles.sv_texts}>
              <p className={styles.sv_heading}>
                The Importance of Completing the Typing Challenge
              </p>
            </div>
            <ul className={styles.list_container}>
              <li className={styles.list_item}>
                Have you ever noticed that achievers possess a unique
                combination of perseverance and passion, which is commonly known
                as grit?
              </li>
              <li className={styles.list_item}>
                At µLearn, we believe that grit is an essential quality to
                possess for all those who wish to achieve anything in their
                life.
              </li>
              <li className={styles.list_item}>
                That's why we have introduced the typing challenge as the
                initial task for anyone who wishes to join our platform.
              </li>
              <li className={styles.list_item}>
                This challenge helps us measure your level of grit as you work
                towards improving your typing speed, a fundamental skill that
                everyone should possess irrespective of what job they
                accomplish.
              </li>
              <li className={styles.list_item}>
                What sets the typing challenge apart from other challenges is
                its visually engaging interface that delivers quick results and
                rewards in the form of points.
              </li>
              <li className={styles.list_item}>
                This makes it an enjoyable and engaging task for all to
                participate in.
              </li>
            </ul>
          </div>
          <h1>Leaderboard</h1>
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>College</th>
                <th>Starting Count</th>
                <th>Drop Percentage</th>
                <th>Current Count</th>
              </tr>
            </thead>
            <tbody>
              {sortedColleges.map((college, index) => (
                <tr key={college.name}>
                  <td>{index + 1}</td>
                  <td>{college.name}</td>
                  <td>{college.startingCount}</td>
                  <td>{college.dropPercentage.toFixed(2)}%</td>
                  <td>{college.currentCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default TypingMastery
