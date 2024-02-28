
//imports
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { getUser } from './utilities/users-service'
//pages
import Nav from './components/Nav/Nav';
import Landing from './pages/Landing/Landing';
import Auth from './pages/Auth/Auth';
import NewOrder from './pages/NewOrder/NewOrder';
import Menu from './pages/NewOrder/Menu'
import OrderHistory from './pages/OrderHistory/OrderHistory';
import LoginForm from './components/LoginForm/LoginForm';
import SignUpForm from './components/SignUpForm/SignUpForm';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <div className="App">
      <Nav  user={user} setUser={setUser} />
      <Routes>
        {user ? (
          // Authenticated routes
          <>
            <Route path="/orders/new" element={<NewOrder user={user} setUser={setUser} />} />
            <Route path="/orders" element={<OrderHistory user={user} setUser={setUser} />} />
            <Route path="/*" element={<Navigate to="/orders/new" />} />
            <Route path="/menu" element={<Menu />} />
          </>
        ) : (
          // Non-authenticated route
          <>
            <Route path="/menu" element={<Menu />} />
            <Route path="/" element={<Landing/>}/>
          </>

        )}
      </Routes>
    </div>
  );
}

export default App;

