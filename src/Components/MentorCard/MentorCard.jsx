import React from "react";
import styles from "./MentorCard.module.css";

import linkedin from "./assets/linkedin.png";
import Twitter from './assets/twitter.png'
import GitHub from './assets/github.webp'
const img = 'https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg'
const MentorCard = ({
  name,
  designation,
  image,
  linkedIn,
  interest,
  source,
  clink,
  mclink,
  twitter, github
}) => {
  return (
    <div className={styles.mentor_card_container} >
      <div className={styles.mentor_card}>
        <div className={styles.box}>
          <div className={styles.imagesHolder}>
            <img src={image || img} alt="" width="100%" height="100%" className={styles.mentorimg} />
          </div>

          <div className={styles.textdiv}>
            {interest && <p className={styles.mentor_interest}>{interest}</p>}

            {linkedIn && (<a href={linkedIn} target="_blank" rel="noopener noreferrer">

              <img src={linkedin} alt="" className={styles.linkedinimg} />

            </a>)}
            {github && (<a href={github} target="_blank" rel="noopener noreferrer">

              <img src={GitHub} alt="" className={styles.linkedinimg} />

            </a>)}
            {twitter && <a href={twitter} target="_blank" rel="noopener noreferrer">
              <img src={Twitter} alt="" className={styles.linkedinimg} />
            </a>}
          </div>
        </div>

        <p className={styles.mentor_name}>{name}</p>

        <p className={styles.mentor_designation}>{designation}</p>
        <p className={styles.mentor_source}>{source}</p>

        {clink && (
          <a href={clink} target="_blank" rel="noopener noreferrer">
            {" "}
            <button className={styles.comingsoon}>Checkout Course</button>
          </a>
        )}
      </div>
      {mclink && (
        <a href={mclink}>
          {" "}
          <button className={styles.comingsoon}>Checkout Challenge</button>
        </a>
      )}
    </div>
  );
};

export default MentorCard;
