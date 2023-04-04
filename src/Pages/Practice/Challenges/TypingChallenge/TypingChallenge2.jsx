import React, { useState, useEffect } from 'react'
import Navbar from "../../../../Components/Navbar/Navbar"
import style from './typingChallengeV2.module.css'
import Form from "./challengeType/ChallengeForm"
import LeaderBoard from './challengeType/LeaderBoard'

const TypingChallenge2 = () => {
    const [leaderboard, setLeaderboard] = useState([])
    const [data, setData] = useState([])
    const [numberOfDays, setNumberOfDays] = useState(0)
    const [teamCollegeName, setTeamCollegeName] = useState("")

    useEffect(() => {
        setLeaderboard(data.map((member, index) => {
            let score = 0, streak = -1, qualified = true, brokenDays = 0
            // eslint-disable-next-line no-unused-vars
            const [no, name, ...days] = Object.values(member)

            // eslint-disable-next-line array-callback-return
            days.map((day, index) => {
                if (index < numberOfDays) {
                    if (day === "TRUE") {
                        score += 50
                        streak += 1
                        score += streak < 5 ? streak * 10 : 50
                        brokenDays = 0
                    }
                    else {
                        score -= 10
                        if (score < 0) score = 0
                        streak = -1
                        brokenDays += 1
                    }
                    if (brokenDays >= 3) qualified = false
                    if (!qualified) score = 0
                    if (streak >= 5) qualified = true
                }
            })
            return { name: name, score: score, streak: streak, qualified: qualified }
        }).sort((a, b) => b.score - a.score))
    }, [data, numberOfDays])


    return (
        <>
            <Navbar />
            <div className={style.container}>
                <Form exportGoogleSheetData={setData} numberOfDays={numberOfDays} getNumberOfDays={setNumberOfDays} getCollege={setTeamCollegeName} />
                <LeaderBoard leaderboard={leaderboard} Day={numberOfDays} College={teamCollegeName} />
            </div>
        </>
    )
}

export default TypingChallenge2