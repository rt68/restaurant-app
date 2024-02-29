// import styles from "./MenuList.module.css";
// import MenuListItem from "../MenuListItem/MenuListItem";

// export default function MenuList({ menuItems, handleAddToOrder }) {
//   const items = menuItems.map((item) => (
//     <MenuListItem
//       key={item._id}
//       handleAddToOrder={handleAddToOrder}
//       item={item}
//     />
//   ));
//   return <main className={styles.MenuList}>{items}</main>;
// }


import styles from "./MenuList.module.css";
// import { Link } from "react-router-dom";
export default function MenuList({ menuItems, handleAddToOrder }) {
  const items = menuItems.map((item) => (
    <div className={styles.MenuList}>
      {item.img && (
        <img
          src={item.img}
          alt={item.name}
          style={{ maxWidth: "250px", height: "auto" , border:"1px solid #648565" }}
        />
      )}
       <button className={styles.add} onClick={()=>handleAddToOrder(item._id)}>ADD</button>
      <div className={styles.name}>{item.name}</div>
     
      <p className={styles.description}>{item.description}</p>
      <span className={styles.price}>${item.price}</span>
    
    


     {/* onClick={() => handleAddToOrder(menuItems._id) */}
    </div>
  ));

  return <main className={styles.MenuList}>{items}</main>;
}
