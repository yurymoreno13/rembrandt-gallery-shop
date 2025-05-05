import React, { useState } from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import axios from 'axios';

function App() {
  const [user, setUser] = useState(null);

  const handleLoginSuccess = async (response) => {
    // Send the Google token to your backend for verification and user authentication
    try {
      const { data } = await axios.post('http://localhost:5000/api/auth/google', {
        token: response.credential,
      });
      setUser(data.user); // Store user data in state
      console.log('User logged in:', data.user);
    } catch (error) {
      console.error('Error during login', error);
    }
  };

  const handleLoginFailure = (error) => {
    console.error('Login failed', error);
  };

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <div className="App">
        <h1>Google Login</h1>
        {!user ? (
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={handleLoginFailure}
          />
        ) : (
          <div>
            <h2>Welcome, {user.name}</h2>
            <img src={user.picture} alt={user.name} />
          </div>
        )}
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
