
import { useState, useEffect } from 'react';
import { getAll } from '../../utilities/items-api';

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
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []); // The empty array ensures this effect runs only once after initial render

  return (
    <div>
      <h1>Menu</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name} - {item.price} {/* Adjust according to your item structure */}</li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
