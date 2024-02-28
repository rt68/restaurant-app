import styles from "./MenuListItem.module.css";
import { Link } from 'react-router-dom';
export default function MenuListItem({ menuItem, handleAddToOrder }) {
  return (
    
    <div className={styles.MenuListItem}>
      <Link to={`/menu/category/${menuItem._id}`} className="menu-item-link">
      <div className={styles.img + " " + "flex-ctr-ctr"}>
        {menuItem.img}
      </div>
      <div className={styles.name}>{menuItem.name}</div>
      </Link>
      <div className={styles.buy}>
        <span>${menuItem.price.toFixed(2)}</span>
        
        <button
          className="btn-sm"
          onClick={() => handleAddToOrder(menuItem._id)}
        >
          ADD
        </button>
      </div>
    </div>
    
  );
}
