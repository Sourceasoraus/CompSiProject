import React from "react";
import { Link } from "react-router-dom";
import styles from "./About.module.css";
import AboutScreenshot from "../../assets/AboutScreenshot.png";
import WhatWeDo from "../../assets/WhatWeDo.png"; // Replace with your actual screenshot names
import SourceData from "../../assets/SourceData.png"; // Replace with your actual screenshot names

const About: React.FC = () => {
  return (
    <div className={styles.aboutPage}>
      {/* Section 1: Screenshot with Dark Blue Background */}
      <section className={styles.section1}>
        <img
          src={AboutScreenshot}
          alt="About page screenshot"
          className={styles.aboutImage}
        />
      </section>

      {/* Section 2: Other Screenshots with Light Blue Background */}
      <section className={styles.section2}>
        <div className={styles.screenshotsContainer}>
          <img
            src={WhatWeDo}
            alt="Other Screenshot 1"
            className={styles.screenshotImage}
          />
          {
            <img
              src={SourceData}
              alt="Other Screenshot 2"
              className={styles.screenshotImage}
            />
          }
        </div>
      </section>

      {/* Section 3: Similar to Home Page's Last Section with FAQ Link */}
      <section className={styles.section3}>
        <h2 className={styles.sectionHeading}>
          Get Involved With Your School Board
        </h2>
        <p className={styles.smallText}>
          Discover ways to participate in school board meetings, engage with
          members, and stay informed about important issues in your district.
        </p>
        <Link to="/faq" className={styles.faqLink}>
          Visit our FAQ page
        </Link>
      </section>
    </div>
  );
};

export default About;
