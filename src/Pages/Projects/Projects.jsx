import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar.jsx'
import ProjectCard from '../../Components/Project/ProjectCard.jsx'
import styles from './project.module.css'
import data from './data.js'
import EventCard from '../../Components/Project/EventCard.jsx'

const Projects = () => {
    const [isProject, setIsProject] = useState(true)

    const toggleIsProject = (value) => setIsProject(value)

    return (
        <>
            <Navbar />
            <div className={styles.projectsContainer}>
                <div
                    className={`${isProject ? styles.addDash : ''}`}
                    onClick={() => toggleIsProject(true)}
                >
                    All Projects
                </div>
                <div
                    className={`${!isProject ? styles.addDash : ''}`}
                    onClick={() => toggleIsProject(false)}
                >
                    Event Projects
                </div>
            </div>
            <div className={styles.projectsPreviewContainer}>
                {isProject ? (
                    <ProjectsPreview events={data} />
                ) : (
                    <EventsPreview events={data} />
                )}
            </div>
        </>
    )
}

const ProjectsPreview = ({ events }) => {
    return (
        <div className={styles.allProjectsPreviewer}>
            {events.map(({ id, name, projects }) => (
                <React.Fragment key={id}>
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            eventName={name}
                            project={project}
                        />
                    ))}
                </React.Fragment>
            ))}
        </div>
    )
}

const EventsPreview = ({ events }) => {
    const [selection, setSelection] = useState(null)
    const [eventName, setEventName] = useState('')

    const select = (projects, name) => {
        setSelection(projects)
        setEventName(name)
    }

    const resetSelection = () => {
        setSelection(null)
        setEventName('')
    }

    return (
        <div className={styles.eventsPreviewer}>
            <div
                className={`${eventName === '' ? styles.hideOneEventPreviewer : styles.oneEventPreviewer}`}
            >
                <div className={styles.eventName}>{eventName}</div>
                <div className={styles.eventCloseIcon}>
                    <div onClick={resetSelection}>
                        <ion-icon name="chevron-back-outline" />Events
                    </div>
                </div>
            </div>
            <div className={styles.eventContainer}>
                {selection === null ? (
                    <React.Fragment>
                        {events.map(({ id, ...event }) => (
                            <EventCard
                                key={id}
                                event={event}
                                selectMore={select}
                            />
                        ))}
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        {selection.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                eventName={eventName}
                            />
                        ))}
                    </React.Fragment>
                )}
            </div>
        </div>
    )
}

export default Projects
