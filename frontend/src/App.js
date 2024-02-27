
//imports
// import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { getUser } from './utilities/users-service'
import * as itemsAPI from './utilities/items-api';
//pages
import Nav from './components/Nav/Nav';
import Landing from './pages/Landing/Landing';
import Auth from './pages/Auth/Auth';
import NewOrder from './pages/NewOrder/NewOrder';
import Menu from './pages/NewOrder/Menu';
import CategoryList from './components/CategoryList/CategoryList';
import LineItem from './components/LineItem/LineItem';
// import OrderHistory from './pages/OrderHistory/OrderHistory';

function App() {
  const [ user, setUser] = useState(getUser());
  const [activeCat, setActiveCat]=useState("");
  const [menuItems, setMenuItems] = useState([]);
  const categoriesRef = useRef([]);

  useEffect(function() {
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
     <Nav />

     <Routes>
          <Route path="/" element={ <Landing />} />
          {/* <Route path="/menu" element={<Menu />} /> */}
          <Route path="/menu" element={<CategoryList  categories={categoriesRef.current} activeCat={activeCat} setActiveCat={setActiveCat}/>} /> 
          <Route path="/menu/categories" element={<LineItem/>}></Route>
          <Route path="/login" element={<Auth setuser={setUser}/>} />
         {/* <Route path="/orders" element={<OrderHistory />} />
         <Route path="/*" element={<Navigate to="/orders/new" />} /> */}
       </Routes>
    
    </div>
  );
}

export default App;
