import React from "react";
import Navbar from "../../../../Components/Navbar/Navbar";
import Footer from "../../../../Components/Footer/Footer";

import styles from "./MuLanding.module.css";
import MentorCard from "../../../../Components/MentorCard/MentorCard";

const MuLanding = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>
                Introducing <span>µLearn</span> Challenges
              </p>
              <p className={styles.fv_content}>
                Here we have listed some of the most popular challenges that you
                can take up to improve your skills.
              </p>
            </div>

            <div className={styles.fv_image}>
              <img
                src="/assets/challenge/mulanding.gif"
                alt="Mu Challenges"
                className={styles.fv_img}
              />
            </div>
          </div>
        </div>
        <div className={styles.second_view_container}>
          <div className={styles.second_view}>
            <div className={styles.sv_texts}>
              <p className={styles.sv_heading}>Existing Challenges</p>
              <p className={styles.sv_content}>
                Sounds Interesting? Come lets dive more deep into the challenge
                and see how it can be done easily.
              </p>
            </div>
            <div className={styles.mentor_container}>
              <div className={styles.mentors}>
                <MentorCard
                  name="Introduction to GitHub"
                  designation="The aim of the course is to teach you about GitHub and its numerous tools and processes, such as Issues and Pull Requests."
                  mclink="/challenge/intro-to-github"
                />
                <MentorCard
                  name="Introduction to Markdown"
                  designation="The aim of the course is to learn how to communicate using Markdown, a lightweight language for text formatting."
                  mclink="/challenge/intro-to-markdown"
                />
                <MentorCard
                  name="Introduction to Command Line"
                  designation="Complete the course end to end, Go through all commands and try it in your own terminal"
                  mclink="/challenge/intro-to-command-line"
                />
                <MentorCard
                  name="Introduction to GitHub Pages"
                  designation="In this course, you will learn to create a site or blog from your GitHub repositories with GitHub Pages."
                  mclink="/challenge/intro-to-github-pages"
                />
                <MentorCard
                  name="Introduction to HTML"
                  designation="In this course, you'll learn the most common HTML tags by building your own cat photo app."
                  mclink="/challenge/intro-to-html"
                />
                <MentorCard
                  name="1 Lakh Business in Production"
                  designation="Learning by Solving challeges is much more interesting than simply learning them. Here we have a challenge to solve and if you are ready to learn, Then come let get one lakh business into production."
                  mclink="/challenge/web"
                />
                <MentorCard
                  name="µLearn Typing Challenge"
                  designation="Learning to master the skill of typing is always an advantage. It enables a person to be much more productive and use their time efficently and also increase the outlook of others on them."
                  mclink="/challenge/typing"
                />
                <MentorCard
                  name="Tata Strive Defensive Driving"
                  designation="This course in this challenge is designed to educate you about
                  defensive driving & how you can use these tips and strategies to
                  create a safer place for you as drivers and all those who use
                  the roads."
                  mclink="/challenge/defensivedriving"
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

export default MuLanding;
