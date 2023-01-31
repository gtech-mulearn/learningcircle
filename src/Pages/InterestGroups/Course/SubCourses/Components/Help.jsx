import React from 'react'
import styles from '../subcourse.module.css'
const Help = () => {
    return (
        <div className={styles.third_view_container}>
            <div className={styles.third_view}>
                <div className={styles.sample_container1}>
                    <p className={styles.sv_heading}>
                        <span>Need </span> Help ?
                    </p>
                    <p className={styles.sample_message}>
                        If you are new to µLearn, do checkout
                        <a
                            href="https://mulearn.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            &nbsp;mulearn.org
                        </a>{" "}
                        and join us. Watch this video if you are confused with Discord
                        Onboarding.
                        <a
                            href="https://youtu.be/7Oj88zF2jY0"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            &nbsp;Click Here to Watch
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Help