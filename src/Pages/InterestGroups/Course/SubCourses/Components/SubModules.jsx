import React from 'react'
import styles from '../subcourse.module.css'
import Card from './Card'
const SubModules = ({ heading, highlighted_heading, description, cards }) => {
    return (
        <div className={styles.second_view_container}>
            <div className={styles.second_view}>
                <div className={styles.sv_texts}>
                    <p className={styles.sv_heading}>{heading} <span>{highlighted_heading}</span></p>
                    <p className={styles.sv_content}>{description}</p>
                    <div className={styles.learn_cards}>
                        {cards.map(card => (<Card card={card} />))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubModules