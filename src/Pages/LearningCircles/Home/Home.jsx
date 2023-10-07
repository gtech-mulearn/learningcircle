import React, { useEffect, useState } from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";

import styles from "./Home.module.css";

import BeagleSecurity from "./assets/Others/BeagleSecurity.png";
import FoxLabs from "./assets/Others/FoxLabs.png";
import Pygrammers from "./assets/Others/Pygrammers.png";

import illustrations from "./assets/illustrations.png";
import InterestCard from "../../../Components/InterestCard/InterestCard";

import InterestGroups from "./data.js";

const Home = ({}) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: "5px",
    p: 4,
  };

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      <div className={styles.body_container}>
        <div class={styles.first_section}>
          <div class={styles.fstexts}>
            <p class={styles.fsheading}>
              Introducing <span> µLearn Learning Circles</span>
            </p>
            <p class={styles.fssheading}>
              Android and Web Development, IoT, CyberSecurity and
              <span> much more....</span>
            </p>
            <p class={styles.fstagline}>
              An informal mechanism for bringing together learners who are
              interested in the same topic from across different fields and
              disciplines. A fantastic way to spend a small amount of time
              learning about new things with a group of people with same
              interests!
            </p>

            <div class={styles.supporters}>
              <span>Supported By </span>

              <div className={styles.s_images}>
                <img
                  src={BeagleSecurity}
                  alt="Beagle Security"
                  class={styles.supporter}
                />
                <img src={FoxLabs} alt="" class={styles.supporter} />
                <img
                  src={Pygrammers}
                  alt="Pygrammers"
                  class={styles.supporter}
                />
              </div>
            </div>

            <div class={styles.buttons}>
              <a
                href="https://app.mulearn.org/dashboard/learning-circle"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button class={styles.fsbtn}>Join/Create Circles</button>
              </a>
            </div>
          </div>

          <div class={styles.fsimage}>
            <img src={illustrations} alt="" class={styles.fs_img} />
          </div>
        </div>
      </div>

      <div className={styles.secondsection}>
        <div className={styles.fssheading1}>
          <span>Existing</span> Interest Groups
        </div>
        <div className={styles.fsstagline}>
          Learning things for which you are curious is interesting, right? What
          about learning the same thing along with a group of like-minded peers
          and mentors, Much more interesting, right? Join in Now and Start
          Learning!
        </div>
        <div className={styles.cards_container}>
          {InterestGroups.map((InterestGroup) => (
            <InterestCard
              id={InterestGroup.id}
              interestgroup={InterestGroup.interestgroup}
              interestgroupdescription={InterestGroup.interestgroupdescription}
              officetime={InterestGroup.officetime}
            />
          ))}
          <div class={styles.icard}>
            <div class={styles.icard_text}>
              <p class={styles.icardheading}>Interest Group Request Form</p>
              <p class={styles.icardcontent}>
                Your Interest Group is not listed there. No worries, you can
                request the formation of a new Interest Group. We will analyse
                it from our perspective and see whether there is a majority for
                a certain interest. It will be made available with all of the
                necessary resources.
              </p>
              {/* <p class={styles.icardcontent}>Office Hours: {officetime}</p> */}

              <a
                href="https://airtable.com/shriAaNO6q4cQzKKl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button class={styles.icardbtn}>Submit Request</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
