import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

import Texas from "../../assets/TexasGraphic.png";
import Step1 from "../../assets/Step1.png";
import Step2 from "../../assets/Step2.png";
import Step3 from "../../assets/Step3.png";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.home}>
      {/* Section 1: Learn about your school board */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.leftSide}>
            <img
              src={Texas}
              alt="Texas outline"
              className={styles.TexasStyles}
            />

            <div className={styles.searchBox}>
              <label htmlFor="district-search" className={styles.searchLabel}>
                Welcome to Civic Citizens
              </label>
              <input
                type="text"
                id="district-search"
                className={styles.searchInput}
                placeholder="Enter school district..."
              />
              <button
                className={styles.searchButton}
                onClick={() => navigate("/getinfo")}
              >
                Search
              </button>
            </div>
          </div>

          <div className={styles.rightSide}>
            <div className={styles.sectionHeading2}>
              <h1>Learn About Your School Board</h1>
            </div>
            <div className={styles.smallText2}>
              <p>
                Find information on the school board members and elections by
                searching for your Texas school district.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: How it works */}
      <section className={styles.howItWorksSection}>
        <h2 className={styles.sectionHeader}>How it Works</h2>
        <div className={styles.stepsContainer}>
          <div className={styles.step}>
            <img
              src={Step1}
              alt="Find your school board"
              className={styles.stepGraphic}
            />
            <h3>Find your School Board</h3>
            <div className={styles.infoText}>
              <p>Enter your school district to view information regarding it</p>
            </div>
          </div>
          <div className={styles.step}>
            <img
              src={Step2}
              alt="Learn about your members"
              className={styles.stepGraphic}
            />
            <h3>Learn about your Members</h3>
            <div className={styles.infoText}>
              <p>
                Read about current board members and their positions on key
                issues
              </p>
            </div>
          </div>
          <div className={styles.step}>
            <img
              src={Step3}
              alt="See upcoming elections and info"
              className={styles.stepGraphic}
            />
            <h3>See Upcoming Elections and Info</h3>
            <div className={styles.infoText}>
              <p>
                Get details on upcoming school board elections, including
                candidates and voting dates
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Get involved with your school board */}
      <div className={styles.section3}>
        <h2 className={styles.sectionHeading3}>
          Get Involved With Your School Board
        </h2>
        <p className={styles.smallText4}>
          Discover ways to participate in school board meetings, engage with
          members, and stay informed about important issues in your district.
        </p>
      </div>
    </div>
  );
};

export default Home;
