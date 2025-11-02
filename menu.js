/**
 * menuData: Defines the entire product list, categorized for display on 
 * the Menu page and for selection on the Advance Orders form.
 * * Each item requires:
 * - id: A unique identifier (used for form submission).
 * - name: The product title.
 * - description: A brief description.
 * - price: The displayed price (string format).
 */
const menuData = {
    "Cakes and Cheesecakes": [
        { id: "c1", name: "Revel Bar Cake", description: "Layers of our famous revel bars baked into a soft cake.", price: "₱ 950.00" },
        { id: "c2", name: "Chocolate Dome Cake", description: "Rich chocolate mousse over a moist chocolate sponge.", price: "₱ 1,100.00" },
        { id: "c3", name: "Lemon Cheesecake", description: "Tart and creamy lemon cheesecake on a graham crust.", price: "₱ 850.00" },
        { id: "c4", name: "Carrot Walnut Cake", description: "Moist carrot cake with cream cheese frosting and walnuts.", price: "₱ 980.00" }
    ],
    "Baked Goods & Bars": [
        { id: "b1", name: "Classic Revel Bar", description: "Our signature oatmeal cookie bars with chocolate chips.", price: "₱ 45.00/pc" },
        { id: "b2", name: "Fudge Brownies", description: "Dense, rich, and chewy chocolate fudge brownies.", price: "₱ 55.00/pc" },
        { id: "b3", name: "Food for the Gods", description: "Date and walnut bars, a classic Filipino favorite.", price: "₱ 60.00/pc" },
        { id: "b4", name: "Apple Crumble", description: "Sweet and tangy baked apple filling topped with oat crumble.", price: "₱ 750.00" }
    ],
    "Savory Items": [
        { id: "s1", name: "Tuna Melt Sandwich", description: "Classic tuna salad with melted cheese on toasted sourdough.", price: "₱ 180.00" },
        { id: "s2", name: "Pesto Pasta Salad", description: "Penne pasta tossed in a creamy basil pesto sauce.", price: "₱ 250.00" },
        { id: "s3", name: "Sausage Rolls (6 pcs)", description: "Flaky pastry wrapped around savory seasoned pork sausage.", price: "₱ 320.00" }
    ]
};
