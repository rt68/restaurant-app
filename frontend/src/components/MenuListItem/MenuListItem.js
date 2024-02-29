import styles from "./MenuListItem.module.css";
import { Link } from "react-router-dom";
export default function MenuListItem({ menuItems }) {
  const items = menuItems.map((item, _id) => (
    <div key={_id}>
      {item.img && (
        <img
          src={item.img}
          alt={item.name}
          style={{ maxWidth: "150px", height: "auto" }}
        />
      )}
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <h1>${item.price}</h1>
    </div>
  ));
console.log(items);
  return <main className={styles.MenuListItem}>{items}</main>;}
