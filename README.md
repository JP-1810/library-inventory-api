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

1. **GET /books**  
   Returns the list of all books stored in the database.  
   Example:
GET     https://library-inventory-api.onrender.com/books
