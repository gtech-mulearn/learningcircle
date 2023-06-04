import React, { useEffect, useState } from "react";
import styles from "./OpenSource.module.css";

import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import OpenSourceCard from "../../../Components/OpenSourceCard/OpenSourceCard";
import axios from "axios";

const OpenSource = () => {
  const projects = require("./data.json");
  const [fossprojects, setFossProjects] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://opensheet.elk.sh/1r5Pav8TlUEao_9GuMcFasKUEPSDIJOPB9PXKbt4KlTQ/fossprojects"
      )
      .then((response) => {
        setFossProjects(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Navbar />
      <div className={styles.main_view_container}>
        <div className={styles.first_view}>
          <div className={styles.fv_texts}>
            <p className={styles.fv_heading}>
              <span> Open Source </span> Projects
            </p>
            <p className={styles.fv_content}>
              Welcome to Open Source Projects, Listed below are the
              various projects which are open for contribution. learn and
              upskill youselves by contributing to opensource repositories.
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
              <p className={styles.sv_heading}>FossHack Projects Listings</p>
            </div>
            <div className={styles.problem_list_container}>
              {fossprojects &&
                fossprojects.map(function (project) {
                  return (
                    <OpenSourceCard
                      title={project.name}
                      organisation={project.organisation}
                      members={project.members}
                      description={project.description}
                      url={project.url}
                    />
                  );
                })}
            </div>
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
