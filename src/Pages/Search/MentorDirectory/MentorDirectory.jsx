import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../../Components/Footer/Footer";
import Navbar from "../../../Components/Navbar/Navbar";
import styles from "./MentorDirectory.module.css";

import fvimg from "./assets/fvimg.png";
import MentorCard from "../../../Components/MentorCard/MentorCard";

const MentorDirectory = () => {
  const [mentorData, setMentorData] = useState([]);
  // const [error, setError] = useState();
  useEffect(() => {
    axios
      .get(
        "https://opensheet.elk.sh/1r5Pav8TlUEao_9GuMcFasKUEPSDIJOPB9PXKbt4KlTQ/mentordata"
      )
      .then((response) => {
        setMentorData(response.data);
      })
      .catch((error) => {
        console.log(error);
        // setError(
        //   "We are currently facing some difficulties in fetching the data at the moment, will be back soon."
        // );
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>
                <span> µLearn </span> Mentor Directory
              </p>
              <p className={styles.fv_content}>
                Welcome to the Mentor Directory of µLearn. Here you will be able
                to find a mentor who has already gone down the road through
                which you are about to embark on a journey. Happy Learning!
              </p>
              <br />
              <div className={styles.quote}>
                <p className={styles.aquote}>
                  <span>"</span>A piece of knowledge, unlike a piece of physical
                  property, can be shared by large groups of people without
                  making anybody poorer.<span>"</span>
                </p>
                <p className={styles.quoteby}>
                  <span className={styles.orange}>― Aaron Chettan</span> , The
                  Boy Who Could Change the World: The Writings of Aaron Swartz
                </p>
              </div>
            </div>
            <div className={styles.fv_image}>
              <img src={fvimg} alt="" className={styles.fv_img} />
            </div>
          </div>
        </div>
        <div className={styles.second_view_container}>
          <div className={styles.second_view}>
            <div className={styles.sv_texts}>
              <p className={styles.sv_heading}>Mentor Details</p>
              <p className={styles.sv_content}>
                We have several experienced mentors under each Interest Groups
                to guide, assist and mentor you throughout Learn to pronounce
                your learning journey.
              </p>
            </div>
            <div className={styles.mentor_container}>
              <div className={styles.mentors}>
                {mentorData.map((mentor) => (
                  <MentorCard
                    name={mentor.name}
                    designation={mentor.designation}
                    image={mentor.image}
                    linkedIn={mentor.linkedIn}
                    interest={mentor.stack ? mentor.stack : ""}
                    source={mentor.source ? mentor.source : ""}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MentorDirectory;
