import styles from "./About.module.css";
export default function About() {
  return (
    <div className={styles.divContainer}>
        <h1 className={styles.hours} style={{marginTop:"30px"}}>Hours of Operation:</h1>
        <p style={{marginTop:"70px"}}>Monday 11:00AM - 9:00PM</p>
        <p>Tuesday 11:00AM - 9:00PM</p>
        <p>Wednesday 11:00AM - 9:00PM</p>
        <p>Thursday 11:00AM - 9:00PM</p>
        <p>Friday 11:00AM - 9:30PM</p>
        <p>Saturday 11:00AM - 9:30PM</p>
        <p>Monday 11:00AM - 9:00PM</p>
    </div>
  );
}
