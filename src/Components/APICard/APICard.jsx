import React, { useState } from "react";
import styles from "./APICard.module.css";

const APICard = ({id, api, details, link}) => {
  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 150) : text}
        <span onClick={toggleReadMore} className={styles.readhide}>
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
    );
  };
  return (
    <div className={styles.problem_card_container}>
      <div className={styles.problem_card}>
        <div className={styles.problem_texts}>
          <p className={styles.label}>
            <span>API Number: {id}</span>
          </p>
          <p className={styles.label}>{api}</p>
          <p className={styles.label}>API Description</p>
          <ReadMore>{details}</ReadMore>
          {link && <button className={styles.contribute}>Try Out</button>}
        </div>
      </div>
    </div>
  );
};

export default APICard;
