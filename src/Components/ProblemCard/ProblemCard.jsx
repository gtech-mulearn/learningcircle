import React from "react";
import styles from "./ProblemCard.module.css";

const ProblemCard = () => {
  return (
    <div className={styles.problem_card_container}>
      <div className={styles.problem_card}>
        <div className={styles.problem_texts}>
          <p className={styles.label}>
            <span>Problem Statement: 1</span>
          </p>
          <p className={styles.statement}>
            Hosting a blockchain code on to a cloud network in order to create a
            prototype app in the Healthcare sector
          </p>
          <p className={styles.label}>Problem Category</p>
          <p className={styles.problem_category}>Software</p>
          <p className={styles.label}>Organisation</p>
          <p className={styles.organisation}>
            Department of Space, Indian Space Research Organisation (ISRO).
          </p>

          <button className={styles.contribute}>Contribute</button>
        </div>
      </div>
    </div>
  );
};

export default ProblemCard;
