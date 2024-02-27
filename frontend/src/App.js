
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
import OrderHistory from './pages/OrderHistory/OrderHistory';

function App() {
  const [ user, setUser] = useState(getUser());
  return (
    <div className="App">
     <Nav />
      <Landing />
    </div>
  );
}

export default App;
