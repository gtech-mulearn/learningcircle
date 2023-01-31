import React from 'react'
import styles from '../subcourse.module.css'
const Intro = ({ heading, description, points, image }) => {
    return (
        <div className={styles.first_view}>
            <div className={styles.fv_texts}>
                <p className={styles.fv_heading}>{heading}</p>

                <p className={styles.fv_content}>
                    {description}
                </p>
                <p className={styles.karma_header}>
                    {points} Karma Points Upon Course Completion.
                </p>
            </div>
            <div className={styles.fv_image}>
                <img

                    src={image}
                    alt="Group Learning"
                    className={styles.fv_img}
                />
            </div>
        </div>
    )
}

export default Intro