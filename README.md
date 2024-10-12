Inventory Management System - React Application
Overview
This project is an Inventory Management System built with React. It allows users to manage inventory items, suppliers, and perform CRUD (Create, Read, Update, Delete) operations on inventory data. The application provides a simple and user-friendly interface for managing inventory efficiently, with features such as adding items, editing, deleting, and searching/filtering items by categories.

Features
Dashboard
View Inventory Items: Displays a list of inventory items, including their name, quantity, category, and supplier information.
Add Items: Users can add new inventory items using the InventoryForm component. New items require details such as name, quantity, category, and supplier.
Edit/Delete Items: Users can edit or delete existing items directly from the dashboard. Edited items are updated with new information, while deleted items are removed from the inventory.
Search Functionality: Allows users to search for items by name.
Category Filter: Users can filter items by category using a dropdown selection.
Supplier Management
Add Suppliers: Users can add new suppliers through the SupplierForm component, including the supplier's name and contact information.
Navigation
Header Component: A simple header with navigation links allows users to easily access different parts of the app (e.g., add items, view all items).
React Router: The app uses React Router to navigate between different routes, such as the main dashboard and the item editing page.
State Management
useState Hook: The application manages its state (items, suppliers, search terms, etc.) using React's useState hook.
useEffect Hook: The useEffect hook is used for updating form fields when an item is being edited.
Notification
React Toastify: Toast notifications are used to provide user feedback when an action is performed (e.g., adding an item, updating an item, deleting an item).
Components
1. Dashboard
The main component that handles:

Displaying the list of items.
Search and filter functionality.
Handling the addition, editing, and deletion of items.
2. InventoryForm
A form for adding or updating items. It includes fields for item name, quantity, category, and supplier.
3. SupplierForm
A form for adding new suppliers with their name and contact information.
4. Header
A navigation bar with links for easy navigation within the app.
5. EditItem
A dedicated form for editing existing inventory items.
Running the App
Once the server is running, open your browser and go to http://localhost:3000/ to access the Inventory Management System.

Technologies Used
React: Core framework for building the UI components.
React Router: For handling page navigation.
React Toastify: For displaying notifications and alerts.
Bootstrap: For basic styling and responsive design.
Future Enhancements
Add functionality to manage supplier data (edit/delete suppliers).
Implement pagination for better handling of large inventories.
Include user authentication for a more secure application.
Connect to a backend API or database for persistent data storage.
