import React from "react";
import styles from "./IGCard.module.css";

const IGCard = ({ id, interestgroup, interestgroupdescription }) => {
  //   const link = `\ ${id}`;
  return (
    <div class={styles.icard}>
      <div class={styles.icard_text}>
        <p class={styles.icardheading}>{interestgroup}</p>
        {/* <p class={styles.icardcontent}>{interestgroupdescription}</p> */}
        {/* <a href={link}> */}
        <button class={styles.icardbtn}>Coming Soon!</button>
        {/* </a> */}
      </div>
    </div>
  );
};

export default IGCard;
