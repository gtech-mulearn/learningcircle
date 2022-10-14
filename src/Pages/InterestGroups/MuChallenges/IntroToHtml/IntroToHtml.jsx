import React from "react";
import Navbar from "../../../../Components/Navbar/Navbar";
import Footer from "../../../../Components/Footer/Footer";

import styles from "./IntroToHtml.module.css";

const IntroToHtml = () => {
    return (
        <>
            <Navbar />
            <div className={styles.main_container}>
                <div className={styles.first_view_container}>
                    <div className={styles.first_view}>
                        <div className={styles.fv_texts}>
                            <p className={styles.fv_heading}>
                                Introduction to <span>HTML</span>
                            </p>
                            <p className={styles.fv_content}>
                                HTML tags give a webpage its structure. You can use HTML tags to add photos, buttons, and other elements to your webpage.
                                <br /><br />
                                In this course, you'll learn the most common HTML tags by building your own cat photo app.
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
                                Login to  <a href="https://www.freecodecamp.org/">freecodecamp.org</a>
                            </li>
                            <li>
                                Click on Menu &gt; Settings. Complete the profile & change the privacy settings to public. Save the changes
                                <img src="https://mulearn.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe525e638-932f-4f4e-8671-76b246cd70e7%2Ff8.png?table=block&id=8a0f7b22-3954-4641-85c1-b599fc458571&spaceId=be508055-0311-452f-8715-e58ce6ed999f&width=2000&userId=&cache=v2" alt="" />
                            </li>
                            <li>
                                Navigate to <a href="https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-html-by-building-a-cat-photo-app">https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-html-by-building-a-cat-photo-app</a>
                            </li>
                            <li>
                                Complete the <b>Learn HTML by building a Cat Photo App course</b>
                            </li>
                            <li>
                                After completing the 69 steps,  share your profile URL in <b>#students</b> channel with hashtag <b>#ge-intro-to-html</b> to avail karma points. (see example message below)
                                <img src="https://mulearn.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc0e4f5f2-4fc3-43fa-9078-ee54fe3b0538%2Ff9.png?table=block&id=0ec8e095-5055-47bb-8d11-af71d57fe2ce&spaceId=be508055-0311-452f-8715-e58ce6ed999f&width=2000&userId=&cache=v2" alt="" />
                            </li>

                        </ul>

                        <div className={styles.callout}>
                            Complete the full FreeCodeCamp Responsive Web Design Course and avail 400 karma points. Checkout <a href="https://learn.mulearn.org/web/core/1">https://learn.mulearn.org/web/core/1</a>
                        </div>

                        <div className={styles.sample_container}>
                            <p className={styles.sample_header}>Example Message</p>
                            <p className={styles.sample_message}>
                                Hey! I built a Cat Photo App. <br />
                                <a href="https://www.freecodecamp.org/fccf7560df4-0e1a-4d83-b820-e55c2e47a19d">https://www.freecodecamp.org/fccf7560df4-0e1a-4d83-b820-e55c2e47a19d </a><br />
                                #ge-intro-to-html
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

export default IntroToHtml;
