import React from "react";
import styles from "./AndroidCompose.module.css";
import Navbar from "../../../../Components/Navbar/Navbar";
import Footer from "../../../../Components/Footer/Footer";

const AndroidCompose = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>
                Android Basics with <span> Compose</span>
              </p>
              <p className={styles.fv_content}>
                In this course, you'll learn the basics of building Android apps
                with Jetpack Compose, the new UI toolkit for building Android
                apps. Along the way, you'll develop a collection of apps to
                start your journey as an Android developer.
                <br />
              </p>

              <br />
              <a
                href="https://developer.android.com/courses/android-basics-compose/course"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={styles.joinchallenge}>
                  Resource Material
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.second_view_container}>
          <div className={styles.second_view}>
            <div className={styles.sv_texts}>
              <p className={styles.sv_heading}>How to Complete the Course?</p>
            </div>
          </div>
          <div className={styles.steps}>
            <div className="timeline-container">
              <div className="timeline">
                <div className="timeline__event animated fadeInUp delay-3s timeline__event--type1">
                  <div className="timeline__event__icon">
                    <img
                      src={require("../assets/steps/freecodecamp.svg").default}
                      alt=""
                    />
                  </div>
                  <div className="timeline__event__date">1</div>
                  <div className="timeline__event__content">
                    <div className="timeline__event__title">Step One</div>
                    <div className="timeline__event__description">
                      Learn programming basics and create your first Android app
                      and share your badges in the <b>#android-development</b>
                      &nbsp; channel along with the hashtag{" "}
                      <b>#cl-android-unit1</b>&nbsp; Completing this unit will
                      earn you&nbsp;
                      <b>100 karma points.</b>
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
                      Continue learning the fundamentals of Kotlin and start
                      building more interactive apps. Share your progress in the
                      <b>#android-development</b> channel along with the hashtag
                      <b>#cl-android-unit2</b> and don't forget to share your
                      badges. Completing this unit will earn you&nbsp;
                      <b>100 karma points.</b>
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
                      Build apps that display a list of data and make them more
                      beautiful with Material Design. Share your creations in
                      the <b>#android-development</b> channel along with the
                      hashtag
                      <b>#cl-android-unit3</b> and share your badges. Completing
                      this unit will earn you <b>100 karma points.</b>
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
                      Learn the best practices of app architecture to build more
                      complex apps. Share your insights and experiences in the
                      <b>#android-development</b> channel along with the hashtag
                      <b>#cl-android-unit4</b> and share your badges when you
                      complete the unit. Completing this unit will earn
                      you&nbsp;
                      <b>100 karma points.</b>
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
                  <div className="timeline__event__date">5</div>
                  <div className="timeline__event__content">
                    <div className="timeline__event__title">Step Five</div>
                    <div className="timeline__event__description">
                      Use Kotlin coroutines and Retrofit to get data from the
                      internet and display images in your app using the Coil
                      library. Share your progress and any challenges you faced
                      in the <b>#android-development</b> channel along with the
                      hashtag
                      <b>#cl-android-unit5</b> and don't forget to share your
                      badges. Completing this unit will earn you&nbsp;
                      <b>100 karma points.</b>
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
                    <div className="timeline__event__title">Step Six</div>
                    <div className="timeline__event__description">
                      Learn how to store data locally on the device for a smooth
                      and consistent user experience. Share your learnings and
                      any tips you have in the <b>#android-development</b>&nbsp;
                      channel along with the hashtag <b>#cl-android-unit6</b>
                      &nbsp; and share your badges when you complete the unit.
                      Completing this unit will earn you&nbsp;
                      <b>100 karma points.</b>
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
                    <div className="timeline__event__title">Step Sevent</div>
                    <div className="timeline__event__description">
                      Use Android Jetpack’s WorkManager API to schedule
                      necessary background work. Share your experience in the
                      <b>#android-development</b> channel along with the hashtag
                      <b>#cl-android-unit7</b> and share your badges when you
                      complete the unit. Completing this unit will earn
                      you&nbsp;
                      <b>100 karma points.</b>
                    </div>
                  </div>
                </div>
                <div className="timeline__event animated fadeInUp delay-3s timeline__event--type1">
                  <div className="timeline__event__icon">
                    <img
                      src={require("../assets/steps/freecodecamp.svg").default}
                      alt=""
                    />
                  </div>
                  <div className="timeline__event__date">1</div>
                  <div className="timeline__event__content">
                    <div className="timeline__event__title">Step Eight</div>
                    <div className="timeline__event__description">
                      Learn how to use Compose and the older UI toolkit based on
                      Views side-by-side in the same app. Share your progress
                      and any challenges you faced in the&nbsp;
                      <b>#android-development</b>
                      channel along with the hashtag<b>#cl-android-unit8</b> and
                      don't forget to share your badges. Completing this unit
                      will earn you <b>100 karma points.</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.sample_container}>
              <p className={styles.sample_header}>Example Message</p>
              <p className={styles.sample_message}>
                <b>#android-development</b>
                <br />
                Hey, I have completed the eight unit the Android track. Here are
                my badges for the same.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AndroidCompose;
