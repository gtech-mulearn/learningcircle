import React from 'react'
import TableStructure from './TableStructure'
import styles from '../subcourse.module.css'

const CourseAssignment = ({ heading, highlighted_heading, description, courses }) => {
    return (
        <div className={styles.second_view_container}>
            <div className={styles.second_view}>
                <div className={styles.sv_texts}>
                    <p className={styles.sv_heading}>
                        {heading} <span>{highlighted_heading}</span>
                    </p>
                    <p className={styles.sv_content}>
                        {description}
                    </p>
                </div>

                <TableStructure level="Beginner" courses={courses.beginner} />
                <TableStructure level="Intermediate" courses={courses.intermediate} />
                <TableStructure level="Advanced" courses={courses.advanced} />
            </div>
        </div>
    )
}

export default CourseAssignment