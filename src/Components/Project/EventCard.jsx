import React from 'react'
import style1 from './projectcard.module.css'
import style2 from './eventCard.module.css'
import { useState } from 'react'
const EventCard = ({ event, selectMore }) => {
    const [isImageProfilePic, setIsImageProfilePic] = useState(true)
    return (
        <div className={style2.eventCardcontainer}>
            <div className={style1.upperCardContainer}>
                <div className={isImageProfilePic ? style1.showProfilePic : style1.showNameFirstCharacter}>
                    {isImageProfilePic ? <img src={event.logo_url ? event.logo_url : setIsImageProfilePic(false)} loading="lazy" alt={event.name} onError={async () => {
                        setIsImageProfilePic(false)
                    }} /> : <div>{event.name.charAt(0)}</div>}
                </div>
                <div className={style1.projectDetails}>
                    <p className={style1.projectTitle}>{event.name}</p>
                    <p className={style1.projectMembers}>{event.date}</p>
                </div>
            </div>
            <div className={style2.lowerCardContainer}>
                {event.projects.map((project) => (
                    <div className={style2.projectInfo}>
                        <p className={style1.projectTitle}>{project.title}</p>
                        <p className={style2.projectDescription}>{project.desc ? project.desc : project.members.join(',')}</p>
                    </div>
                ))}
            </div>
            <div className={style2.moreBox}>
                <div className={style2.button} onClick={() => selectMore(event.projects, event.name)}>More...</div>
            </div>
        </div>
    )
}

export default EventCard