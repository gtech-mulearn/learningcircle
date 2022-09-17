import React from "react";
import styles from "./InterestCard.module.css";

const InterestCard = () => {
  return (
    <div class={styles.icard}>
      <div class={styles.icard_text}>
        <p class={styles.icardheading}>AR/VR</p>
        <p class={styles.icardcontent}>
          Augmented and virtual reality are fast becoming practical tools that
          can enhance the overall experience and accelerate technological growth
          of a civilization. Join our interest group to connect and learn with
          peers who share your same enthusiasm.
        </p>
        <button class={styles.icardbtn}>Checkout Group</button>
      </div>
      <div class={styles.icarddesign}>Reality</div>
    </div>
  );
};

export default InterestCard;
