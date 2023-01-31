import React from 'react'
import styles from '../subcourse.module.css'

const Button = ({ button }) => {
    return (
        <a
            href={button.link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <button className={styles.view_course}>{button.name}</button>
        </a>
    )
}

export default Button