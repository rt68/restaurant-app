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
    {name: "Extras", sortOrder: 90},

    {name: 'Sandwiches', sortOrder: 10},
    {name: 'Seafood', sortOrder: 20},
    {name: 'Mexican', sortOrder: 30},
    {name: 'Italian', sortOrder: 40},
    {name: 'Sides', sortOrder: 50},
    {name: 'Desserts', sortOrder: 60},
    {name: 'Drinks', sortOrder: 70},

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
    
    {name: 'Bruce Roll', description:" Lump Crab & Shrimp Tempura inside Avocado layer on top & Eel Sauce", category: categories[5], price: 14.95},
    {name: 'Dragon Roll', description:"Eel Cucumber inside, Avocado & Eel sauce & fish egg", category: categories[5], price: 12.95},
    {name: 'Big Boss Roll', description:"Lump Crab Meat, Shrimp Tempura inside, Eel,Avocado on top, Eel sauce and sesame", category: categories[5], price: 17.95},
    {name: 'Tuna Bonfire Roll', description:" Spicy Tuna & Jalapeno inside, Topped with Tuna & Avocado", category: categories[5], price: 12.95},
    {name: 'Godzilla Roll', description:"Avocado, Tuna, White fish, Cheese and Spicy mayo all deep-fried topped with Spicy mayo and Eel Sauce.", category: categories[5], price: 12.95},
    {name: 'Lava Roll', description:"Spicy Tuna and Seasoned Lump Crab inside. White Fish and Avocado on top with Spicy Mayo.", category: categories[5], price: 14.95},
    {name: 'Rainbow Roll', description:"Crab meat Cucumber and Avocado inside W. Salmon, Tuna, White Tuna and Shrimp.",category: categories[5], price: 13.95},
    {name: 'Old Town Roll', cdescription:"  Shrimp Tempura Avocado Inside, Creamy Spicy Crab Meat and Crunchy on top W/ Eel Sauce, Spicy Mayo.", category: categories[5], price: 12.95},

    {name: 'Chesapeake Roll', description:" Old Bay-Seasoned Lump Crab and Avacado", category: categories[5], price: 8.95},
    {name: 'Monkey Roll', description:"Shrimp Tempura & Cucumber inside. Avacado layered on top w.Three kinds of sause on top", category: categories[5], price: 12.95},
    {name: 'American Dream Roll', description:"Shrimp Tempur inside. Steam Shrimp on the top W.Eel & Spicy Mayo Sauce", category: categories[5], price: 12.95},
    {name: 'Cook Dynamite Roll', description:" Salmon,Tuna and White Fish Topped with Spicy Mayo and Lightly Broiled", category: categories[5], price: 14.95},
    {name: '"I Like That" Roll', description:"Shrimp and Avacado inside. Whole Roll Fried. Seasoned Lump Crab on Top W.Sriracha", category: categories[5], price: 15.95},
    {name: 'James Town Roll', description:"Spicy Yellowtail insidel. Topped with Tuna, White Fish, Scallion, Fish Egg.",category: categories[5], price: 12.95},
    {name: 'Royal Crab Roll', cdescription:"California Roll inside. Topped with Lump Crab & Avacado", category: categories[5], price: 13.95},
    {name: 'Spicy Girl Roll', description:"Spicy Tuna. Spicy Salmon and Spicy yellowtail inside.Avacado layered on top w.Spicy Mayo&crunchy Flake.", category: categories[5], price: 14.95},
    
    {name: 'Crispy Dragon Roll', description:"Crab Stick Tempura and Eel inside.Topped with Avacado.Eel sauce and Crunchy Flake", category: categories[5], price: 14.95},
    {name: 'Tiger Roll', description:"Shrimp Tempura, Cream Cheese and Spicy Crab Meat W.Soy Wrap and Eel Sauce", category: categories[5], price: 10.95},
    {name: 'Salmon Lover Roll', description:"Spicy Salmon & Avocado inside. Topped with Salmon and fish egg.", category: categories[5], price: 13.95},
    {name: 'Crunchy Roll', description:"Lump Crab, Steam Shrimp, Avacado.Top with OLD BAY & Crunchy Flake.", category: categories[5], price: 10.95},
    {name: 'Volcano Roll', description:"Crab Stick,Tuna,Cucumber Whole Roll Deep Fried. Topped with Mayonnaise, Sriracha and Eel Sauce.", category: categories[5], price: 8.95},
    {name: 'Las Vegas Roll', description:"Whole Roll Fried with Salmon, Cream Cheese and steam shrimp, Top w.Eel & Spicy Mayo",category: categories[5], price: 12.95},
    {name: 'Salmon Lover Roll', cdescription:"Spicy salmon & Avocado inside. Topped with Salmon and fish egg", category: categories[5], price: 13.95},
    {name: 'Crispy Mango Roll', description:"Tuna and Salmon Tempura inside. Topped with Slices of Mango and Drizzle with Sweet Mango Sauce and Crunchy Flake.", category: categories[5], price: 13.95},



    


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

    {name: 'Hamburger', emoji: '🍔', category: categories[0], price: 5.95},
    {name: 'Turkey Sandwich', emoji: '🥪', category: categories[0], price: 6.95},
    {name: 'Hot Dog', emoji: '🌭', category: categories[0], price: 3.95},
    {name: 'Crab Plate', emoji: '🦀', category: categories[1], price: 14.95},
    {name: 'Fried Shrimp', emoji: '🍤', category: categories[1], price: 13.95},
    {name: 'Whole Lobster', emoji: '🦞', category: categories[1], price: 25.95},
    {name: 'Taco', emoji: '🌮', category: categories[2], price: 1.95},
    {name: 'Burrito', emoji: '🌯', category: categories[2], price: 4.95},
    {name: 'Pizza Slice', emoji: '🍕', category: categories[3], price: 3.95},
    {name: 'Spaghetti', emoji: '🍝', category: categories[3], price: 7.95},
    {name: 'Garlic Bread', emoji: '🍞', category: categories[3], price: 1.95},
    {name: 'French Fries', emoji: '🍟', category: categories[4], price: 2.95},
    {name: 'Green Salad', emoji: '🥗', category: categories[4], price: 3.95},
    {name: 'Ice Cream', emoji: '🍨', category: categories[5], price: 1.95},
    {name: 'Cup Cake', emoji: '🧁', category: categories[5], price: 0.95},
    {name: 'Custard', emoji: '🍮', category: categories[5], price: 2.95},
    {name: 'Strawberry Shortcake', emoji: '🍰', category: categories[5], price: 3.95},
    {name: 'Milk', emoji: '🥛', category: categories[6], price: 0.95},
    {name: 'Coffee', emoji: '☕', category: categories[6], price: 0.95},
    {name: 'Mai Tai', emoji: '🍹', category: categories[6], price: 8.95},
    {name: 'Beer', emoji: '🍺', category: categories[6], price: 3.95},
    {name: 'Wine', emoji: '🍷', category: categories[6], price: 7.95},

  ]);

  console.log(items)

  process.exit();

})();