import React from "react";
import styles from "./InterestCard.module.css";

const InterestCard = ({ id, interestgroup, interestgroupdescription }) => {
  const link = `\ ${id}`;
  return (
    <div class={styles.icard}>
      <div class={styles.icard_text}>
        <p class={styles.icardheading}>{interestgroup}</p>
        <p class={styles.icardcontent}>{interestgroupdescription}</p>
        <a href={link}>
          <button class={styles.icardbtn}>Checkout Group</button>
        </a>
      </div>
      {/* <div class={styles.icarddesign}>{interestgroup}</div> */}
    </div>
  );
};

export default InterestCard;
