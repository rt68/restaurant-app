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
     <button onClick={()=>handleAddToOrder(item._id)}>ADD</button>



     {/* onClick={() => handleAddToOrder(menuItems._id) */}
    </div>
  ));

  return <main className={styles.MenuList}>{items}</main>;
}
