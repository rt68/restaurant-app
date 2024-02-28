import { useState, useEffect } from "react";
import { getAll } from "../../utilities/items-api";
import { Link } from "react-router-dom";

function Menu() {
  // State to store the fetched items
  const [items, setItems] = useState([]);

  // Fetch items when the component mounts
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const fetchedItems = await getAll();
        setItems(fetchedItems);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []); // The empty array ensures this effect runs only once after initial render

  return (
    <div>
      <h1>Menu</h1>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            <Link to={`/menu/${item._id}`}>
              {item.name} - {item.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
