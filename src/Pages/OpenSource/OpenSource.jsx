import React from "react";
import styles from "./OpenSource.module.css";

import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import OpenSourceCard from "../../Components/OpenSourceCard/OpenSourceCard";

const OpenSource = () => {
  const projects = require("./data.json");
  return (
    <>
      <Navbar />
      <div className={styles.main_view_container}>
        <div className={styles.first_view}>
          <div className={styles.fv_texts}>
            <p className={styles.fv_heading}>
              <span> µLearn</span> Open Source Projects
            </p>
            <p className={styles.fv_content}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Assumenda, voluptate id? Culpa quo maxime excepturi sed eum,
              adipisci fugiat, iste expedita quidem repellendus quod voluptates
              doloribus. Iusto, esse! Reprehenderit, perspiciatis.
            </p>
          </div>
          <div className={styles.fv_image}>
            <img
              src="/assets/opensource/fvimg.gif"
              alt=""
              className={styles.fv_img}
            />
          </div>
        </div>
        <div className={styles.second_view_container}>
          <div className={styles.second_view}>
            <div className={styles.sv_texts}>
              <p className={styles.sv_heading}>Projects Listings</p>
            </div>
            <div className={styles.problem_list_container}>
              {projects.repositories.map(function (project) {
                return (
                  <OpenSourceCard
                    title={project.title}
                    organisation={project.organisation}
                    description={project.description}
                    url={project.url}
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

export default OpenSource;
