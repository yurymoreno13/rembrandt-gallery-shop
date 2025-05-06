import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import axios from 'axios';

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = async (credentialResponse) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/google', {
        token: credentialResponse.credential,
      });

      localStorage.setItem('token', res.data.token);
      navigate('/profile');
    } catch (err) {
      navigate('/register');
    }
  };

  return (
    <Box h="100vh" display="flex" justifyContent="center" alignItems="center" bgGradient="linear(to-br, blue.50, white)">
      <VStack spacing={6} p={10} bg="white" rounded="xl" shadow="2xl">
        <Heading>Welcome to Rembrandt</Heading>
        <Text>Sign in with Google to continue</Text>
        <GoogleLogin onSuccess={handleLogin} onError={() => navigate('/register')} />
      </VStack>
    </Box>
  );
}

export default LoginPage;
