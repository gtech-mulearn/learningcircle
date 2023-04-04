import React, { useState } from 'react'
import html2canvas from 'html2canvas';
import style from "./leaderboard.module.css"
import style2 from "./challenge.module.css"
import download from "../download.svg"
const LeaderBoard = ({ leaderboard, Day, College, setView }) => {

    function downloadImage() {
        const boardContainer = document.querySelector('.boardContainer');
        html2canvas(boardContainer).then(canvas => {
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
        { title: '👻', leaderboard: leaderboard.filter((value) => value.streak > 3 && !value.qualified) },
    ];

    let buttonStyle = 'p-3  m-1 rounded-[10px] active:bg-orange-600 cursor-pointer'
    return (
        <div id="">
            {
                leaderboard && (<div className={`${style2.mainContainer} ${style.mainContainer} boardContainer`}>
                    <button className={style.button} onClick={() => downloadImage()}>
                        <img src={download} alt="rock" />
                    </button>
                    <div className={style.subContainer1}>
                        <div>
                            <div className={`${style2.title} ${style.title}`}>{College}</div>
                            <div className={style.title}>Day {Day} Leaderboard </div>
                        </div>
                    </div>
                    <div className={style.subContainer2}>
                        {filterOptions.map((value, index) => (<div key={index} className={`${buttonStyle} ${index === condition ? "bg-orange-200" : ""}`} onClick={() => setCondition(index)}>{value.title}</div>))}
                    </div>
                    <div>
                        <div className={style.listBox}>
                            <div className={style.box}>Rank</div>
                            <div className={style.nameBox}>Name</div>
                            <div className={style.box}>Score</div>
                            <div className={style.box}>Streak</div>
                        </div>
                        {filterOptions[condition].leaderboard.map((value, index) => (<div key={index + 1}>
                            <div className={style.listBox} >
                                <div className={style.box2}>{index + 1}</div>
                                <div className={style.nameBox2}>{value.name}</div>
                                <div className={style.box2}>{value.score}</div>
                                <div className={style.box2}>{value.qualified ? value.streak > 0 ? value.streak + "🔥" : "💔" : value.streak > 3 ? "👻" : "☠️"}</div>
                            </div>
                        </div>))}
                    </div>
                </div>)
            }
        </div >
    )
}

export default LeaderBoard