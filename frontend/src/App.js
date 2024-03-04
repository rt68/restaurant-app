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
import AdminDash from "./pages/AdminDash/AdminDash";
import Footer from './components/Footer/Footer'
import About from './pages/About/About'
function App() {
  const [user, setUser] = useState(getUser());
  const [activeCat, setActiveCat] = useState("");
  const [menuItems, setMenuItems] = useState([]);
//Admin
////////////////////////////////////////////////////////////////////////////////////
  const [role, setRole]=useState("");
////////////////////////////////////////////////////////////////////////////////////
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
  ///////////////////////////////////////////////////////////////////////////////////////
  useEffect(()=>{if(user){
    setRole(user.role || "");
  }
  }, [user])
  ///////////////////////////////////////////////////////////////////////////////////////
  return (
    <div className="App">
      <Nav user={user} setUser={setUser} />
      <Routes>
      <Route path="/" element={<Landing />} />
      <Route path='/about' element={<About/>}/>
  {(user && user.role === "customer") ? (
    <>
      <Route path="/" element={<Landing />} />
      <Route path="/orders/new" element={<NewOrder user={user} setUser={setUser} />} />
      <Route path="/orders" element={<OrderHistory user={user} setUser={setUser} />} />
      <Route path="/*" element={<Navigate to="/orders/new" />} />
    </>
  ) : user && user.role === "admin" ? (
      <Route path="/admin" element={<AdminDash/>}/>
  ) : (
    <>
      <Route path="/" element={<Landing />} />
      <Route path="/menu" element={<CategoryMenu user={user} categories={categoriesRef.current} activeCat={activeCat} setActiveCat={setActiveCat} />} />
      <Route path="/menu/:categoryId" element={<MenuListItem menuItems={menuItems.filter((item) => item.category.name === activeCat)} />} />
      <Route path="/users" element={<Auth setUser={setUser} />} />
      <Route path="/orders/new" element={<NewOrder user={user} setUser={setUser} />} />
    </>
  )}
  
</Routes>
<Footer/>
</div>
  );
}
export default App;