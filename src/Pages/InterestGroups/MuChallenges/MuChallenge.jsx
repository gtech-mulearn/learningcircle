import React from "react";
import styles from "./MuChallenge.module.css";

import fvimg from "./assets/fvimg.gif";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import MentorCard from "../../../Components/MentorCard/MentorCard";

const MuChallenge = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>
                <span>1 Lakh Buisness</span> in Production
              </p>
              <p className={styles.fv_content}>
                Learning by Solving challeges is much more interesting than
                simply learning them. Here we have a challenge to solve and if
                you are ready to learn, Then come let get one lakh buisness into
                production.
              </p>
            </div>

            <div className={styles.fv_image}>
              <img
                src={fvimg}
                alt="Group Learning Pic"
                className={styles.fv_img}
              />
            </div>
          </div>
        </div>
        <div className={styles.second_view_container}>
          <div className={styles.second_view}>
            <div className={styles.sv_texts}>
              <p className={styles.sv_heading}>Challenge Explanation</p>
              <p className={styles.sv_content}>
                Sounds Interesting? Come lets dive more deep into the challenge
                and see how it can be done easily.
              </p>
            </div>
            <div className={styles.mentor_container}>
              <div className={styles.mentors}>
                <MentorCard
                  name="What is the Challenge ?"
                  designation="The Challenge we put forward to you is to bring one Business near your to the web. In simple words you have make a wonderful website for them and we will assist you will all the necessary things needed to host it"
                />
                <MentorCard
                  name="First Step"
                  designation="Confused on how to start?. The first step is to visit a nearby lets say a tea stall and take note of the resouces necessary of building the website. It could anything from the store name to the photos of that place."
                />
                <MentorCard
                  name="Second Step"
                  designation="Since now you have all the necessary resouces, the next step is to BUILD and create a website for them with the knowledge you have gain and this is the intersting step of all as you will get to learn many new things"
                />
                <MentorCard
                  name="Third Step"
                  designation="Congratulaion, Now as you have completed the website you will have to host it with the resouces that we provide and let the shop owner know that you have actually build a wonderful webpage for their Business. "
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.second_view_container}>
          <div className={styles.second_view}>
            <div className={styles.sv_texts}>
              <p className={styles.sv_heading}>Your Resouces</p>
              <p className={styles.sv_content}>
                To get you going toward an aim, you need something you fuel you.
                Here are some resouces which will fuel you till the end of this
                project
              </p>
            </div>

            <div className={styles.mentor_container}>
              <div className={styles.mentors}>
                <MentorCard
                  name="Hosting Platform"
                  designation="We wil be providing you with the hosting platform so that you can host the Business."
                />
                <MentorCard
                  name="Domain Name"
                  designation="We will be also providing you with the domain name so that once build you it host it."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MuChallenge;
