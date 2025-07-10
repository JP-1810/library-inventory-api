# Library Inventory RESTful APT

# static-website-for-portfolio

*COMPANY* : CODTECH IT SOLUTIONS

*NAME* : JAGRUTI POTHAL

*INTERN ID* : CT06DG1185

*DOMAIN* : SOFTWARE DEVELOPMENT 

*DURATION* : 4 WEEKS

*MENTOR* : NEELA SANTHOSH KUMAR

# RESTFUL API DEVELOPMENT

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

<img width="743" height="878" alt="Image" src="https://github.com/user-attachments/assets/3431224d-eaf2-4118-8657-11335c4a65ef" />

5. DELETE /books/:id
Deletes a book from the inventory by its ID.
Example:
DELETE https://library-inventory-api.onrender.com/books/your_book_id


<img width="745" height="861" alt="Image" src="https://github.com/user-attachments/assets/13ce3f6c-e61f-4019-bc93-e9e05a44fdf2" />

## Use Case & Why It Matters

Managing data through a RESTful API is a foundational skill for modern full stack developers. This project replicates how real-world inventory systems work — in this case, focused on library books. It enables us to store, retrieve, update, and delete data over HTTP, making it ideal for web or mobile applications.

This kind of backend system could be used for:
- A public library book managment tool
- An internal inventory tracker for schools
- A backend service for a frontend library app
- A base template to expand with user login , admin dashboards and authentication

  The clear structure, RESTful design, and MongoDB integration make it a great demonstration of the ability to build and deploy an actual working backend. Plus, Render hosting ensures the API remains publicly accessible for demo, testing, or integration with any frontend project.

## Testing with Postman 
- Test POST, GET, PUT, and DELETE using Postman
- Include sample request bodies in JSON format
- Screenshot or export the Postman collection for submission

  ## Folder Structure

  All logic is written in a single file index.js for simplicity, including:

- MongoDB schema (bookSchema)
- Express route handlers
- MongoDB connection
- Server configuration

  ### The backend API successfully demonstrates your understanding of CRUD operations, REST architecture, environment configuration, asynchronous programming with async/await, and cloud-based deployment. It’s simple, effective, and a solid building block for more advanced full stack applications.

  
### the deployed link 
<img width="1131" height="148" alt="Image" src="https://github.com/user-attachments/assets/49ac7261-7d14-4727-9063-f604252f2d49" />
