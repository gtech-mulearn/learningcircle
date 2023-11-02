import React, { useEffect, useState } from 'react'
import "../TypingChallenge.module.css"
import axios from 'axios'
import styles from "./Challenge.module.css"
import Rules from './Rules'
const ChallengeForm = ({ exportGoogleSheetData, getNumberOfDays, getCollege, setView }) => {
    const [spreadsheetId, setSpreadsheetId] = useState("")
    const [sheet, setSheet] = useState("")
    const [update, setUpdate] = useState(false)
    const API = "https://opensheet.elk.sh/"


    useEffect(() => {
        // 83 is the length of spreadsheetId
        if (spreadsheetId.length >= 83) {
            try {
                axios.get(`${API + spreadsheetId.split("/")[5]}/${sheet}`)
                .then(res => res.data)
                .then(result => exportGoogleSheetData(result))
                
            }
            catch (err) {
                // exportGoogleSheetData([])    
            }
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [update])

    return (
        <>
            <div className={styles.main_container}>
                <div>
                    <Rules />
                </div>
                <div className={styles.title}>Typing Challenge</div>
                <div className={styles.container_2}>
                    <div className={`${styles.text_container} ${styles.paste_box}`}>
                        Google Sheet <input className={styles.text_editor} placeholder='Paste Google Sheet Link' type='text' onChange={(e) => {
                            setSpreadsheetId(e.target.value)
                        }} />
                    </div>
                    <div className={`${styles.text_container} ${styles.paste_box}`}>
                        Sheet<input className={styles.text_editor} placeholder='Enter College Name' defaultValue={1} onChange={(e) => setSheet(e.target.value)} />
                    </div >
                    <div className={`${styles.text_container} ${styles.paste_box}`}>
                        College <input className={styles.text_editor} placeholder='Enter College Name' onChange={(e) => getCollege(e.target.value)} />
                    </div >
                    <div className={`${styles.text_container} ${styles.paste_box}`}>
                        Days Completed < input className={styles.text_editor} placeholder='Enter day count' type='number' defaultValue={1} onChange={(e) => getNumberOfDays(parseInt(e.target.value))} />
                    </div >
                    <div className={styles.button_container} >
                        <button className={styles.button} onClick={() => {
                            setUpdate((prevstate) => !prevstate)
                        }}>Submit</button>
                    </div >
                </div >
            </div >
        </>
    )
}

export default ChallengeForm