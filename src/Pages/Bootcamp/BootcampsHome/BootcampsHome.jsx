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
              <p className={styles.sv_heading}>Bootcamps</p>
              <p className={styles.sv_content}>
                The bootcamps shown below are open to all. You can join them now
                and learn a new skill this ne year.
              </p>
            </div>
            <div className={styles.bootcamps}>
              <div className={styles.bootcamp}>
                <p className={styles.b_heading}>AI Bootcamp</p>
                <p className={styles.b_tagline}>
                  Learn Android Development in Kotlin hands-on so that you may
                  integrate it in your campus for your peers who are eager to
                  venture into Android Development with Kotlin.
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
