import React, { useState } from "react";
import styles from "./ProblemCard.module.css";

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

const ProblemCard = ({
  id,
  statement,
  category,
  organisation,
  description,
  link,
}) => {
  return (
    <div className={styles.problem_card_container}>
      <div className={styles.problem_card}>
        <div className={styles.problem_texts}>
          <p className={styles.label}>
            <span>Problem Statement: {id}</span>
          </p>
          <p className={styles.statement}>{statement}</p>
          <p className={styles.label}>Problem Category</p>
          <p className={styles.problem_category}>{category}</p>
          <p className={styles.label}>Organisation</p>
          <p className={styles.organisation}>{organisation}</p>
          <p className={styles.label}>Problem Description</p>
          <ReadMore>{description}</ReadMore>
          {link && <button className={styles.contribute}>Contribute</button>}
        </div>
      </div>
    </div>
  );
};

export default ProblemCard;
