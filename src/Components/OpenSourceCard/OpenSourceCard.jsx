import React from "react";
import styles from "./OpenSourceCard.module.css";

const OpenSourceCard = ({ title, organisation, description, url, members }) => {
  return (
    <div className={styles.problem_card_container}>
      <div className={styles.problem_texts}>
        <p className={styles.label}>{title}</p>
        <p className={styles.statement}>{description}</p>
        {organisation && (
          <>
            {" "}
            <p className={styles.label}>Project Maintainer</p>
            <p className={styles.problem_category}>{organisation}</p>
          </>
        )}
        {members && (
          <>
            {" "}
            <p className={styles.label}>Makers</p>
            <p className={styles.problem_category}>{members}</p>
          </>
        )}
      </div>

      {url && (
        <a href={url} target="_blank" rel="noopener noreferrer">
          <button className={styles.contribute}>Contribute Now</button>
        </a>
      )}
    </div>
  );
};

export default OpenSourceCard;
