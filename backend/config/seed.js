require('dotenv').config();
require('./database');


//input menu items depending on restaurant

const Category = require('../models/Category');
const Item = require('../models/Item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Ramen Bowls', sortOrder: 10},
    {name: 'Appetizers', sortOrder: 20},
    {name: 'Rice and Noodle', sortOrder: 30},
    {name: 'Salad', sortOrder: 40},
    {name: 'Sushi & Sashimi', sortOrder: 50},
    {name: 'Chef Special Roll', sortOrder: 60},
    {name: 'Regular Roll', sortOrder: 70},
    {name: "Drink", sortOrder: 80},
    {name: "Extras", sortOrder: 90}
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Tonkotsu Ramen', description:"Cha Shu, Corn, Bamboo Shoot, Wood Ear, Egg, Scallion", category: categories[0], price: 14.49},
    {name: 'Miso Ramen', description:"Cha Shu, Corn, Bamboo Shoot, Wood Ear, Egg, Scallion", category: categories[0], price: 14.49},
    {name: 'Kimchi Ramen', description:"Cha Shu, Kimchi, Corn, Bamboo Shoot, Wood Ear, Egg, Scallion", category: categories[0], price: 15.49},
    {name: 'Vegetable Ramen', description:"Tofu, Broccoli, Wood Ear, Corn, Scallion, Radish, Bamboo Shoot", category: categories[0], price: 15.49},
    {name: 'Shoyu Ramen', description:"Cha Shu, Corn, Bamboo Shoot, Wood Ear, Egg, Scallion", category: categories[0], price: 15.49},
    {name: 'Hell Ramen', description:"Cha Shu, Corn, Bamboo Shoot, Wood Ear, Egg, Scallion",category: categories[0], price: 18.49},
    {name: 'Chicken Ramen', cdescription:"Chicken, Corn, Bamboo Shoot, Wood Ear, Egg, Scallion", category: categories[0], price: 16.49},
    {name: 'Seafood Ramen', description: "Scallion, Shrimp, Fish Cake, Mussel, Tofu, Corn", category: categories[0], price: 18.49},

    {name: 'Edamame', category: categories[1], price: 5.99},
    {name: 'Dumpling (6pcs)', description: "Steamed /Fried /Pan Fried", category: categories[1], price: 5.99},
    {name: 'Steamed Pork Bao Bun', category: categories[1], price: 3.99},
    {name: 'Fried Purple Potato', category: categories[1], price: 4.99},
    {name: 'Spring Rolls (3pcs)', category: categories[1], price: 4.99},
    {name: 'Scallion Pancake', category: categories[1], price: 4.99},
    {name: 'Aged Tofu', category: categories[1], price: 5.99},
    {name: 'Steamed Chasiu Bao', category: categories[1], price: 6.99},
    {name: 'Crab Rangoon (6pcs)', category: categories[1], price: 6.49},
    {name: 'Tempura Shrimp (5pcs)', category: categories[1], price: 8.49},
    {name: 'Chicken Karaage', category: categories[1], price: 7.99},
    {name: 'Okonomiyaki', category: categories[1], price: 7.99},
    {name: 'Fried Chicken Wings (6pcs)', category: categories[1], price: 8.49},
    {name: 'Takoyaki', category: categories[1], price: 7.99},
    {name: 'Fried Oyster', category: categories[1], price: 9.99},
    {name: 'Fried Squid', category: categories[1], price: 9.99},

    {name: 'Egg Fried Rice', category: categories[2], price: 9.99},
    {name: 'Shrimp Fried Rice', category: categories[2], price: 15.49},
    {name: 'Seafood Fried Rice', category: categories[2], price: 18.49},
    {name: 'Pork Katsu Over Rice', category: categories[2], price:15.49},
    {name: 'Braised Pork Over Rice', category: categories[2], price: 13.49},
    {name: 'Curry Fried Mei Fun', description: "Chicken/Shrimp/Cha Shu",category: categories[2], price: 13.99},
    {name: 'Fried Mei Fun', description:"Chicken/Shrimp/Cha Shu",category: categories[2], price: 12.99},
    {name: 'Stir Fried Noodle', description:"Chicken/Shrimp/Cha Shu",category: categories[2], price: 12.99},
    {name: 'Stir Fried Udon Noodle', description:"Chicken/Shrimp/Cha Shu",category: categories[2], price: 13.99},

    {name: 'Kani Salad', category: categories[3], price: 6.95},
    {name: 'Seaweed Salad', category: categories[3], price: 6.25},

    {name: 'Salmon(2pc)', category: categories[4], price: 5.50},
    {name: 'Tuna(2pc)', category: categories[4], price: 5.50},
    {name: 'Yellowtail(2pc)', category: categories[4], price: 5.50},
    {name: 'Eel(2pc)', category: categories[4], price: 5.95},
    {name: 'Crabstick(2pc)', category: categories[4], price: 4.25},

    {name: 'Avocado Roll', category: categories[6], price: 4.25},
    {name: 'Cucumber Roll', category: categories[6], price: 4.25},
    {name: 'California Roll', category: categories[6], price: 5.75},
    {name: 'Avocado Cucumber Roll', category: categories[6], price: 4.95},
    {name: 'Sweet Potato Roll', category: categories[6], price: 5.25},
    {name: 'Philadelphia Roll', category: categories[6], price: 5.95},
    {name: 'Salmon Roll', category: categories[6], price: 5.50},
    {name: 'Tuna Roll', category: categories[6], price: 5.50},
    {name: 'Yellowtail Scallion Roll', category: categories[6], price: 5.75},
    {name: 'Eel Avocado Roll', category: categories[6], price: 6.75},
    {name: 'Eel Cucumber Roll', category: categories[6], price: 6.75},
    {name: 'Mango Shrimp Roll', category: categories[6], price: 5.95},
    {name: 'Spicy Tuna Roll', category: categories[6], price: 5.95},
    {name: 'Spicy Salmon Roll', category: categories[6], price: 5.95},
    {name: 'Salmon Avocado Roll', category: categories[6], price: 6.50},
    {name: 'Tuna Avocado Roll', category: categories[6], price: 6.50},
    {name: 'Spicy Crab Meat Roll', category: categories[6], price: 5.50},
    {name: 'Spicy Shrimp Roll', category: categories[6], price: 5.50},

    {name: 'Pepsi/ Diet Pepsi', category: categories[7], price: 2.99}, 
    {name: 'Starry', category: categories[7], price: 2.99},
    {name: 'Lemonade', category: categories[7], price: 2.99},
    {name: 'Dr. Pepper', category: categories[7], price: 2.99},
    {name: 'Ginger Ale', category: categories[7], price: 2.99},
    {name: 'Apple Juice', category: categories[7], price: 2.99},
    {name: 'Green Tea', category: categories[7], price: 1.50},
    {name: 'Thai Tea', category: categories[7], price: 3.49},
    {name: 'Ramunee(Strawberry)', category: categories[7], price: 3.75},
    {name: 'Ramunee(Original)', category: categories[7], price: 3.75},

    {name: 'Extra Noodle', category: categories[8], price: 2.50},
    {name: 'Chashu Pork (2 slices)', category: categories[8], price: 2.50},
    {name: 'Big Shrimp (2 slices)', category: categories[8], price: 3.50},
    {name: 'Corn', category: categories[8], price: 2.00},
    {name: 'Bamboo Shoot', category: categories[8], price: 2.00},
    {name: 'Egg', category: categories[8], price: 1.00},
    {name: 'Wood Ear', category: categories[8], price: 2.00},
    {name: 'Kimchi', category: categories[8], price: 2.50},
  ]);

  console.log(items)

  process.exit();

})();