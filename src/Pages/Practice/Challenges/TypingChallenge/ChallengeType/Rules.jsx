import React, { useState } from "react"
import styles from "./Rules.module.css"
const Rules = () => {
  const [visbile, Toggle] = useState(false)
  const log = [
    {
      heading: "Toppers",
      icon: "🔝",
      desc: "The best among the best",
    },
    {
      heading: "Streakers",
      icon: "🔥",
      desc: "They have an active streak for the challenge",
      points: [
        "Streak starts from the second day,and streak is lost when a person fails to complete a challenge",
        "A person with streak 1-5🔥will get streak*10 points extra",
        "A person with streak above 5 will get 50 points extra for maintaining the streak",
        "For example",
        "1🔥 => 1*10 = 10 points",
        "2🔥 => 2*10 = 20 points",
        "3🔥 => 3*10 = 30 points",
        "4🔥 => 4*10 = 40 points",
        "5🔥 => 5*10 = 50 points",
        "6🔥or above => 50 points",
      ],
    },
    {
      heading: "Broken",
      icon: "💔",
      desc: "The have failed to complete challenges once or twice ",
      points: [
        "When a person fails to complete a challenge he loses 10 points",
      ],
    },
    {
      heading: "Dead",
      icon: "☠️",
      desc: "They have failed the challenge completion thrice consecutive days and got disqualified",
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
      desc: "Back to the ranks",
      points: [
        "A person inspite of being disqualified completed five consecutive challenges",
        "Completed six consecutive days of challenges after being disqualified",
        "The revived can start earning points as normal person ",
        "The points of the six days will be added if you revived,until then your points will zero since the person is disqualified until revived"
      ],
    },
  ]

  return (
    <div className={styles.mainContainer}>
      <div
        className={styles.subContainer}
        onClick={() => Toggle((prevState) => !prevState)}
      >
        <div className="flex justify-between items-center w-2/3">
          Rules & Info<ion-icon name="chevron-down-outline"></ion-icon>
        </div>
      </div>

      <div className={`${visbile ? "" : "hidden"} p-3`}>
        <div className="text-center">
          <a href="https://drive.google.com/drive/folders/10kJ5YJZHambpiXrQ7FhdygJDPyGoBmkH" className="text-orange-600">Click here for detail info</a>
        </div>
        <h3 className={`text-[25px] text-center mb-5 mt-5  text`}>LeaderBoard Info </h3>
        {log.map((item, index) => {
          return (
            <div key={index} className={styles.card}>
              <div className={styles.heading}>
                <h3 className={`text-[17px] text-center`}>
                  {item.heading}
                  {item.icon}
                </h3>
                <p>⭐{item.desc}</p>
              </div>
              <div className={styles.points}>
                {item.points &&
                  item.points.map((item, index) => {
                    return <p key={index}>⭐ {item}</p>
                  })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Rules
