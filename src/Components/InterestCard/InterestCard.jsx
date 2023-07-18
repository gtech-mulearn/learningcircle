import React from "react";
import styles from "./InterestCard.module.css";

const InterestCard = ({
  index,
  id,
  interestgroup,
  interestgroupdescription,
  officetime,
  officePlace,
  link = `${id}`
}) => {

  return (
    <div className={styles.icard} key={index}>
      <div className={styles.icard_text}>
        <p className={styles.icardheading}>{interestgroup}</p>
        <p className={styles.icardcontent}>{interestgroupdescription}</p>
        {officetime && (
          <p className={styles.icardcontent}>Office Hours: {officetime}</p>
        )}
        {officePlace && (
          <p className={styles.icardcontent}>Office Hours: {officePlace}</p>
        )}
        <a href={link}>
          <button className={styles.icardbtn}>Checkout Group</button>
        </a>
      </div>
    </div>
  );
};

export default InterestCard;
