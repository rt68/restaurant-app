/* eslint-disable no-unused-vars */
//imports
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { getUser } from "./utilities/users-service";
import * as itemsAPI from "./utilities/items-api";
//pages
import Nav from "./components/Nav/Nav";
import Landing from "./pages/Landing/Landing";
import Auth from "./pages/Auth/Auth";
import NewOrder from "./pages/NewOrder/NewOrder";

import CategoryMenu from "./pages/Menu/CategoryMenu"
import MenuListItem from "./components/MenuListItem/MenuListItem";

import OrderHistory from "./pages/OrderHistory/OrderHistory";

function App() {
  const [user, setUser] = useState(getUser());
  const [activeCat, setActiveCat] = useState("");
  const [menuItems, setMenuItems] = useState([]);
  const categoriesRef = useRef([]);

  useEffect(function () {
    async function getItems() {
      const items = await itemsAPI.getAll();
      categoriesRef.current = items.reduce((cats, item) => {
        const cat = item.category.name;
        return cats.includes(cat) ? cats : [...cats, cat];
      }, []);
      setMenuItems(items);
      setActiveCat(categoriesRef.current[0]);
    }
    getItems();
  }, []);

  return (
    <div className="App">
      <Nav user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Landing />} />

        {user ? (
          // Authenticated routes
          <>
            <Route
              path="/orders/new"
              element={<NewOrder user={user} setUser={setUser} />}
            />
            <Route
              path="/orders"
              element={<OrderHistory user={user} setUser={setUser} />}
            />

            <Route path="/orders/new" element={<NewOrder user={user} setUser={setUser} />} />
            <Route path="/orders" element={<OrderHistory user={user} setUser={setUser} />} />

            <Route path="/*" element={<Navigate to="/orders/new" />} />

            {/* <Route path="/menu" element={<Menu />} /> */}
          </>
        ) : (
          // Non-authenticated route
          <>
            <Route path="/menu" element={<Menu />} />
            <Route path="/users" element={<Auth setUser={setUser} />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
