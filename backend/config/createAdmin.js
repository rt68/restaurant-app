require("dotenv").config();
mongoose = require("./database");
const User = require('../models/User')
// const bcrypt = require('bcrypt');

// const createAdmin = async () => {
//     const hashedPassword = await bcrypt.hash('1234', 6); 
  
//     const adminUser = new User({
//       name: 'Admin User',
//       email: 'admin@example.com',
//       password: hashedPassword,
//       role: 'admin',
//     });
  
const createAdmin = async () => {
    
    const adminUser = new User({
      name: 'Admin2',
      email: 'admin2@example.com',
      password: '1234',
      role: 'admin',
    });
    try {
      await adminUser.save();
      console.log('Admin user created successfully');
      mongoose.disconnect();
    } catch (error) {
      console.error('Error creating admin user:', error);
      mongoose.disconnect();
    }
  };
  
  createAdmin();