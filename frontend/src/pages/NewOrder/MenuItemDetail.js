import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getById } from "../../utilities/items-api";

function MenuItemDetail() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        console.log(`Fetching item with ID: ${itemId}`);
        const fetchedItem = await getById(itemId);
        console.log("Fetched item:", fetchedItem);
        setItem(fetchedItem);
      } catch (error) {
        console.error("Error fetching menu item details:", error);
      }
    };
    fetchItem();
  }, [itemId]);
  if (!item) {
    return <div>Please wait, loading...</div>;
  }
  return (
    <div>
      <h1>{item.name}</h1>
      <p>Pirce: {item.price}</p>
      <p>Description: {item.description}</p>
      {item.img}
    </div>
  );
}
export default MenuItemDetail;
