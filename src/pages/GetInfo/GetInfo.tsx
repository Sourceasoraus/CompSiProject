import styles from "./GetInfo.module.css";
import FirstReps from "../../assets/FirstReps1.png";
import SecReps from "../../assets/SecReps.png";
import ThirdReps from "../../assets/ThirdReps.png";
import FourthReps from "../../assets/FourthReps.png";

function GetInfo() {
  return (
    <div className={styles.container}>
      <h1>Get Info Page</h1>
      <img
        src={FirstReps}
        alt="First Representatives Screenshot"
        className={styles.image}
      />
      <img
        src={SecReps}
        alt="Second Representatives Screenshot"
        className={styles.image}
      />
      <img
        src={ThirdReps}
        alt="Third Representatives Screenshot"
        className={styles.image}
      />
      <img
        src={FourthReps}
        alt="Fourth Representatives Screenshot"
        className={styles.image}
      />
    </div>
  );
}

export default GetInfo;
