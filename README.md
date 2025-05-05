# Rembrandt Gallery Shop

This is a full-stack web application for a gallery shop that supports user authentication through Google login, and is built using **Node.js**, **Express**, **React**, **Chakra UI**, and **PostgreSQL**.

## Project Structure

The project is structured as follows:

/rembrandt-gallery-shop
/backend # Backend code (Node.js + Express)
/config # Database configuration and environment variables
/models # Database models (e.g., User)
/routes # API routes (e.g., authentication, products)
/controllers # Logic to handle requests and responses
server.js # Main entry point for the backend server
/frontend # Frontend code (React + Chakra UI)
/src
/components # Reusable components for the UI
/hooks # Custom React hooks
/pages # Different pages like Login, Dashboard, etc.
App.js # Main React component
public
index.html # HTML file that renders the React app
package.json # Frontend dependencies and scripts
.gitignore # Git ignore file for sensitive and unnecessary files
.env # Environment variables (e.g., GOOGLE_CLIENT_ID, JWT_SECRET)
README.md # Project documentation


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


