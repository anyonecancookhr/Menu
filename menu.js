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
        { id: "c1", name: "Classic Sans Rival", description: "The famous nutty meringue cake with creamy, buttery French buttercream.", price: "₱ 2,295.00" },
        { id: "c2", name: "Chocolate Dome Cake", description: "Rich chocolate mousse over a moist chocolate sponge.", price: "₱ 1,100.00" },
        { id: "c3", name: "New York Cheesecake", description: "Dense, classic cheesecake with a slightly tangy finish.", price: "₱ 2,855.00" }
    ],
    "Pies and Baked Goods": [
        { id: "p1", name: "Banoffee Pie", description: "Rich caramel toffee, fresh bananas, and whipped cream in a graham crust.", price: "₱ 2,185.00" },
        { id: "p2", name: "Apple Crumble Pie", description: "Sweet and tangy baked apple filling topped with buttery oat crumble.", price: "₱ 2,185.00" },
        { id: "p4", name: "Revel Bar", description: "Signature oatmeal cookie bars with chocolate chips.", price: "₱ 45.00/pc" }
    ],
    "Savory Items": [
        { id: "s1", name: "Chicken Curry Turnover", description: "Flaky puff pastry filled with creamy chicken curry.", price: "₱ 560.00/2pcs" },
        { id: "s2", name: "Broccoli and Cheese Quiche", description: "Pastry shell filled with a rich custard, broccoli, and melted cheese.", price: "₱ 675.00" }
    ]
};

