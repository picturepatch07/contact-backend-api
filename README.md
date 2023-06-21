# Contact Backend API

This repository contains the backend API for a Contact Management System built using Node.js, Express, Mongoose, and MongoDB. It provides various endpoints for creating, updating, deleting, and retrieving contacts, as well as user authentication, registration, and login functionalities.

## Features

- Express server setup with routing
- Error handling middleware
- Async request handler
- Express middleware for request validation and authentication
- MongoDB integration with Mongoose schema
- CRUD operations for contacts
- User authentication and authorization
- Registration and login APIs
- Controllers for handling API requests and performing database operations
- Password hashing and comparing
- JWT token signing and verification
- Protected routes with authentication middleware
- API testing

## Technologies Used

- Node.js
- Express
- Mongoose
- MongoDB

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v12 or above)
- MongoDB (Make sure MongoDB server is running)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/contact-backend-api.git
   ```

2. Install the dependencies:

   ```bash
   cd contact-backend-api
   npm install
   ```

3. Create a `.env` file in the root directory with the following environment variables:

   ```bash
   PORT=5001
   MONGODB_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>
   ```

   Replace `<your-mongodb-uri>` with your MongoDB connection string and `<your-jwt-secret>` with a secret key for JWT token encryption.

4. Start the server:

   ```bash
   npm start
   ```

   The server will run on `http://localhost:3000` or the port specified in the `.env` file.

## API Documentation

Detailed API documentation can be found in the [API_DOCS.md](API_DOCS.md) file.

## Contributing

Contributions are welcome! If you find any issues or have suggestions, please create a new issue or submit a pull request.

## Acknowledgments

- This project was inspired by the need for a simple and scalable Contact Management System.
- Thanks to the open-source community for their contributions and support.
