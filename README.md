# **Books API - Software Engineering Intern Assessment**

## **Project Overview**
This project is a **RESTful Books API** built using **Node.js** and **Express.js**. It provides basic CRUD (Create, Read, Update, Delete) operations for managing books, following best practices in API design, validation, and security.

---

## **Features**
- **List all books** - Retrieve all books from the in-memory data store.
- **Get book details by ID** - Fetch details of a specific book using its ID.
- **Add a new book** - Add a book with `name`, `author`, and `publishedYear` fields.
- **Update an existing book** - Modify an existing book’s details.
- **Delete a book** - Remove a book from the collection.
- **Pagination Support** - Retrieve books in batches for better performance.

---

## **Technology Stack**
- **Backend:** Node.js, Express.js  
- **Security:** Helmet.js, CORS  
- **Validation:** Express Validator  
- **Testing:** Jest, Supertest  
- **API Documentation:** Swagger  

---

## **Installation and Setup**
### **Prerequisites**
- Node.js (minimum version 16)
- npm or yarn

### **Steps to Run the Project**
1. Clone the repository:
   ```sh
   git clone https://github.com/sujeevanan/bookApis.git
   cd bookApis
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm start
   ```
4. The API will be available at:
   ```
   http://localhost:5000/api/books
   ```
5. API documentation (Swagger UI) will be available at:
   ```
   http://localhost:5000/api-docs
   ```

---

## **API Endpoints**
| Method | Endpoint           | Description                |
|--------|-------------------|----------------------------|
| GET    | `/api/books`      | Get all books (supports pagination) |
| GET    | `/api/books/:id`  | Get a book by ID           |
| POST   | `/api/books`      | Add a new book             |
| PUT    | `/api/books/:id`  | Update an existing book    |
| DELETE | `/api/books/:id`  | Delete a book by ID        |

---

## **Assumptions**
- The API currently uses an **in-memory data store**, meaning data will be lost when the server restarts.
- Basic validation is implemented for book properties (`name`, `author`, `publishedYear`).
- Appropriate HTTP status codes are returned for errors (e.g., `404 Not Found`, `400 Bad Request`).
- Pagination is available via query parameters (e.g., `/api/books?page=1&limit=10`).

---

## **Bonus Implementations**
- **Unit Testing:** API is tested using Jest & Supertest.
- **Swagger API Documentation:** Available at `/api-docs`.
- **Pagination:** Implemented for retrieving books in batches.

---

## **Future Improvements**
- Integrate a **database** (MongoDB or PostgreSQL) instead of an in-memory store.
- Implement **user authentication** for API security.
- Add **GraphQL support** for flexible queries.
- Improve **error handling** and implement logging for better debugging.

---

## **Author**
- **Sujeevanan Loganathan**
- GitHub: [https://github.com/sujeevanan](https://github.com/sujeevanan)
- LinkedIn: [Your LinkedIn Profile]((https://www.linkedin.com/in/sujeevanan-loganathan-101037222/))

