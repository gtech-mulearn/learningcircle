import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import styles from "./APISetu.module.css";

import APISetudata from "./APISetudata";

import APICard from "../../../Components/APICard/APICard";

const APISetu = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>
                <span> µLearn</span> API Setu
              </p>
              <p className={styles.fv_content}>
                API Setu is a platform that allows access to multiple sources of
                information through a single API, which can be used for various
                purposes. Open APIs provide developers with access to
                proprietary software or web services. APIs are a set of rules
                for communication between applications.
              </p>
            </div>
            <div className={styles.fv_image}>
              <img
                src="/assets/apisetu/fvimg.gif"
                alt=""
                className={styles.fv_img}
              />
            </div>
          </div>
        </div>
        <div className={styles.second_view_container}>
          <div className={styles.second_view}>
            <div className={styles.sv_texts}>
              <p className={styles.sv_heading}>API Listings</p>
            </div>
            <div className={styles.problem_list_container}>
              {APISetudata.map(function (api) {
                return (
                  <APICard
                    id={api.id}
                    api={api.api}
                    details={api.details}
                    link={api.link}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default APISetu;
