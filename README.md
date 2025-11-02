Purple Oven Ordering App (HTML/JavaScript)

This is a simple, single-page web application designed to display a product menu and facilitate advance order inquiries for Purple Oven products. The application uses basic HTML, Tailwind CSS for styling, and pure JavaScript to dynamically load product data from an external file.

📂 Project Structure

The application is built with minimal files for easy deployment:

File Name

Description

index.html

The main webpage. Contains all HTML structure, CSS styling (via Tailwind), and the JavaScript logic for navigation, form handling, and rendering the menu.

menu.js

The product data file. Contains the menuData JavaScript object which holds all categories, items, prices, and descriptions.

🛠️ How to Update the Menu

The entire menu is controlled by the JavaScript file, menu.js. You do not need to edit the main index.html file to change product offerings or prices.

Follow these steps to update the products:

1. Open the menu.js Canvas

Locate and open the menu.js file (titled "Menu Product Data").

2. Locate the Correct Category

The data is organized into key-value pairs where the key is the Category Name (e.g., 'Light Cakes', 'Pies').

const menuData = {
    // This is the Category Name:
    'Light Cakes': [
        // ... items go here
    ], 
    // ... next category
    'Chocolate Cakes': [
        // ...
    ]
};


3. Edit, Add, or Remove Items

Each item is a JavaScript object (surrounded by {}) inside the category array (surrounded by []).

Field Name

Description

Example

name

The full product name.

"Yema Cake"

description

A short, engaging summary of the item.

"Fluffy sponge cake topped with creamy yema frosting."

price

The price, including the currency symbol.

"₱650.00"

id

(Important) A unique identifier for the form. Use only letters and underscores (no spaces).

"light_yema"

Example: Adding a New Pie

To add a new item, ensure you place a comma (,) after the last existing item in the category, then add the new item object:

    'Pies': [
        { name: "Apple Crumble Pie", description: "Sweet and tart apple filling with a buttery crumble top.", price: "₱590.00", id: "pie_apple" },
        { name: "Buko Pie", description: "Creamy young coconut meat baked in a flaky crust.", price: "₱550.00", id: "pie_buko" }
        , // <--- Add a comma after the last item!
        { name: "Banana Cream Pie", description: "A rich layer of fresh bananas and custard in a graham crust.", price: "₱620.00", id: "pie_banana" }
    ] // <--- No comma needed after the last item in the array


4. Save and Preview

Save your changes to menu.js. The index.html file will automatically load the new data when opened or refreshed.
