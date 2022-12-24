import React, { useState, useEffect } from "react";
import styles from "./IndividualPage.module.css";
import Navbar from "../../../../Components/Navbar/Navbar";
import Footer from "../../../../Components/Footer/Footer";

import problems from "../problems";
import { useParams } from "react-router-dom";

const IndividualPage = () => {
  const [problem, setProblem] = useState();
  const { id } = useParams();

  useEffect(() => {
    const data = problems.filter((prob) => prob.id.includes(id));
    console.log(data);
    setProblem(data);
  }, [id]);

  return (
    <>
      <Navbar />
      <div className={styles.main_container_view}>
        <div className={styles.first_view_container}>
          {problem && (
            <div className={styles.first_view}>
              <div className={styles.fv_texts}>
                <p className={styles.fv_heading}>
                  <span> Problem</span> Statement Number {id}
                </p>
                <p className={styles.fv_content}>{problem[0].statement}</p>
              </div>
              <div className={styles.fv_image}>
                <img
                  src="/assets/problemshelves/fvimg.gif"
                  alt=""
                  className={styles.fv_img}
                />
              </div>
            </div>
          )}
        </div>
        <div className={styles.second_view_container}>
          <div className={styles.second_view}>
            <div className={styles.sv_texts}>
              <p className={styles.sv_heading}>Problem Details</p>
              <p className={styles.sv_content}>
              Details regarding this issue statement, such as organisation, category, and description, are shown below.
              </p>
            </div>
            {problem && (
              <>
                <div className={styles.problem_detail}>
                  <p className={styles.pd_heading}>Organisation</p>
                  <p className={styles.pd_content}>{problem[0].organisation}</p>
                </div>
                <div className={styles.problem_detail}>
                  <p className={styles.pd_heading}>Problem Category</p>
                  <p className={styles.pd_content}>{problem[0].category}</p>
                </div>
                <div className={styles.problem_detail}>
                  <p className={styles.pd_heading}>Problem Description</p>
                  <p className={styles.pd_content}>{problem[0].description}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default IndividualPage;
