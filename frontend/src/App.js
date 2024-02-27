
//imports
// import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { getUser } from './utilities/users-service'
//pages
import Nav from './components/Nav/Nav';
import Landing from './pages/Landing/Landing';
import Auth from './pages/Auth/Auth';
import NewOrder from './pages/NewOrder/NewOrder';
import Menu from './pages/NewOrder/Menu';
// import OrderHistory from './pages/OrderHistory/OrderHistory';

function App() {
  const [ user, setUser] = useState(getUser());
  return (
    <div className="App">
     <Nav />
     <Routes>
          <Route path="/" element={ <Landing />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/login" element={<Auth setuser={setUser}/>} />
         {/* <Route path="/orders" element={<OrderHistory />} />
    
         <Route path="/*" element={<Navigate to="/orders/new" />} /> */}
       </Routes>
    
    </div>
  );
}

export default App;
