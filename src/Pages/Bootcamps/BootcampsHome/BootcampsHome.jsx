import React from "react";
import styles from "./BootcampsHome.module.css";
import { Link } from "react-router-dom";

import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";

const BootcampsHome = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>
                <span> µLearn </span> Bootcamps
              </p>
              <p className={styles.fv_content}>
                Been thinking of mastering a skill for some time now? Don't
                procrastinate anymore. Join our Bootcamps and make it your New
                Year's resolution to master a new skill. Register using the
                below links and Master your next skill starting 1st January
                2023. #NewYearNewSkill #ResolutionsRequireResolve
              </p>
            </div>
            <div className={styles.fv_image}>
              <img
                src="/assets/bootcamp/fvimg.gif"
                alt=""
                className={styles.fv_img}
              />
            </div>
          </div>
        </div>
        <div className={styles.second_view_container}>
          <div className={styles.second_view}>
            <div className={styles.sv_texts}>
              <p className={styles.sv_heading}>Interest Group Bootcamps</p>
              <p className={styles.sv_content}>
                The bootcamps shown below are open to all. You can join them now
                and learn a new skill this new year.
              </p>
            </div>
            <div className={styles.bootcamps}>
              <div className={styles.bootcamp}>
                <p className={styles.b_heading}>Android Bootcamp</p>
                <p className={styles.b_tagline}>
                  In this course, you'll learn the basics of building Android
                  apps with Jetpack Compose, the new UI toolkit for building
                  Android apps. Along the way, you'll develop a collection of
                  apps to start your journey as an Android developer.
                </p>
                <Link to="/bootcamps/ig/android">
                  <button className={styles.b_button}>Join Now!</button>
                </Link>
              </div>

              <div className={styles.bootcamp}>
                <p className={styles.b_heading}>Web Bootcamp</p>
                <p className={styles.b_tagline}>
                  In this study program, we will learn web and mobile app
                  development. We'll cover topics like website building, digital
                  business cards, space exploration etc.
                </p>
                <Link to="/bootcamps/ig/web">
                  <button className={styles.b_button}>Join Now!</button>
                </Link>
              </div>
              <div className={styles.bootcamp}>
                <p className={styles.b_heading}>Flutter Bootcamp</p>
                <p className={styles.b_tagline}>
                  Whether you're a beginner looking to kickstart your mobile app
                  development journey or an experienced developer seeking to
                  expand your skills, this bootcamp is designed to empower you
                  with the knowledge and expertise to build beautiful,
                  high-performance apps with Flutter.
                </p>
                <Link to="/bootcamps/ig/flutter">
                  <button className={styles.b_button}>Join Now!</button>
                </Link>
              </div>
              <div className={styles.bootcamp}>
                <p className={styles.b_heading}>Quality Assurance Bootcamp</p>
                <p className={styles.b_tagline}>
                In this course we will learn basics idea about quality assurance and testing methods 
                </p>
                <Link to="/bootcamps/ig/qa">
                  <button className={styles.b_button}>Join Now!</button>
                </Link>
              </div>
              <div className={styles.bootcamp}>
                <p className={styles.b_heading}>Cyber Security Bootcamp</p>
                <p className={styles.b_tagline}>
                In this study program, we will learn the basics and foundations of cybersecurity with a focus on web penetration testing
                </p>
                <Link to="/bootcamps/ig/cybersec">
                  <button className={styles.b_button}>Join Now!</button>
                </Link>
              </div>
              <div className={styles.bootcamp}>
                <p className={styles.b_heading}>IoT Bootcamp</p>
                <p className={styles.b_tagline}>
                In this course we will learn basics idea about iot using wokwi and arduino.
                </p>
                <Link to="/bootcamps/ig/iot">
                  <button className={styles.b_button}>Join Now!</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.second_view_container}>
          <div className={styles.second_view}>
            <div className={styles.sv_texts}>
              <p className={styles.sv_heading}>New Year New Skill</p>
              <p className={styles.sv_content}>
                The bootcamps shown below are open to all. You can join them now
                and learn a new skill this new year.
              </p>
            </div>
            <div className={styles.bootcamps}>
              <div className={styles.bootcamp}>
                <p className={styles.b_heading}>AI Bootcamp</p>
                <p className={styles.b_tagline}>
                  Heard of the many AI writing tools and wondered how they work?
                  This weekend build features exactly that using GPT-3 and Open
                  AI. You'll then deploy the app to show off to your friends!
                </p>
                <Link to="/bootcamps/ai">
                  <button className={styles.b_button}>Join Now!</button>
                </Link>
              </div>
              <div className={styles.bootcamp}>
                <p className={styles.b_heading}>Android Bootcamp</p>
                <p className={styles.b_tagline}>
                  Learn Android Development in Kotlin hands-on so that you may
                  integrate it in your campus for your peers who are eager to
                  venture into Android Development with Kotlin.
                </p>
                <Link to="/bootcamps/android">
                  <button className={styles.b_button}>Join Now!</button>
                </Link>
              </div>

              <div className={styles.bootcamp}>
                <p className={styles.b_heading}>Rust Bootcamp</p>
                <p className={styles.b_tagline}>
                  Learn Rust hands-on so that you may integrate it in your
                  campus for your peers who are eager to venture into learning
                  Rust.This Boot-camp aims to minimize the learning process into
                  micro-steps to enhance your learning curve.
                </p>
                <Link to="/bootcamps/rust">
                  <button className={styles.b_button}>Join Now!</button>
                </Link>
              </div>
              <div className={styles.bootcamp}>
                <p className={styles.b_heading}>Flutter Bootcamp</p>
                <p className={styles.b_tagline}>
                  Learn Dart hands-on so that you may integrate it in your
                  campus for your peers who are eager to venture into learning
                  Dart.This Boot-camp aims to minimize the learning process into
                  micro-steps to enhance your learning curve.
                </p>
                <Link to="/bootcamps/flutter">
                  <button className={styles.b_button}>Join Now!</button>
                </Link>
              </div>
              <div className={styles.bootcamp}>
                <p className={styles.b_heading}>JavaScript Bootcamp</p>
                <p className={styles.b_tagline}>
                  Learn JavaScript hands-on so that you may integrate it in your
                  campus for your peers who are eager to venture into learning
                  JavaScript.This Boot-camp aims to minimize the learning
                  process into micro-steps to enhance your learning curve.
                </p>
                <Link to="/bootcamps/javascript">
                  <button className={styles.b_button}>Join Now!</button>
                </Link>
              </div>

              <div className={styles.bootcamp}>
                <p className={styles.b_heading}>Python Bootcamp</p>
                <p className={styles.b_tagline}>
                  22 days python bootcamp with complete mentor support. The
                  event is designed for entire beginers. We will also be doing
                  some projects and making it public in github.
                </p>
                <Link to="/bootcamps/python">
                  <button className={styles.b_button}>View Details</button>
                </Link>
              </div>
              <div className={styles.bootcamp}>
                <p className={styles.b_heading}>Capture the Flag</p>
                <p className={styles.b_tagline}>
                  Pentesting is a hard thing. It's even harder to figure out how
                  to get started on this journey. This workshop is aimed toward
                  absolute beginners and to give them an easy understanding
                  learning path.
                </p>
                <Link to="/bootcamps/ctf">
                  <button className={styles.b_button}>View Details</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BootcampsHome;
