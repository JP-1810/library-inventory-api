# Library Inventory RESTful APT

## This is a simple and functional RESTful API  built using  **Node.js**, **Express.js**, and **MongoDB (via Mongoose)** that allows users to perform CRUD (Create, Read, Update, Delete) operations on a virtual library inventory system. It is designed to manage a list of books, including their title, author, genre, publication year, and availability status.

### The backend is deployed and live at:  
### https://library-inventory-api.onrender.com

## Features 
-  Add a new book to the inventory
-  Fetch the entire list of books
-  Update existing book details by ID
-  Delete a book from the inventory by ID
-  MongoDB Atlas used for cloud database storage
-  Hosted on Render for always-on availability

## Technologies Used
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Postman (for testing)
- Render (for deployment)

  ## How to use the API(How did i used )

  You can interact with the API using **Postman**

  ###  Endpoints:

1. **POST /books**  
Adds a new book to the inventory.  
Example:
POST     https://library-inventory-api.onrender.com/books

<img width="716" height="842" alt="Image" src="https://github.com/user-attachments/assets/8ccb7c51-a6a4-4e1a-a63d-995dff2e9547" />

2. **GET /books**  
   Returns the list of all books stored in the database.  
   Example:
GET     https://library-inventory-api.onrender.com/books

<img width="744" height="813" alt="Image" src="https://github.com/user-attachments/assets/5cacbf3e-b679-417b-918d-80ec7d80d02a" />

3. **PUT /books/:id**
Updates an existing book by its MongoDB _id.
Example:
PUT    https://library-inventory-api.onrender.com/books/your_book_id

4. DELETE /books/:id
Deletes a book from the inventory by its ID.
Example:
DELETE https://library-inventory-api.onrender.com/books/your_book_id


