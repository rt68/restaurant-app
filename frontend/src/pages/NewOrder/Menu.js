
import { useState, useEffect } from 'react';
import { getAll } from '../../utilities/items-api';
import { Link } from "react-router-dom";
import Modal from '../../components/Modal/MenuItemModal';

function Menu() {
  // State to store the fetched items
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null); // To track the selected item
  const [isModalOpen, setIsModalOpen] = useState(false); // To control modal visibility


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
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };
  return (
    <div>
      <h1>Menu</h1>
      <ul>
      {items.map((item) => (
          <li key={item._id} style={{ cursor: 'pointer' }} onClick={() => handleItemClick(item)}>
            <img src={item.img} alt={item.name} style={{ maxWidth: "150px", height: "auto" }} />
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {selectedItem && (
          <div>
            <h2>{selectedItem.name}</h2>
           <p>Description: {selectedItem.description}</p>
            <p>Price: {selectedItem.price}</p>
            <img src={selectedItem.img} alt={selectedItem.name} style={{ maxWidth: "100%", height: "auto" }} />
            {/* Include any other details you want to show */}
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Menu;


//{items.map(item => (
 // <li key={item.id}>{item.name} - {item.price} {/* Adjust according to your item structure */}</li>
//))}