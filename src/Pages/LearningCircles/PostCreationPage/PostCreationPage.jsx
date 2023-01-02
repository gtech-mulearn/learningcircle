import React from "react";
import styles from "./PostCreationPage.module.css";

import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";

const PostCreationPage = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PostCreationPage;
