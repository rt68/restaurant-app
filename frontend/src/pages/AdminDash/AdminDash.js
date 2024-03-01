//pages/AdminDash/AdminDash

import { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
import * as adminAPI from "../../utilities/admin-api";

function AdminDash() {
  const [users, setUsers] = useState([]);

  useEffect(function () {
    // Load previous orders (paid)
    async function fetchUsers() {
      const users = await adminAPI.getAll();
      setUsers(users);
      // If no orders, activeOrder will be set to null below
    }
    fetchUsers();
  }, []);
  console.log(users);
  return (
    <div>
      <h3>Admin Dashboard</h3>
      {users.map((user) => (
        <div key={user._id}>
          <p>Name: {user.name} </p>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
        </div>
      ))}
    </div>
  );
}

export default AdminDash;
