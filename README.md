# Rental Car Application - MERN Stack

Welcome to the Rental Car Application! This project is built using the MERN stack (MongoDB, Express.js, React.js, Node.js) to create a full-featured car rental service platform.

## Demo
Experience the application firsthand:
- **Live Demo**: [Visit here](#) (Add the link to your deployed app)

## Features
- **User Authentication**: Secure JWT-based user login and registration.
- **Car Browsing**: Users can browse and search for available cars.
- **Booking Management**: Create, view, update, and delete car reservations.
- **Admin Panel**: Manage car listings and reservations with dedicated admin functionalities.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies

### Frontend
- **React.js**: For building a dynamic and interactive user interface.
- **Ant Design**: To create sleek, professional UI components.
- **React Router**: For efficient client-side routing.
- **Axios**: To handle HTTP requests.

### Backend
- **Node.js**: Server-side runtime environment.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: Database for storing user data, car listings, and reservations.
- **Mongoose**: ODM for MongoDB.
- **JWT (JSON Web Tokens)**: For secure user authentication.

## Setup
To get this project running on your local machine:

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v14 or higher)
- **MongoDB** (local instance or Atlas)
- **Git**

### Installation
1. **Clone the repository**:
   ```bash
   git clone [repository-url]
   cd rental-car-app
   ```

2. **Set up the backend**:
   - Navigate to the `backend` directory:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file with the following variables:
     ```env
     MONGO_URI=mongodb://localhost:27017/rentalCarDB
     JWT_SECRET=your_jwt_secret
     PORT=5000
     ```
   - Add the JWT authentication code to your `backend/controllers/userController.js` or similar file:
     ```javascript
     const jwt = require('jsonwebtoken');

     const generateToken = (userId) => {
       return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
         expiresIn: '30d',
       });
     };

     module.exports = generateToken;
     ```
   - Start the server:
     ```bash
     npm start
     ```
   The backend server runs on `http://localhost:5000`.

3. **Set up the frontend**:
   - Navigate to the `frontend` directory:
     ```bash
     cd ../frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file for API configurations.
   - Start the development server:
     ```bash
     npm start
     ```
   The frontend runs on `http://localhost:3000`.

## Usage
### Running the Application
Ensure MongoDB is running locally or connected via MongoDB Atlas:
1. Start the backend server.
2. Start the frontend server.
3. Access the app at `http://localhost:3000`.

### User Roles
- **User**: Browse, book, and manage car reservations.
- **Admin**: Manage car listings and view all reservations.

## Project Structure
```plaintext
rental-car-app/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── package.json
└── README.md
```

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add new feature'
   ```
4. Push the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Submit a pull request.
