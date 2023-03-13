import React from "react"
import Footer from "../../../../Components/Footer/Footer"
import Navbar from "../../../../Components/Navbar/Navbar"
import styles from "./FayaDigitalMarketing.module.css"

const FayaDigitalMarketing = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>
                Digital Marketing <span>Challenge </span>
              </p>
              <p className={styles.fv_content}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                deleniti facilis sit ullam, porro assumenda ad praesentium
                voluptatem, magni repellendus exercitationem natus laudantium
                pariatur dolorum?
              </p>

              {/* <div className={styles.buttons}>
                <a
                  href="https://airtable.com/shruzfIc8SR4BLCg2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className={styles.joinchallenge}>Register</button>
                </a>
                <a
                  href="https://forms.gle/MTgBoNJd7RMhs3yc8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className={styles.joinchallenge}>
                    Upload Solution
                  </button>
                </a>
              </div> */}
            </div>
          </div>
        </div>
        <div className={styles.second_view_container}>
          <div className={styles.second_view}>
            <div className={styles.sv_texts}>
              <p className={styles.sv_heading}>These are you Tasks</p>
              <p className={styles.fv_content}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                deleniti facilis sit ullam.
              </p>
            </div>
          </div>
          <div className={styles.tasks_container}>
            <div className={styles.task}>
              <p className={styles.task_number}>Task 1</p>
              <p className={styles.task_description}>
                Write a Blog post using approximately 500 words on any two of
                the following topics.
              </p>
              <ul className={styles.task_lists}>
                <li className={styles.list_item}>
                  Wholesale e-commerce in the US Post-COVID.
                </li>
                <li className={styles.list_item}>What if Social Media dies</li>
                <li className={styles.list_item}>
                  Will India be the Next Superpower?
                </li>
                <li className={styles.list_item}>
                  The next big thing in Social Media.
                </li>
              </ul>
            </div>
            <div className={styles.task}>
              <p className={styles.task_number}>Task 2</p>
              <p className={styles.task_description}>
                Write 3 short Marketing Phrases on each of the following (3
                Phrases are needed for items 1-4 in the below list. For 4 & 5
                multiple phrases are not needed)
              </p>
              <ul className={styles.task_lists}>
                <li className={styles.list_item}>
                  Your favourite product or brand
                </li>
                <li className={styles.list_item}>
                  Amazon or any of their products
                </li>
                <li className={styles.list_item}>Your college</li>
                <li className={styles.list_item}>A new movie on Netflix</li>
                <li className={styles.list_item}>
                  An impressive one-liner About Yourself on Instagram
                </li>
                <li className={styles.list_item}>An impressive Quora bio.</li>
              </ul>
              <p className={styles.extra_note}>
                A short marketing phrase is a persuasive & swaying piece of
                writing which could be Any of the following: a) Taglines b)
                Slogans c) Tweets d) SMS e) Email subject lines
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default FayaDigitalMarketing
