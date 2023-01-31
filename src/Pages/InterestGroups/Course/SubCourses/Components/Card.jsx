import React from 'react'
import Button from './Button'
import styles from '../subcourse.module.css'
const Card = ({ card }) => {
    return (
        <div className={styles.learn_card}>
            <div>
                <p className={styles.lc_header}>{card.heading}</p>
                <p className={styles.lc_description}>{card.description}</p>
            </div>
            <div className={styles.buttons}>
                {card.buttons.map(button => (<Button button={button} />))}
            </div>
        </div>
    )
}

export default Card