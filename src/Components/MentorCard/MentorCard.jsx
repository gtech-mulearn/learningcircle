import React from "react";
import styles from "./MentorCard.module.css";

import linkedin from "./assets/linkedin.png";

const MentorCard = ({
  name,
  designation,
  image,
  linkedIn,
  interest,
  source,
  clink,
  mclink,
}) => {
  return (
    <div className={styles.mentor_card_container}>
      <div className={styles.mentor_card}>
        <div className={styles.box}>
          {image && <div className={styles.imagesHolder}><img src={image} alt="" width="100%" height="100%" className={styles.mentorimg} /></div>}
          <div className={styles.textdiv}>
            {interest && <p className={styles.mentor_interest}>{interest}</p>}

            <a href={linkedIn} target="_blank" rel="noopener noreferrer">
              {linkedIn && (
                <img src={linkedin} alt="" className={styles.linkedinimg} />
              )}
            </a>
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
