import React from "react";
import Footer from "../../../Components/Footer/Footer";
import Navbar from "../../../Components/Navbar/Navbar";
import styles from "./CTFPage.module.css";

const CTFPage = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>
                <span> Intro </span> to CTF
              </p>
              <p className={styles.fv_subheading}>5 Days Hands On Bootcamp</p>
              <p className={styles.fv_content}>
                Pentesting is a hard thing. It's even harder to figure out how
                to get started on this journey. This workshop is aimed toward
                absolute begineers and to give them an easy understanding
                learning path.
                <br />
                <br />
                We are focused on cracking OSCP like Kioptrix Kioptrix
                boot-to-root VMs are well known as a good starting vulnerable
                machines for hacking challenges. This is especially true for
                those who are looking to pursue the OSCP certification, as it is
                considered to be beginner-friendly
              </p>
              <button className={styles.register}>Starting Soon!</button>
            </div>
            <div className={styles.fv_image}>
              <img
                src="/assets/bootcamp/ctf/fvimg.gif"
                alt=""
                className={styles.fv_img}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CTFPage;
