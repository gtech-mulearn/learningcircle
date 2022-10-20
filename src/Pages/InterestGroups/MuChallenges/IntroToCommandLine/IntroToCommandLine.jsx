import React from "react";
import Navbar from "../../../../Components/Navbar/Navbar";
import Footer from "../../../../Components/Footer/Footer";

import styles from "./IntroToCommandLine.module.css";

const IntroToCommandLine = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>
                Introduction to <span>Command Line</span>
              </p>
              {/* <p className={styles.fv_content}>
                                The aim of the course is to teach you about GitHub and its numerous tools and processes, such as Issues and Pull Requests.
                            </p> */}
            </div>

            {/* <div className={styles.fv_image}>
                            <img
                                src="/assets/challenge/typing.gif"
                                alt="Group Learning Image"
                                className={styles.fv_img}
                            />
                        </div> */}
          </div>
        </div>
        <div className={styles.second_view_container}>
          <div className={styles.second_view}>
            <div className={styles.sv_texts}>
              <p className={styles.sv_heading}>How to do the challenge?</p>
              {/* <p className={styles.sv_content}>
                                Do you know, The faster you type, the faster you communicate
                                with others. Let's work on our rapid fingers and earn some
                                karma.
                            </p> */}
            </div>
          </div>
          <div className={styles.steps}>
            <ul className={styles.steps_ulist}>
              <li>
                Complete the course end to end, Go through all commands and try
                it in your own terminal{" "}
                <a href="https://ubuntu.com/tutorials/command-line-for-beginners#1-overview">
                  - Intro to Command Line
                </a>
              </li>
              <li>
                When you're stuck or have any doubts, make sure to Google for a
                solution
              </li>
              <li>
                If you still seem to have doubts, feel free to ask in the
                #students channel
              </li>
              <li>
                Once you've completed the course, prepare a directory structure
                in your home directory as shown in the image below<br></br>
                <img
                  src="https://mulearn.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F8e0bf7fa-faaa-4f39-85f5-22a806c58820%2Fcommand-line-tree.png?table=block&id=2dd20cc4-70c5-45e9-9074-18706a4a18e8&spaceId=be508055-0311-452f-8715-e58ce6ed999f&width=420&userId=&cache=v2"
                  alt=""
                />
              </li>
              <li>
                Replace the directory names in the image with your details, see
                example image below<br></br>
                <img
                  src="https://mulearn.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F45944188-af4d-4c30-bc5f-e9cdf37ff88a%2Fcommand-line-tree-example.png?table=block&id=68f01d56-ef91-41d7-9955-93ca32f1f55e&spaceId=be508055-0311-452f-8715-e58ce6ed999f&width=410&userId=&cache=v2"
                  alt=""
                />
              </li>
              <li>
                Do a 'tree GTech-µLearn' from your home directory to obtain the
                above directory structure and take a screenshot
              </li>
              <li>
                Post a message on <b>#students</b> channel with the screenshot
                with hashtag <b>#ge-intro-to-command-line</b> (see example
                message below)
              </li>
            </ul>

            <div className={styles.sample_container}>
              <p className={styles.sample_header}>Example Message</p>
              <p className={styles.sample_message}>
                Hey! I've completed the Intro to Command Line course. I'm a
                command line Ninja!<br></br>
                #ge-intro-to-command-line
              </p>
              <img
                className={styles.sample_img}
                src="https://mulearn.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F451e8af7-8155-41fd-a608-6284cfd1b82c%2Fcommand-line-tree-example_(1).png?table=block&id=576fbb3b-f951-4108-b233-259a90e1f76a&spaceId=be508055-0311-452f-8715-e58ce6ed999f&width=410&userId=&cache=v2"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default IntroToCommandLine;
