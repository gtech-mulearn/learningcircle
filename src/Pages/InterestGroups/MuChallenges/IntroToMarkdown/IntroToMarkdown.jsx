import React from "react";
import Navbar from "../../../../Components/Navbar/Navbar";
import Footer from "../../../../Components/Footer/Footer";

import styles from "./IntroToMarkdown.module.css";

const IntroToMarkdown = () => {
    return (
        <>
            <Navbar />
            <div className={styles.main_container}>
                <div className={styles.first_view_container}>
                    <div className={styles.first_view}>
                        <div className={styles.fv_texts}>
                            <p className={styles.fv_heading}>
                                Introduction to <span>Markdown</span>
                            </p>
                            <p className={styles.fv_content}>
                                The aim of the course is to learn how to communicate using Markdown, a lightweight language for text formatting.
                            </p>
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
                                Navigate to <a href="https://github.com/skills/communicate-using-markdown">github.com/skills/communicate-using-markdown</a>
                            </li>
                            <li>
                                Go through the <code>README.md</code> file. Read the instructions carefully, create the repository and complete the 5 steps.
                            </li>
                            <li>
                                Post the repository URL of the file you've worked on in <b>#students</b>  channel and hashtag <b>#ge-intro-to-markdown</b> (see example message below)
                            </li>

                        </ul>

                        <div className={styles.sample_container}>
                            <p className={styles.sample_header}>Example Message</p>
                            <p className={styles.sample_message}>
                                Hi! I've completed the Intro to Markdown course.<br></br>
                                My repository URL is https://github.com/Angelrose19/intro-to-markdown<br></br>
                                #ge-intro-to-markdown
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default IntroToMarkdown;
