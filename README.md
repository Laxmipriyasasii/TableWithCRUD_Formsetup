# TableWithCRUD_Formsetup
# Customer Management System

## Project Overview

This is a simple **Customer Management System** built using **HTML**, **CSS**, and **JavaScript**. The project allows users to manage customer data by adding, editing, and deleting customer information. The data is stored in the browser's `localStorage`, which persists even when the page is refreshed.

### Features:
- **Add New Customers:** You can add customer information, including first name, last name, and age.
- **Edit Customer Information:** Existing customer data can be edited by clicking the **Edit** button.
- **Delete Customers:** Customers can be deleted from the system.
- **Search Functionality:** A search bar allows users to filter the customer list based on text input.

### Technologies Used:
- **HTML** for the structure of the pages.
- **CSS** for styling and layout.
- **JavaScript** for handling user interactions and logic such as adding, editing, deleting, and searching customer data.
- **localStorage** for storing customer data on the user's browser.

## How It Works:

### Pages:
1. **Main Page (`sample.html`):**
   - Displays a list of all customers.
   - Allows users to search for customers by name.
   - Provides options to edit or delete customer information.

2. **Form Page (`form.html`):**
   - Allows users to add or update customer information. 
   - If editing, the form is pre-populated with the existing data.

### User Flow:
1. **Adding a Customer:**
   - Click the **Add** button to navigate to the form page.
   - Fill out the form with the customer's first name, last name, and age.
   - Submit the form to save the customer to local storage.

2. **Editing a Customer:**
   - Click the **Edit** button next to a customer to open the form page with the current information pre-filled.
   - Make changes and submit the form to update the customer data.

3. **Deleting a Customer:**
   - Click the **Delete** button to remove a customer from the list.

4. **Search:**
   - Use the search bar to filter the customer list based on input text. It will match any part of the name or age.



