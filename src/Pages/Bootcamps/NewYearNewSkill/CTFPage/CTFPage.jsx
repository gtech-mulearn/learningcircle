import React, { useEffect, useState } from "react";
import Navbar from "../../../../Components/Navbar/Navbar"
import Footer from "../../../../Components/Footer/Footer"
import styles from "./CTFPage.module.css";

const CTFPage = () => {
  const [data, setData] = useState();
  useEffect(() => {
    setData(require("./newdata.json"));
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>
                <span> Intro </span> to CTF
              </p>
              <p className={styles.fv_subheading}>5 Days Hands On Bootcamp</p>
              <p className={styles.fv_content}>
                Pentesting is a hard thing. It's even harder to figure out how
                to get started on this journey. This workshop is aimed toward
                absolute beginners and to give them an easy understanding
                learning path.
                <br />
                <br />
                We are focused on cracking OSCP like Kioptrix. Kioptrix
                boot-to-root VMs are well known as a good starting vulnerable
                machines for hacking challenges. This is especially true for
                those who are looking to pursue the OSCP certification, as it is
                considered to be beginner-friendly
              </p>
              {/* <p className={styles.officehrs}>
                <span>Office Hours : </span> Thursday 07:00PM @ Discord Lobby
              </p>
              <p className={styles.officehrs}>
                <span>Think Tank Meet : </span> Tuesday 09:00 PM @ Google Meet
              </p> */}
              <p className={styles.startingdate}>Starting On <span>1st January 2023</span></p>
              <div className={styles.supporters}>
                <span>Supported By </span>
                <div className={styles.s_images}>
                  <a
                    href="https://www.riglabs.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/assets/bootcamp/ctf/riglabs.png"
                      alt="Riglabs"
                      className={styles.supporter}
                    />
                  </a>
                </div>
                <div className={styles.s_images}>
                  <a
                    href="https://linktr.ee/Nixie_Bytes"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/assets/bootcamp/ctf/Nixie.png"
                      alt="Lyminal"
                      className={styles.supporter}
                    />
                  </a>
                </div>
                <div className={styles.s_images}>
                  <a
                    href="https://lyminal.space/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/assets/bootcamp/ctf/lyminal.png"
                      alt="Lyminal"
                      className={styles.supporter}
                    />
                  </a>
                </div>
              </div>
              <button className={styles.register}>Registrations Closed</button>
            </div>
            <div className={styles.fv_image}>
              <img
                src="/assets/bootcamp/ctf/fvimg.gif"
                alt=""
                className={styles.fv_img}
              />
            </div>
          </div>
        </div>
        <div className={styles.second_view_container}>
          <div className={styles.second_view}>
            <div className={styles.sv_texts}>
              <p className={styles.sv_heading}>
                Getting <span> Started</span>
              </p>
              <p className={styles.sv_content}>
                This workshop is divided into 2 parts. The learning section and
                the challenge section
              </p>
            </div>
            <div className={styles.sv_sections}>
              <div className={styles.sv_section_one}>
                <div className={styles.svs_texts}>
                  <p className={styles.section_preheading}>ONLINE</p>
                  <p className={styles.section_heading}>Part One</p>
                </div>
                <div className={styles.svs_boxes}>
                  <div className={styles.svs_box}>
                    <p className={styles.box_header}>Day 01</p>
                    <ul>
                      <li>Introduction to Fundamentals of Cyber Security.</li>
                    </ul>
                  </div>
                  <div className={styles.svs_box}>
                    <p className={styles.box_header}>Day 02</p>
                    <ul>
                      <li>Linux OS Basics</li>
                      <li>Introduction to Netowrk</li>
                    </ul>
                  </div>
                  <div className={styles.svs_box}>
                    <p className={styles.box_header}>Day 03</p>
                    <ul>
                      <li>Introduction to Network</li>
                      <li>5 Stages of Hacking</li>
                    </ul>
                  </div>
                  <div className={styles.svs_box}>
                    <p className={styles.box_header}>Day 04</p>
                    <ul>
                      <li>5 Stages of Hacking</li>
                    </ul>
                  </div>
                  <div className={styles.svs_box}>
                    <p className={styles.box_header}>Day 05</p>
                    <ul>
                      <li>Exploitation Basics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles.sv_section_second}>
                <div className={styles.svs_texts}>
                  <p className={styles.section_preheading}>OFFLINE</p>
                  <p className={styles.section_heading}>Part Two</p>
                </div>
                <div className={styles.svs_boxes}>
                  <div className={styles.svs_box}>
                    <p className={styles.box_header}>Challenge</p>
                    <ul>
                      <li>CTF Challenge</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.third_view_container}>
          <div className={styles.third_view}>
            <div className={styles.sv_texts}>
              <p className={styles.sv_heading}>
                Detailed <span> Plan Structure</span>
              </p>
              <p className={styles.sv_content}>
                Shown below are the detailed plan structure for each day. Click
                above cards to view the plan for each day.
              </p>
            </div>
            <div className={styles.tv_plan_structures}>
              <p className={styles.plan_header}>
                Workshop <span>Plan</span>
              </p>

              <div className={styles.tv_plan_structure}>
                {data &&
                  data.plan &&
                  data.plan.map((day) => (
                    <div className={styles.detailed_structure}>
                      <p className={styles.plan_day}>Day 0{day.day}</p>
                      <p className={styles.plan_title}>{day.title}</p>
                      {day.p1 && (
                        <div className={styles.topics}>
                          <div className={styles.topic}>
                            <span className={styles.topic_number}>01</span>
                            <div>
                              <p className={styles.topic_title}> {day.p1[0]}</p>
                              <p className={styles.topic_subtitle}>
                                {day.p1[1]}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                      {day.p2 && (
                        <div className={styles.topics}>
                          <div className={styles.topic}>
                            <span className={styles.topic_number}>02</span>
                            <div>
                              <p className={styles.topic_title}> {day.p2[0]}</p>
                              <p className={styles.topic_subtitle}>
                                {day.p2[1]}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                      {day.p3 && (
                        <div className={styles.topics}>
                          <div className={styles.topic}>
                            <span className={styles.topic_number}>03</span>
                            <div>
                              <p className={styles.topic_title}> {day.p3[0]}</p>
                              <p className={styles.topic_subtitle}>
                                {day.p3[1]}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                      {day.p4 && (
                        <div className={styles.topics}>
                          <div className={styles.topic}>
                            <span className={styles.topic_number}>04</span>
                            <div>
                              <p className={styles.topic_title}> {day.p4[0]}</p>
                              <p className={styles.topic_subtitle}>
                                {day.p4[1]}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                      {day.p5 && (
                        <div className={styles.topics}>
                          <div className={styles.topic}>
                            <span className={styles.topic_number}>05</span>
                            <div>
                              <p className={styles.topic_title}> {day.p5[0]}</p>
                              <p className={styles.topic_subtitle}>
                                {day.p5[1]}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                      {day.p6 && (
                        <div className={styles.topics}>
                          <div className={styles.topic}>
                            <span className={styles.topic_number}>06</span>
                            <div>
                              <p className={styles.topic_title}> {day.p6[0]}</p>
                              <p className={styles.topic_subtitle}>
                                {day.p6[1]}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                      {day.p7 && (
                        <div className={styles.topics}>
                          <div className={styles.topic}>
                            <span className={styles.topic_number}>07</span>
                            <div>
                              <p className={styles.topic_title}> {day.p7[0]}</p>
                              <p className={styles.topic_subtitle}>
                                {day.p7[1]}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                      {day.p8 && (
                        <div className={styles.topics}>
                          <div className={styles.topic}>
                            <span className={styles.topic_number}>08</span>
                            <div>
                              <p className={styles.topic_title}> {day.p8[0]}</p>
                              <p className={styles.topic_subtitle}>
                                {day.p8[1]}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.fourth_view_container}>
          <div className={styles.fourth_view}>
            <div className={styles.sv_texts}>
              <p className={styles.sv_heading}>
                Minimum <span> System Requirements</span>
              </p>
              <p className={styles.sv_content}>
                For having a smooth experience throughout this bootcamp. You
                will need to have a system with the following requirements.
              </p>
            </div>
            <div className={styles.requirements_container}>
              <div className={styles.requirements}>
                <ul>
                  <li>
                    <span>CPU:</span> 2Core, 2.8GHz - Intel/AMD
                  </li>
                  <li>
                    <span>RAM:</span> 4GB DDR3 (8 GB DDR3 Recommended)
                  </li>
                  <li>
                    <span>Storage:</span> 40GB HDD
                  </li>
                  <li>
                    <span>Operating System:</span> Windows 64-bit, Kali
                    Linux(VMWare), Ralph OS(VMWare)
                  </li>
                  <li>
                    <span>Misc:</span> Support for Virtualization enabled via
                    BIOS
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CTFPage;
