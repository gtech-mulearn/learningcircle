import React, { useState } from 'react'
import style from './rules.module.css'
const Rules = () => {
    const [visbile, Toggle] = useState(false)
    const log = [
        {
            heading: "Challenge Info",
            icon: "🏆",
            desc: "This challenge is divided into 30 days",
            points: ["Each day a person needs to complete 22 levels in the typing challenge", "The lead will mark this in a google sheet and format of the document is provided last", "On providing the link in google sheet here with number of days to the challenge ,you will be provided a leaderboard ", "The leaderboard explained below"]
        },
        {
            heading: "Toppers",
            icon: "🔝",
            desc: "The best among the best"
        },
        {
            heading: "Streakers",
            icon: "🔥",
            desc: "They have an active streak for the challenge",
            points: ["A person with streak 1-5🔥will get streak*10 points extra", "A person with streak above 5 will get 50 points extra for maintaining the streak"],

        },
        {
            heading: "Broken",
            icon: "💔",
            desc: "The have failed to complete challenges once or twice ",
            points: ["When a person fails to complete a challenge he loses 10 points"],
        },
        {
            heading: "Dead",
            icon: "☠️",
            desc: "They have failed the challenge completion thrice and got disqualified",
            points: ["The disqualified will lose all their points"],
        },
        {
            heading: "In Spirit",
            icon: "👻",
            desc: "Inspite of the disqualification completed three consecutive challenges",
        },
        {
            heading: "Revived",
            icon: "",
            desc: "Back to the ranks. A person inspite of being disqualified completed five consecutive challenges",
            points: ["The revived can start earning points as normal person "],
        },

    ]
    return (
        <div className={style.mainContainer}>
            <div className={style.subContainer} onClick={() => Toggle(prevState => !prevState)}>Rules & Info<ion-icon name="chevron-down-outline"></ion-icon></div>
            <h3 className={`text-[20px] text-center`}>About </h3>

            <div className={`${visbile ? "" : "hidden"} p-3`} >
                {
                    log.map((item, index) => {
                        return (
                            <div key={index} className={style.card}>
                                <div className={style.heading}>
                                    <h3 className={`text-[20px] text-center`}>{item.heading}{item.icon}</h3>
                                    <p>⭐{item.desc}</p>
                                </div>
                                <div className={style.points}>
                                    {item.points &&
                                        item.points.map((item, index) => {
                                            return (
                                                <p key={index}>⭐ {item}</p>
                                            )
                                        })
                                    }
                                </div>
                            </div >
                        )
                    }
                    )
                }
            </div>
            <h3 className={`text-[20px] text-center`}>Google Sheet Format</h3>
            <div>SlNo | Name | Day 1 | Day 2 | ... | Day 30 | </div>

        </div>
    )
}

export default Rules