import React, { useState } from 'react';
import styles from './projectcard.module.css';

const ProjectCard = ({ project, eventName }) => {
    const { img_link, title, members, gitlink, sitelink } = project;
    const { projectCardContainer, upperCardContainer, showProfilePic, showNameFirstCharacter,
        projectDetails, projectTitle, projectMembers, lowerCardContainer, button, projectTag,
        eventName: eventNameStyle, iconImage } = styles;
    const [isImageProfilePic, setIsImageProfilePic] = useState(true);

    return (
        <div className={projectCardContainer}>
            <div className={upperCardContainer}>
                <div className={isImageProfilePic ? showProfilePic : showNameFirstCharacter}>
                    {isImageProfilePic ?
                        <img src={img_link ? img_link : setIsImageProfilePic(false)} loading="lazy" alt={title.charAt(0)}
                            onError={async () => setIsImageProfilePic(false)} />
                        : <div>{title.charAt(0)}</div>}
                </div>
                <div className={projectDetails}>
                    <p className={projectTitle}>{title}</p>
                    <p className={projectMembers}>{members.join(',')}</p>
                </div>
            </div>
            <div className={lowerCardContainer}>
                <a href={gitlink} className={button}>
                    <div className={iconImage}><img src="assets/projects/git.svg" alt="" /></div>
                    <p>Github</p>
                </a>
                {eventName !== "" ? <div className={`${button} ${projectTag}`}><p className={eventNameStyle}>{eventName}</p></div> : null}
                <a href={sitelink} className={button}>
                    <div className={iconImage}><img src="assets/projects/site.svg" alt="" /></div>
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
