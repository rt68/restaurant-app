import styles from './Footer.module.css'

export default function Footer() {
    return (
        <div className={styles.Footer}>
          <h2 className={styles.storeName}>Ramen Time</h2>
        <div className={styles.listContainer}>
          <ul className={styles.list1}>
            <li >Contact</li>
            <li>Tel: (757)-808-7277</li>
            <li>(757)-808-7164</li>
          </ul>
           <ul className={styles.list2}> 
            <li>
              <a href="https://www.facebook.com/RamenTalkwilliamsburg">
                Facebook Page
              </a>
            </li>
            <li>
              <a href="https://www.google.com/maps/place/Ramen+Time/@37.2942501,-76.7257842,15z/data=!4m6!3m5!1s0x89b0891b52203b49:0x9269f0aaafb856ee!8m2!3d37.2942501!4d-76.7257842!16s%2Fg%2F11tsp991zy?entry=ttu">1640 Richmond Rd <br/>Williamsburg, VA 23185</a>
            </li>
          </ul>
          </div>
        </div>
      );
    }