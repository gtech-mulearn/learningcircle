import React from "react";
import styles from "./ProblemCard.module.css";

import { Link } from "react-router-dom";

const ReadMore = ({ children }) => {
  const text = children
  return <p className="text">{text.slice(0, 150)} . . .</p>;
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
      <div className={styles.problem_texts}>
        <p className={styles.label}>Problem Statement: {id}</p>
        <p className={styles.statement}>{statement}</p>
        <p className={styles.label}>Problem Category</p>
        <p className={styles.problem_category}>{category}</p>
        <p className={styles.label}>Organisation</p>
        <p className={styles.organisation}>{organisation}</p>
        <p className={styles.label}>Problem Description</p>
        <ReadMore>{description}</ReadMore>
      </div>
      <Link to={`/problemshelves/${id}`}>
        <button className={styles.contribute}>Read More</button>
      </Link>
    </div>
  );
};

export default ProblemCard;
