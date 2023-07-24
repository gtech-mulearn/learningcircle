import styles from "../../InterestGroup.module.css"
const CardSection = ({ title, description, children, }) => {
    return (
        <div className={styles.second_view_container}>
            <div className={styles.second_view}>
                <div className={styles.sv_texts}>
                    <p className={styles.sv_heading}>{title}</p>
                    <p className={styles.sv_content}>
                        {description}
                    </p>
                    <div className={styles.mentor_container}>
                        <div className={styles.mentors}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default CardSection