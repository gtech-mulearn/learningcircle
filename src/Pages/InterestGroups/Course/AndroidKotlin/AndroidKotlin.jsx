import Footer from "../../../../Components/Footer/Footer";
import Navbar from "../../../../Components/Navbar/Navbar";
import styles from "./AndroidKotlin.module.css";

const AndroidKotlin = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>Introduction to Kotlin</p>

              <p className={styles.fv_content}>
                Learn the Kotlin programming language in this introduction to
                Kotlin. Kotlin is a general purpose, open source, statically
                typed “pragmatic” programming language. It is used for many
                things, including Android development.
              </p>
              <p className={styles.karma_header}>
                On Course Completion 800 Karma Points.
              </p>
            </div>

            <div className={styles.fv_image}>
              <img
                src="/assets/icourses/fvimg.gif"
                alt="Group Learning"
                className={styles.fv_img}
              />
            </div>
          </div>

          <div className={styles.second_view_container}>
            <div className={styles.second_view}>
              <p className={styles.sv_heading}>
                Learning <span>Materials</span>
              </p>
              <p className={styles.sv_content}>
                Here are some learning resources that you may use to master the
                fundamentals of Kotlin.
              </p>
              <div className={styles.learn_cards}>
                <div className={styles.learn_card}>
                  <div>
                    <p className={styles.lc_header}>
                      Official Kotlin Documentation
                    </p>
                    <p className={styles.lc_description}>
                      Kotlin Documentation is a website that offers a
                      comprehensive guide to learning the Kotlin programming
                      language, including tutorials, examples, and
                      documentation. It's a great resource for both beginners
                      and experienced programmers."
                    </p>
                  </div>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <button className={styles.view_course}>
                      View Documentation
                    </button>
                  </a>
                </div>
                <div className={styles.learn_card}>
                  <div>
                    <p className={styles.lc_header}>
                      Freecodecamp Tutorial Video
                    </p>
                    <p className={styles.lc_description}>
                      Learn Kotlin with this comprehensive tutorial video from
                      freecodecamp. Suitable for both beginners and experienced
                      programmers, it covers a wide range of topics and takes
                      you through the process of building your own programs.
                    </p>
                  </div>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <button className={styles.view_course}>
                      View Tutorial Video
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.second_view_container}>
            <div className={styles.second_view}>
              <div className={styles.sv_texts}>
                <p className={styles.sv_heading}>
                  Course <span>Assignment</span>
                </p>
                <p className={styles.sv_content}>
                  Now that you have learnt the basics of Kotlin, it’s time to
                  test yourselves by building few real-world applications.
                </p>
                <div className={styles.learn_cards}>
                  <div className={styles.learn_card}>
                    <div>
                      <p className={styles.lc_header}>
                        Build a Weather App(Open Weather Map)
                      </p>
                      <p className={styles.lc_description}>
                        Build a weather app using OpenWeatherMap API in Kotlin,
                        improve skills in API, JSON, GUI, error handling and
                        data visualization.
                      </p>
                    </div>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <button className={styles.view_course}>
                        Start Building
                      </button>
                    </a>
                  </div>
                  <div className={styles.learn_card}>
                    <div>
                      <p className={styles.lc_header}>Build a Calculator App</p>
                      <p className={styles.lc_description}>
                        Build a simple calculator app in Kotlin, apply basic
                        arithmetic operations, improve your skills in GUI
                        development, understand the importance of error
                        handling, and experience the power of Kotlin as a modern
                        programming language
                      </p>
                    </div>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <button className={styles.view_course}>
                        Start Building
                      </button>
                    </a>
                  </div>
                  <div className={styles.learn_card}>
                    <div>
                      <p className={styles.lc_header}>Build a Todo App</p>
                      <p className={styles.lc_description}>
                        Build a simple to-do list app in Kotlin, improve your
                        skills in GUI development, understand the importance of
                        data storage and retrieval, and experience the power of
                        Kotlin for creating user-friendly and efficient apps.
                      </p>
                    </div>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <button className={styles.view_course}>
                        Start Building
                      </button>
                    </a>
                  </div>
                  <div className={styles.learn_card}>
                    <div>
                      <p className={styles.lc_header}>
                        {" "}
                        Build a Tic-Tac-Toe App
                      </p>
                      <p className={styles.lc_description}>
                        Build a Tic-Tac-Toe game app in Kotlin, improve your
                        skills in game logic and GUI development, understand the
                        importance of implementing a winning strategy, and
                        experience the power of Kotlin for creating interactive
                        and engaging apps.
                      </p>
                    </div>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <button className={styles.view_course}>
                        Start Building
                      </button>
                    </a>
                  </div>
                  <div className={styles.learn_card}>
                    <div>
                      <p className={styles.lc_header}>Build a Quiz App</p>
                      <p className={styles.lc_description}>
                        Learn to build a Quiz app in Kotlin, improve your skills
                        in GUI development, understand the importance of
                        database usage for storing questions and answers, and
                        experience the power of Kotlin for creating interactive
                        and educational apps.
                      </p>
                    </div>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <button className={styles.view_course}>
                        Start Building
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.second_view_container}>
            <div className={styles.second_view}>
              <div className={styles.sv_texts}>
                <p className={styles.sv_heading}>
                  Once <span>Completed</span>
                </p>
                <p className={styles.sv_content}>
                  After course completion, complete the assignment and post the
                  Repository url in the #android-development channel of the
                  µLearn Discord server with the hashtag #android-kotlin-intro
                  to avail karma points
                </p>
              </div>

              <div className={styles.sample_container}>
                <p className={styles.sample_header}>Example Message</p>
                <p className={styles.sample_message}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laborum, praesentium ullam quas fugit ipsum minus.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.third_view_container}>
            <div className={styles.third_view}>
              <div className={styles.sample_container}>
                <p className={styles.sv_heading}>
                  <span>Need </span> Help ?
                </p>
                <p className={styles.sample_message}>
                  If you are new to µLearn, do checkout
                  <a
                    href="https://mulearn.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    &nbsp;mulearn.org
                  </a>{" "}
                  and join us. Watch this video if you are confused with Discord
                  Onboarding.
                  <a
                    href="https://youtu.be/7Oj88zF2jY0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    &nbsp;Click Here to Watch
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AndroidKotlin;
