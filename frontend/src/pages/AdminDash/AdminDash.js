//pages/AdminDash/AdminDash

<<<<<<< HEAD
import { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
import * as adminAPI from "../../utilities/admin-api";

function AdminDash() {
=======
import React, {useState, useEffect} from "react";
import * as adminAPI from '../../utilities/admin-api'
import styles from './AdminDash.module.css'

function AdminDash() {

>>>>>>> fe59f163fa1d6d5a7c1efef574a0dbb25e034fe2
  const [users, setUsers] = useState([]);

  useEffect(function () {
    // Load previous orders (paid)
    async function fetchUsers() {
      const users = await adminAPI.getAll();
      setUsers(users);
      // If no orders, activeOrder will be set to null below
<<<<<<< HEAD
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
=======
      
    }
    fetchUsers();
  }, []);
  

  return (
    <div className={styles.AdminDash}>
      <h1>Admin Dashboard</h1>
      <div>
          {users.map(user => (
            <ul key={user._id}>
              <li>{user.name}</li>
              <li>{user.email}</li>
              <li>{user.role}</li>
              <br/>
            </ul>
          ))}
          </div>
    </div>
  );
};

export default AdminDash;
>>>>>>> fe59f163fa1d6d5a7c1efef574a0dbb25e034fe2
