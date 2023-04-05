import React, { useEffect, useState } from 'react'
import "../TypingChallenge.module.css"
import axios from 'axios'
import style from "./challenge.module.css"
import Rules from './Rules'
const ChallengeForm = ({ exportGoogleSheetData, getNumberOfDays, getCollege, setView }) => {
    const [spreadsheetId, setSpreadsheetId] = useState("")
    const [update, setUpdate] = useState(false)
    const API = "https://opensheet.elk.sh/"

    useEffect(() => {
        // 83 is the length of spreadsheetId
        if (spreadsheetId.length >= 83) {
            axios.get(`${API + spreadsheetId.split("/")[5]}/${"Typing Challenge"}`)
                .then(res => res.data)
                .then(result => exportGoogleSheetData(result))
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [update])

    return (
        <>
            <div className={style.mainContainer}>
                <div>
                    <Rules />
                </div>
                <div className={style.title}>Typing Challenge</div>
                <div className={style.container2}>
                    <div className={`${style.textContainer} ${style.pasteBox}`}>
                        Google Sheet <input className={style.textEditor} placeholder='Paste Google Sheet Link' type='text' onChange={(e) => {
                            setSpreadsheetId(e.target.value)
                        }} />
                    </div>
                    <div className={`${style.textContainer} ${style.pasteBox}`}>
                        College <input className={style.textEditor} placeholder='Enter College Name' onChange={(e) => getCollege(e.target.value)} />
                    </div >
                    <div className={`${style.textContainer} ${style.pasteBox}`}>
                        Days Completed < input className={style.textEditor} placeholder='Enter day count' type='number' onChange={(e) => getNumberOfDays(parseInt(e.target.value))} />
                    </div >
                    <div className={style.buttonContainer} >
                        <button className={style.button} onClick={() => {
                            setUpdate((prevstate) => !prevstate)
                        }}>Submit</button>
                    </div >
                </div >
            </div >
        </>
    )
}

export default ChallengeForm