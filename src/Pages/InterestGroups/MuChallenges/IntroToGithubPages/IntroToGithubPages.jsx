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
                In this course, you will learn to create a site or blog from
                your GitHub repositories with GitHub Pages.
              </p>
            </div>

            {/* <div className={styles.fv_image}>
                            <img
                                src="/assets/challenge/typing.gif"
                                alt="Group Learning Pic"
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
          {/* <div className={styles.steps}> */}
          {/* <ul className={styles.steps_ulist}>
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
                                Post the GitHub Page URL you've deployed  in <b>#students</b>  channel with hashtag <b>#ge-github-pages</b>  (see example message below)
                            </li>

                        </ul> */}

          <div className={styles.steps}>
            <div className="timeline-container">
              <div className="timeline">
                <div className="timeline__event animated fadeInUp delay-3s timeline__event--type1">
                  <div className="timeline__event__icon">
                    <img
                      src={require("../assets/steps/freecodecamp.svg").default}
                      alt=""
                      // className="lni-cake"
                    />
                  </div>
                  <div className="timeline__event__date">1</div>
                  <div className="timeline__event__content">
                    <div className="timeline__event__title">Step One</div>
                    <div className="timeline__event__description">
                      {/* Login to  <a href="https://www.freecodecamp.org/">freecodecamp.org</a> */}
                      Navigate to{" "}
                      <a
                        href="https://github.com/skills/github-pages"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://github.com/skills/github-pages
                      </a>
                    </div>
                  </div>
                </div>
                <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
                  <div className="timeline__event__icon">
                    <img
                      src={require("../assets/steps/privacy.svg").default}
                      alt=""
                      className="lni-cake"
                    />
                  </div>
                  <div className="timeline__event__date">2</div>
                  <div className="timeline__event__content">
                    <div className="timeline__event__title">Step Two</div>
                    <div className="timeline__event__description">
                      {/* Click on Menu &gt; Settings. Complete the profile & change the privacy settings to public. Save the changes */}
                      Go through the <b>README.md</b> file. Read the
                      instructions carefully, create the repository and complete
                      the 6 steps.
                    </div>
                  </div>
                </div>
                <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
                  <div className="timeline__event__icon">
                    <img
                      src={require("../assets/steps/freecodecamp.svg").default}
                      alt=""
                      className="lni-cake"
                    />
                  </div>
                  <div className="timeline__event__date">3</div>
                  <div className="timeline__event__content">
                    <div className="timeline__event__title">Step Three</div>
                    <div className="timeline__event__description">
                      {/* Navigate to <a href="https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-html-by-building-a-cat-photo-app">https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-html-by-building-a-cat-photo-app</a> */}
                      If you still seem to have doubts, feel free to ask in the
                      #students channel
                    </div>
                  </div>
                </div>
                <div className="timeline__event animated fadeInUp timeline__event--type1">
                  <div className="timeline__event__icon">
                    <img
                      src={require("../assets/steps/html-tag.svg").default}
                      alt=""
                      className="lni-cake"
                    />
                  </div>
                  <div className="timeline__event__date">4</div>
                  <div className="timeline__event__content">
                    <div className="timeline__event__title">Step Four</div>
                    <div className="timeline__event__description">
                      {/* Complete the <b>Learn HTML by building a Cat Photo App course</b> */}
                      You can find your GitHub Page URL from github-pages &gt;
                      view deployment<br></br>
                      <br />
                      <a href="#step4">see screenshot ↓</a>
                    </div>
                  </div>
                </div>
                <div className="timeline__event animated fadeInUp delay-3s timeline__event--type1">
                  <div className="timeline__event__icon">
                    <img
                      src={require("../assets/steps/check.svg").default}
                      alt=""
                      // className="lni-cake"
                    />
                  </div>
                  <div className="timeline__event__date">5</div>
                  <div className="timeline__event__content">
                    <div className="timeline__event__title">Step Five</div>
                    <div className="timeline__event__description">
                      {/* After completing the 69 steps,  share your profile URL in <b>#students</b> channel with hashtag <b>#ge-intro-to-html</b> to avail karma points. (see example message below)
                                            <br /><a href="#step5">see screenshot ↓</a> */}
                      Post the GitHub Page URL you've deployed in{" "}
                      <b>#students</b> channel with hashtag{" "}
                      <b>#ge-github-pages</b> (see example message below)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.screenshots}>
              <p id="step4" className={styles.ss_title}>
                Step 4 - Screenshot
              </p>
              <img
                src="https://mulearn.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe4738a18-6d5e-41af-8ddd-cacd49b40089%2F12222.png?table=block&id=ea74a951-3753-4d2a-8e78-ae4c7fa899d7&spaceId=be508055-0311-452f-8715-e58ce6ed999f&width=2000&userId=&cache=v2"
                alt=""
              />
              <img
                src="https://mulearn.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F89ce8b01-7bec-445b-9368-065f779903ce%2F1233.png?table=block&id=cf04295a-c8d5-4b19-aa48-bbe91924762f&spaceId=be508055-0311-452f-8715-e58ce6ed999f&width=2000&userId=&cache=v2"
                alt=""
              />
            </div>
          </div>
          
          <div className={styles.sample_container}>
            <p className={styles.sample_header}>Example Message</p>
            <p className={styles.sample_message}>
              Hi! I've learnt to deploy GitHub Pages<br></br>
              My page URL is "link"
              <br></br>
              #ge-github-pages
            </p>
            {/* <img
                                className={styles.sample_img}
                                src="https://mulearn.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F451e8af7-8155-41fd-a608-6284cfd1b82c%2Fcommand-line-tree-example_(1).png?table=block&id=576fbb3b-f951-4108-b233-259a90e1f76a&spaceId=be508055-0311-452f-8715-e58ce6ed999f&width=410&userId=&cache=v2"
                                alt=""
                                srcset=""
                            /> */}
          </div>
          {/* </div> */}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default IntroToGithubPages;
