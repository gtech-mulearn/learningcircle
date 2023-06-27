import React, { useState } from 'react'
import html2canvas from 'html2canvas';
import styles from "./Leaderboard.module.css"
import styles2 from "./Challenge.module.css"
import download from "../download.svg"
const LeaderBoard = ({ leaderboard, Day, College, setView }) => {

    function downloadImage() {
        const board_container = document.querySelector('.board_container');
        html2canvas(board_container).then(canvas => {
            const link = document.createElement('a');
            link.download = 'leaderboard.png';
            link.href = canvas.toDataURL();
            link.click();
        });
    }


    const [condition, setCondition] = useState(1)
    const filterOptions = [
        { title: 'All', leaderboard: leaderboard },
        { title: '🔝10', leaderboard: leaderboard.filter((value, index) => index < 10) },
        { title: '🔥', leaderboard: leaderboard.filter((value) => value.streak > 0 && value.qualified) },
        { title: '💔', leaderboard: leaderboard.filter((value) => value.qualified && value.streak <= 0) },
        { title: '☠️', leaderboard: leaderboard.filter((value) => !value.qualified) },
        { title: '👻', leaderboard: leaderboard.filter((value) => value.streak >= 3 && !value.qualified) },
    ];

    let buttonstyles = 'p-3  m-1 rounded-[10px] active:bg-orange-600 cursor-pointer'
    return (
        <div id="">
            {
                leaderboard && (<div className={`${styles2.main_container} ${styles.main_container} board_container`}>
                    <button className={styles.button} onClick={() => downloadImage()}>
                        <img src={download} alt="rock" />
                    </button>
                    <div className={styles.sub_container_1}>
                        <div>
                            <div className={`${styles2.title} ${styles.title}`}>{College}</div>
                            <div className={`${styles2.title} `}>Keyboard Mastery</div>

                            <div className={styles.title}>Day {Day} Leaderboard </div>
                        </div>
                    </div>
                    <div className={styles.sub_container_2}>
                        {filterOptions.map((value, index) => (<div key={index} className={`${buttonstyles} ${index === condition ? "bg-orange-200" : ""}`} onClick={() => setCondition(index)}>{value.title}</div>))}
                    </div>
                    <div>
                        <div className={styles.list_box}>
                            <div className={styles.box}>Rank</div>
                            <div className={styles.name_box}>Name</div>
                            <div className={styles.box}>Score</div>
                            <div className={styles.box}>Streak</div>
                        </div>
                        {filterOptions[condition].leaderboard.map((value, index) => (<div key={index + 1}>
                            <div className={styles.list_box} >
                                <div className={styles.box_2}>{index + 1}</div>
                                <div className={styles.name_box_2}>{value.name}</div>
                                <div className={styles.box_2}>{value.score}</div>
                                <div className={styles.box_2}>{value.qualified ? value.streak > 0 ? value.streak + "🔥" : "💔" : value.streak >= 3 ? "👻" : "☠️"}</div>
                            </div>
                        </div>))}
                    </div>

                </div>)

            }
        </div >
    )
}

export default LeaderBoard
