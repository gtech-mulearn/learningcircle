import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./InternDirectory.module.css";

import internsList from "./interns";

import InternCard from "../../Components/InternCard/InternCard"

import fvimg from "./assets/fvimg.png";
//import InternCard from "../../Components/MentorCard/InterCard";

const InternDirectory = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>
                <span> µLearn </span> Intern Directory
              </p>
              <p className={styles.fv_content}>
                Meet the Interns of Mulearn. They are the fuel to our rocket that flies high. Their work helps µLearn reach you.
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
              <p className={styles.sv_heading}>Intern Details</p>
              <p className={styles.sv_content}>
                Our interns are the most enthusiastic batch of people. Connect with them to know about their experiences with µLearn!
              </p>
            </div>
            <div className={styles.mentor_container}>
              <div className={styles.mentors}>
                {internsList.map((intern) => (
                  <InternCard
                    name={intern.name}
                    designation={intern.designation}
                    image={intern.image}
                    linkedIn={intern.linkedin} 
                    interest={intern.stack ? intern.stack : ""}
                    source={intern.source ? intern.source : ""}
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

export default InternDirectory;
