import React from "react";
import styles from "./MentorCard.module.css";
import Avatar from "@mui/material/Avatar";

import placeholder from "./assets/placeholder.jpeg";

const MentorCard = () => {
  return (
    <div className={styles.mentor_card_container}>
      <div className={styles.mentor_card}>
        <div className={styles.box}>
          <img src={placeholder} alt="" className={styles.mentorimg} />
          <p className={styles.mentor_interest}>
            User Interface and Experience(UI/UX)
          </p>
        </div>

        <p className={styles.mentor_name}>Salman Fariz</p>
        <p className={styles.mentor_designation}>
          Associate at Gtech MuLearn and User Interface Designer at Centrric.
        </p>
      </div>
    </div>
  );
};

export default MentorCard;
