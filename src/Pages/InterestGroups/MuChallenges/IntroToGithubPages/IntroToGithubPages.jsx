import React from "react";
import Navbar from "../../../../Components/Navbar/Navbar";
import Footer from "../../../../Components/Footer/Footer";

import styles from "./IntroToGithubPages.module.css";

const IntroToGithubPages = () => {
    return (
        <>
            <Navbar />
            <div className={styles.main_container}>
                <div className={styles.first_view_container}>
                    <div className={styles.first_view}>
                        <div className={styles.fv_texts}>
                            <p className={styles.fv_heading}>
                                Introduction to <span>GitHub Pages</span>
                            </p>
                            <p className={styles.fv_content}>
                                In this course, you will learn to create a site or blog from your GitHub repositories with GitHub Pages.
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
                                Navigate to <a href="https://github.com/skills/github-pages">https://github.com/skills/github-pages</a>
                            </li>
                            <li>
                                Go through the <b>README.md</b> file. Read the instructions carefully, create the repository and complete the 6 steps.
                            </li>
                            <li>
                                If you still seem to have doubts, feel free to ask in the #students channel
                            </li>
                            <li>
                                You can find your GitHub Page URL from github-pages &gt; view deployment<br></br>
                                <img src="https://mulearn.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe4738a18-6d5e-41af-8ddd-cacd49b40089%2F12222.png?table=block&id=ea74a951-3753-4d2a-8e78-ae4c7fa899d7&spaceId=be508055-0311-452f-8715-e58ce6ed999f&width=2000&userId=&cache=v2" alt="" />
                                <img src="https://mulearn.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F89ce8b01-7bec-445b-9368-065f779903ce%2F1233.png?table=block&id=cf04295a-c8d5-4b19-aa48-bbe91924762f&spaceId=be508055-0311-452f-8715-e58ce6ed999f&width=2000&userId=&cache=v2" alt="" />
                            </li>
                            <li>
                                Post the GitHub Page URL you've deployed  in <b>#students</b>  channel and hashtag <b>#ge-github-pages</b>  (see example message below)
                            </li>

                        </ul>

                        <div className={styles.sample_container}>
                            <p className={styles.sample_header}>Example Message</p>
                            <p className={styles.sample_message}>
                                Hi! I've learnt to deploy GitHub Pages<br></br>
                                My page URL is https://github.com/Angelrose19/intro-to-github<br></br>
                                #ge-github-pages
                            </p>
                            {/* <img
                                className={styles.sample_img}
                                src="https://mulearn.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F451e8af7-8155-41fd-a608-6284cfd1b82c%2Fcommand-line-tree-example_(1).png?table=block&id=576fbb3b-f951-4108-b233-259a90e1f76a&spaceId=be508055-0311-452f-8715-e58ce6ed999f&width=410&userId=&cache=v2"
                                alt=""
                                srcset=""
                            /> */}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default IntroToGithubPages;
