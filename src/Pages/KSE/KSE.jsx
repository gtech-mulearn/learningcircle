import React from "react";
import styles from "./KSE.module.css";

import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const KSE = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>
                <span> KSE </span> Challenges
              </p>
              <p className={styles.fv_content}>
                Here we have listed some of the most popular challenges that you
                can take up to improve your skills.
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
              <p className={styles.sv_heading}>Challenges</p>
              <p className={styles.sv_content}>
                Let's get started with some general enablement tasks to get you
                familiar with how the basic tools work and get your inital karma
                points..
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
                <a href="/kse/challenges/ai" rel="noopener noreferrer">
                  <button className={styles.b_button}>Join Now!</button>
                </a>
              </div>
              <div className={styles.bootcamp}>
                <p className={styles.b_heading}>Android Bootcamp</p>
                <p className={styles.b_tagline}>
                  Learn Android Development in Kotlin hands-on so that you may
                  integrate it in your campus for your peers who are eager to
                  venture into Android Development with Kotlin.
                </p>
                <a href="/kse/challenges/android" rel="noopener noreferrer">
                  <button className={styles.b_button}>Join Now!</button>
                </a>
              </div>
              <div className={styles.bootcamp}>
                <p className={styles.b_heading}>Animation 3D Bootcamp</p>
                <p className={styles.b_tagline}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quidem voluptate provident debitis animi eos. Placeat quaerat
                  nesciunt ex minus obcaecati tempora reprehenderit atque illum
                  vero dolores. Impedit vero itaque odio?
                </p>
                <a href="/kse/challenges/animation3d" rel="noopener noreferrer">
                  <button className={styles.b_button}>Join Now!</button>
                </a>
              </div>
              <div className={styles.bootcamp}>
                <p className={styles.b_heading}>Blockchain Bootcamp</p>
                <p className={styles.b_tagline}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quidem voluptate provident debitis animi eos. Placeat quaerat
                  nesciunt ex minus obcaecati tempora reprehenderit atque illum
                  vero dolores. Impedit vero itaque odio?
                </p>
                <a href="/kse/challenges/blockchain" rel="noopener noreferrer">
                  <button className={styles.b_button}>Join Now!</button>
                </a>
              </div>
              <div className={styles.bootcamp}>
                <p className={styles.b_heading}>Civil Bootcamp</p>
                <p className={styles.b_tagline}>
                  Get ahead in your Civil Engineering career by joining GTech
                  μlearn's Civil Interest Group. Learn AutoCAD, BIM, and Revit
                  from industry experts. Gain hands-on experience and practical
                  skills. Join us now to take the next step in your career.
                </p>
                <a href="/kse/challenges/civil" rel="noopener noreferrer">
                  <button className={styles.b_button}>Join Now!</button>
                </a>
              </div>
              <div className={styles.bootcamp}>
                <p className={styles.b_heading}>Cyber Security Bootcamp</p>
                <p className={styles.b_tagline}>
                  Having an extra layer of security is always an advantage in
                  the current world. The best way to prevent a cyber attack is
                  to learn how it works and block all the loopholes that allow
                  it. Want to learn? Join our Interest Group and learn from our
                  expert mentors.
                </p>
                <a href="/kse/challenges/cybersec" rel="noopener noreferrer">
                  <button className={styles.b_button}>Join Now!</button>
                </a>
              </div>
              <div className={styles.bootcamp}>
                <p className={styles.b_heading}>Flutter Bootcamp</p>
                <p className={styles.b_tagline}>
                  Learn Dart hands-on so that you may integrate it in your
                  campus for your peers who are eager to venture into learning
                  Dart.This Boot-camp aims to minimize the learning process into
                  micro-steps to enhance your learning curve.
                </p>
                <a href="/kse/challenges/flutter" rel="noopener noreferrer">
                  <button className={styles.b_button}>Join Now!</button>
                </a>
              </div>
              <div className={styles.bootcamp}>
                <p className={styles.b_heading}>
                  Innovation & Entrepreneurship Bootcamp
                </p>
                <p className={styles.b_tagline}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quidem voluptate provident debitis animi eos. Placeat quaerat
                  nesciunt ex minus obcaecati tempora reprehenderit atque illum
                  vero dolores. Impedit vero itaque odio?
                </p>
                <a href="/kse/challenges/i&e" rel="noopener noreferrer">
                  <button className={styles.b_button}>Join Now!</button>
                </a>
              </div>
              <div className={styles.bootcamp}>
                <p className={styles.b_heading}>QA Bootcamp</p>
                <p className={styles.b_tagline}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quidem voluptate provident debitis animi eos. Placeat quaerat
                  nesciunt ex minus obcaecati tempora reprehenderit atque illum
                  vero dolores. Impedit vero itaque odio?
                </p>
                <a href="/kse/challenges/qa" rel="noopener noreferrer">
                  <button className={styles.b_button}>Join Now!</button>
                </a>
              </div>
              <div className={styles.bootcamp}>
                <p className={styles.b_heading}>Rust Bootcamp</p>
                <p className={styles.b_tagline}>
                  Learn Rust hands-on so that you may integrate it in your
                  campus for your peers who are eager to venture into learning
                  Rust.This Boot-camp aims to minimize the learning process into
                  micro-steps to enhance your learning curve.
                </p>
                <a href="/kse/challenges/rust" rel="noopener noreferrer">
                  <button className={styles.b_button}>Join Now!</button>
                </a>
              </div>
              <div className={styles.bootcamp}>
                <p className={styles.b_heading}>Web Bootcamp</p>
                <p className={styles.b_tagline}>
                  Ever wondered how web applications are built? Everything seems
                  Greek until you get to know how it is built. GTech μlearn's
                  Web Development Interest Group aims to develop and fine-tune
                  your Web Development skills and bring together people who wish
                  to evaluate potential Web Technologies. Join now and Stay
                  Updated!
                </p>
                <a href="/kse/challenges/web" rel="noopener noreferrer">
                  <button className={styles.b_button}>Join Now!</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default KSE;
