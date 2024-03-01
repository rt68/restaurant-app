import styles from './About.module.css'
export default function About() {
  return (
    <main className={styles.divContainer}>
      <ul className={styles.time1}>
        <li className={styles.hours}>Hours of Operation:</li>
        <li>Monday 11:00AM - 9:00PM</li>
        <li>Tuesday 11:00AM - 9:00PM</li>
        <li>Wednesday 11:00AM - 9:00PM</li>
        <li>Thursday 11:00AM - 9:00PM</li>
        <li>Friday 11:00AM - 9:30PM</li>
        <li>Saturday 11:00AM - 9:30PM</li>
        <li>Monday 11:00AM - 9:00PM</li>
      </ul>
    </main>
  );

}



