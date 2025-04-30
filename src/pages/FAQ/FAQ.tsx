import React from "react";
import styles from "./FAQ.module.css";
import QuestionsScreenshot from "../../assets/QuestionsScreenshot.png";

const FAQ: React.FC = () => {
  return (
    <>
      {/* Beige Section with FAQ Heading */}
      <section className={styles.faqHeadingSection}>
        <h2 className={styles.faqHeading}>Frequently Asked Questions</h2>
      </section>

      {/* Light Blue Section with Screenshot */}
      <section className={styles.screenshotSection}>
        <img
          src={QuestionsScreenshot}
          alt="FAQ Screenshot"
          className={styles.faqScreenshot}
        />
      </section>
    </>
  );
};

export default FAQ;
