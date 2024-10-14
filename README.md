# MERN Stack Book Management App - Machine Test

## Overview

This is a Full-Stack MERN application that demonstrates the ability to build a complete solution using **MongoDB**, **Express**, **React**, and **Node.js**. The application provides basic CRUD (Create, Read, Update, Delete) operations for managing a list of books, with both the backend API and frontend UI.

The goal of this test is to evaluate your skills in:

- Building and consuming REST APIs.
- Creating dynamic user interfaces with React.
- Managing state and database interactions with MongoDB.
- Writing clean, maintainable code.

## Test Instructions

Your task is to create a full-stack application for managing books. The application must include both a backend API and a frontend UI as described below:

### 1. **Backend (Node.js, Express, MongoDB)**:

- **Setup**: Use **Node.js** with **Express** to build the backend API.
- **Database**: Use **MongoDB** for storing the book data.
- **Models**: Create a `Book` model with the following fields:
  - `title`: String (required)
  - `author`: String (required)
  - `publishedYear`: Number (required)
- **API Endpoints**:
  - **GET /api/books**: Retrieve a list of all books.
  - **POST /api/books**: Create a new book.
  - **PUT /api/books/:id**: Update an existing book.
  - **DELETE /api/books/:id**: Delete a book by its ID.
- **Validation**: Implement server-side validation for incoming requests.
- **Bonus**: Add pagination for the `GET /api/books` endpoint.

### 2. **Frontend (React)**:

- **Components**:
  - **BookList**: Display the list of books.
  - **BookForm**: A form for adding or updating books.
  - **BookDetail**: Show detailed information about a book.
- **API Consumption**: Use **Axios** or **Fetch API** to interact with the backend.
- **State Management**: Use React's **useState** and **useEffect** hooks for managing state. You can optionally use **Redux**.
- **UI/UX**: Create a simple UI with basic styling. You can use **CSS** or a framework like **Bootstrap**.
- **Bonus**: Add client-side form validation and loading spinners.

### 3. **Testing**:

- Write unit tests for at least two API endpoints (use **Jest** or **Mocha**).
- (Bonus) Write unit tests for React components.

### 4. **Deployment** (Not Required):

- Deploy the backend on **Heroku** and the frontend on **Vercel** or **Netlify**.

### 5. **Submission**:

- Provide the GitHub repository link to Invigilator.
- Include a detailed README file explaining the setup, how to run the project, and any assumptions made.

## Features

- **CRUD Operations**: Add, edit, delete, and view books.
- **Backend**: RESTful API using Node.js, Express, and MongoDB.
- **Frontend**: React-based user interface with form handling.
- **Validation**: Basic validation on both frontend and backend.

## Getting Started

### Prerequisites

Before running the application, ensure you have the following installed: (Skip this setup , if already installed)

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **MongoDB**: Either local MongoDB instance or use **MongoDB Atlas**.

### Backend Setup

1. **Clone the backend repository**:

   ```bash
   git clone <backend-repo-url>
   cd backend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Create a `.env` file** with the following content:

   ```env
   MONGODB_URI=mongodb://localhost:27017/book_management
   PORT=5000
   ```

4. **Run the backend server**:

   ```bash
   npm run start
   ```

   The backend server will be available at `http://localhost:5000`.

### Frontend Setup

1. **Clone the frontend repository**:

   ```bash
   git clone <frontend-repo-url>
   cd frontend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the frontend application**:

   ```bash
   npm start
   ```

   The frontend will be available at `http://localhost:3000`.

### API Endpoints

1. **GET /api/books**: Retrieve a list of all books.
2. **POST /api/books**: Add a new book.
3. **PUT /api/books/:id**: Update a book by its ID.
4. **DELETE /api/books/:id**: Delete a book by its ID.

### Testing

To run tests, use:

```bash
npm run test
```
