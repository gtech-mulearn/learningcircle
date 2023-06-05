import React, { useState, useEffect } from "react";
import styles from "./IGBootcamp.module.css";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";

import { useParams } from "react-router-dom";
import axios from "axios";

const IGBootcamp = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [commonData, setCommonData] = useState();

  const boldTextBetweenHashtagAndSpace = (text) => {
    const pattern = /#([^ ]+)/g;
    const boldText = text.replace(pattern, (match, word) => `<b>#${word}</b>`);
    return <div dangerouslySetInnerHTML={{ __html: boldText }} />;
  };

  useEffect(() => {
    axios
      .get(
        `https://opensheet.elk.sh/15EurXumruFeT9D9s7aJSR8r1Zv9a9-iQnA5CGPbx0Xg/${id}`
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(
        "https://opensheet.elk.sh/15EurXumruFeT9D9s7aJSR8r1Zv9a9-iQnA5CGPbx0Xg/commondata"
      )
      .then((response) => {
        const commonData = response.data.filter((item) => item.ig === id);
        setCommonData(commonData[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <>
      <Navbar />
      {commonData && data && (
        <div className={styles.main_container}>
          <div className={styles.first_view_container}>
            <div className={styles.first_view}>
              <div className={styles.fv_texts}>
                <p className={styles.fv_heading}>
                  {commonData && commonData.pageTitle}
                </p>
                <p className={styles.fv_content}>
                  {commonData && commonData.largedesc}
                  <br />
                </p>
                {commonData && (
                  <p className={styles.late_date}>
                    Get {commonData && commonData.totalKarmaPoints} Karma Points
                    on Course Completion
                  </p>
                )}
                <br />
                {commonData && (
                  <a
                    href={commonData.commonResoureLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className={styles.joinchallenge}>
                      Resource Material
                    </button>
                  </a>
                )}
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
                  {data &&
                    data.map((item, index) => (
                      <div className="timeline__event animated fadeInUp timeline__event--type1">
                        <div className="timeline__event__icon">
                          <img
                            src={
                              require("../assets/steps/freecodecamp.svg")
                                .default
                            }
                            alt=""
                          />
                        </div>
                        <div className="timeline__event__date">{item.slno}</div>
                        <div className="timeline__event__content">
                          <div className="timeline__event__title">
                            {item.step}
                          </div>
                          <div className="timeline__event__description">
                            {boldTextBetweenHashtagAndSpace(item.description)}
                          </div>
                          <br />
                          {item.link && (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Click Here: Resource Link
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              {commonData && commonData.exampleMessage && (
                <div className={styles.sample_container}>
                  <p className={styles.sample_header}>Example Message</p>
                  <p className={styles.sample_message}>
                    <b>{data[0].hashtag}</b>
                    <br />
                    {commonData && commonData.exampleMessage}
                    {/* <a href={commonData && commonData.exampleMessageImageLink}>
                    {commonData && commonData.exampleMessageImageLink}
                  </a> */}
                  </p>
                  {commonData && commonData.exampleMessageImageLink && (
                    <img
                      src={commonData.exampleMessageImageLink}
                      alt="google developer profile"
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default IGBootcamp;
