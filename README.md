# Rembrandt Gallery Shop

This is a full-stack web application for a gallery shop that supports user authentication through Google login, and is built using **Node.js**, **Express**, **React**, **Chakra UI**, and **PostgreSQL**.

## 📁 Project Structure - Rembrandt Gallery Shop

This project is structured into two main parts: the **backend** built with Node.js and Express, and the **frontend** built with React + Vite.

---

### 🔧 Backend (Node.js + Express + PostgreSQL)

```
backend/
├── config/
│   └── dbConfig.js
├── controllers/
│   └── productController.js
├── middleware/
├── models/
│   ├── index.js
│   ├── product.js
│   └── user.js
├── routes/
│   ├── authRoutes.js
│   ├── productRoutes.js
│   └── userRoutes.js
├── database/
├── .env
├── server.js
├── package.json
└── package-lock.json
```

---

### 🎨 Frontend (React + Vite)

```
frontend/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── App.js
│   ├── App.css
│   ├── App.test.js
│   ├── index.js
│   ├── index.css
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .env
├── package.json
└── package-lock.json
```

---

### 📦 Project Root

```
.gitignore
README.md
```

> PostgreSQL is used as the main database, managed by a dedicated user `rembrandt_user`. The first implemented service is user authentication via Google.


## Installation

### Prerequisites

Make sure you have the following software installed:

- **Node.js** (version 16.x or higher)
- **PostgreSQL** (running locally or through a managed service)
- **npm** (Node Package Manager)

### Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/rembrandt-gallery-shop.git
cd rembrandt-gallery-shop
```

### Backend Setup

- Navigate to the backend directory:
```bash
cd backend
```
- Install the backend dependencies:

```bash
npm install
```

- Configure your environment variables by creating a .env file in the backend folder. Example:

``` ini
GOOGLE_CLIENT_ID=your-google-client-id
JWT_SECRET=your-jwt-secret-key
DATABASE_URL=your-database-url
```

- Start the backend server:

``` bash
npm start
```

The backend server will start running on http://localhost:5000.

### Frontend Setup
- Navigate to the frontend directory:

```bash
cd frontend
```

- Install the frontend dependencies:

``` bash
npm install
```

- Configure your environment variables by creating a .env file in the frontend folder. Example:

```ini
REACT_APP_GOOGLE_CLIENT_ID=your-google-client-id
```

- Start the frontend development server:

```bash
npm start
```

The frontend will start running on http://localhost:3000.

## Features

- Google Login: Users can authenticate using their Google accounts.

- User Management: Users are stored in the PostgreSQL database with their information (name, email, Google ID, profile picture).

- PostgreSQL Database: The app uses PostgreSQL to store user information and other necessary data.

- Chakra UI: Chakra UI is used for styling and components in the frontend.

## API Endpoints
- Authentication
    - POST /api/auth/google: Authenticates a user with a Google token. This endpoint accepts the Google OAuth token sent from the frontend and either logs in or registers the user.

    - Request Body: { "token": "google-oauth-token" }

    - Response: { "user": { userDetails }, "token": "jwt-token" }

## Database Models
- User: The User model represents users in the database. It includes the following fields:

    - name: The name of the user.

    - email: The email of the user.

    - googleId: The Google ID of the user (unique).

    - picture: The URL of the user's profile picture.

## JWT Token
The application uses JWT (JSON Web Tokens) for authentication and session management. The token is returned to the frontend after successful login via Google, and it must be included in the Authorization header in subsequent requests.

## Troubleshooting
- If you encounter issues with the authentication or JWT token generation, check the following:

- Ensure your Google OAuth credentials are correct and your GOOGLE_CLIENT_ID in the .env file matches the one in your Google Developer Console.

- Make sure that the PostgreSQL database is running and properly configured in the DATABASE_URL in your .env file.

- If you get an error like "Invalid Google token," ensure that the frontend is sending the correct token and that it's being passed to the backend correctly.

## Contributing
If you would like to contribute to this project, feel free to fork the repository and create a pull request with your changes. Ensure that your code follows the project's conventions and passes the tests.

## License
This project is licensed under the MIT License - see the LICENSE file for details.


