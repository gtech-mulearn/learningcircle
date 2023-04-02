import React from "react"
import Navbar from "../../../Components/Navbar/Navbar"
import Footer from "../../../Components/Footer/Footer"

import styles from "./MuLanding.module.css"
import MentorCard from "../../../Components/MentorCard/MentorCard"

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
                alt=""
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
                  name="Engineering Design Challenge"
                  designation="This challenge challenges engineering students to identify
                  real-world problems, conduct surveys and research, and propose
                  innovative solutions through sketches, prototypes, and videos.
                  Submissions should be shared in the #civil channel
                  using specific hashtags."
                  mclink="/challenge/innovationdesign"
                />
                <MentorCard
                  name="Innovation By Design"
                  designation=" Design solutions for home problems in the Civil Engineering
                  course project. Includes identifying problems, surveying stakeholders, preparing
                  a design sketch, and creating a mock-up model with a video
                  presentation."
                  mclink="/challenge/designchallenge"
                />
                <MentorCard
                  name="Solution Challenge 2023"
                  designation="Google Solution Challenge is a global annual competition for
                  university students to solve for one or more of the United
                  Nations 17 Sustainable Development Goals using Google
                  Technology."
                  mclink="/challenge/googlesolution"
                />
                <MentorCard
                  name="Self Introduction"
                  designation="You know yourself the best, yet presenting a good self may allow others to get to know you. Posting an introduction to yourself is an important first step in connecting with the community."
                  mclink="/common/enablement/1"
                />
                <MentorCard
                  name="Introduction to Discord"
                  designation="Are you brand new to Discord? Not to fear, we've got you covered. This course will walk you through the fundamentals to advanced features of discord."
                  mclink="/common/enablement/2"
                />
                <MentorCard
                  name="Intro to µLearn"
                  designation="Welcome to the Land of μLearn. Time to start your µ-Journey! "
                  mclink="/challenge/intro-to-mulearn"
                />
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
                  name="Bring Every Business Online"
                  designation="Awesome aka Bring Every Business Online is an Open Source Initiative to make an open source collection of web-pages for every business out there. To contribute to the project, all you have to do is build a website for a store or business."
                  mclink="https://awesome.mulearn.org"
                />
                <MentorCard
                  name="µLearn Typing Challenge"
                  designation="Learning to master the skill of typing is always an advantage. It enables a person to be much more productive and use their time efficiently and also increase the outlook of others on them."
                  mclink="/challenge/typing"
                />
                <MentorCard
                  name="TATA Strive Defensive Driving"
                  designation="This course in this challenge is designed to educate you about
                  defensive driving & how you can use these tips and strategies to
                  create a safer place for you as drivers and all those who use
                  the roads."
                  mclink="/challenge/defensivedriving"
                />
                <MentorCard
                  name="IoT 101"
                  designation="It’s possible that you are listening more and more to the term Internet of Things (IoT). But, what exactly is IoT, and most importantly, what changes will the adoption of IoT bring to households, commerce and industry?. In this course you’ll get a basic understanding on what’s IoT?"
                  mclink="/iot/enablement/1"
                />
                <MentorCard
                  name="What’s IoT?"
                  designation="IoT is known for monitoring and controlling devices remotely, and this course aims at familiarizing you with the Internet of Things. The course starts by introducing IoT. Enroll in this IoT free course and gain a free certificate."
                  mclink="/iot/enablement/2"
                />

                <MentorCard
                  name="Traffic Light Simulation"
                  designation="As children, we've always adored Traffic lights.
                  Ever considered building a Traffic Light by yourself.
                  In this Challenges, you will use TinkerCad to create a simulation of a Traffic Light Arduino project."
                  mclink="/challenge/traffic-light-simulation"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default MuLanding
