import React from 'react'
import styles from '../subcourse.module.css'
import Bold from './Bold';
const CompletionTasks = ({ heading, highlighted_heading, description1, description2, hashtags, example }) => {
    return (
        <div className={styles.second_view_container}>
            <div className={styles.second_view}>
                <div className={styles.sv_texts}>
                    <p className={styles.sv_heading}>{heading} <span>{highlighted_heading}</span></p>
                    <p className={styles.sv_content}><Bold text={description1} /></p>
                    <div className={styles.hastags}>
                        <ul><li className={styles.level}><Bold text={description2} /></li><br />
                            {hashtags.map(hashtag => (
                                <li className={styles.level}><Bold text={hashtag} /></li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={styles.sample_container}>
                    <p className={styles.sample_header}>Example Message</p>
                    <p className={styles.sample_message}><Bold text={example} /></p>
                </div>
            </div>
        </div>
    )
}

export default CompletionTasks