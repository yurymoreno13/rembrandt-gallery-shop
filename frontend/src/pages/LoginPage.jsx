// frontend/src/pages/LoginPage.jsx

import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { Box, Heading, Text, VStack, useToast } from '@chakra-ui/react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

function LoginPage() {
  const navigate = useNavigate();
  const toast = useToast();
  const { login } = useAuth();

  const handleLogin = async (credentialResponse) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/google', {
        token: credentialResponse.credential,
      });

      const { token, user } = res.data;
      login(user, token);
      navigate('/home');
    } catch (err) {
      toast({
        title: 'Error al iniciar sesión',
        description: 'No se pudo autenticar con Google.',
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
      navigate('/register');
    }
  };

  return (
    <Box minH="100vh" bgGradient="linear(to-br, teal.50, white)" display="flex" alignItems="center" justifyContent="center">
      <Box bg="white" p={10} rounded="xl" boxShadow="2xl" textAlign="center">
        <VStack spacing={6}>
          <Heading size="lg">Bienvenido a Rembrandt</Heading>
          <Text fontSize="md" color="gray.600">Inicia sesión con Google para continuar</Text>
          <GoogleLogin
            onSuccess={handleLogin}
            onError={() => navigate('/register')}
            useOneTap
            auto_select
            width="100%"
            size="large"
            shape="pill"
            text="signin_with"
            theme="outline"
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          />
        </VStack>
      </Box>
    </Box>
  );
}

export default LoginPage;
