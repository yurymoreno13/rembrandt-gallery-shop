// frontend/src/pages/RegisterPage.jsx

import React from 'react';
import { useState } from 'react';
import { Box, Input, Button, Heading, VStack } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const [form, setForm] = useState({ name: '', email: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', form);
      localStorage.setItem('token', res.data.token);
      navigate('/profile');
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <Box h="100vh" display="flex" justifyContent="center" alignItems="center" bg="gray.50">
      <VStack as="form" onSubmit={handleSubmit} spacing={4} p={8} bg="white" shadow="lg" rounded="xl">
        <Heading>Manual Registration</Heading>
        <Input name="name" placeholder="Name" onChange={handleChange} isRequired />
        <Input name="email" type="email" placeholder="Email" onChange={handleChange} isRequired />
        <Button type="submit" colorScheme="blue" w="full">Register</Button>
      </VStack>
    </Box>
  );
}

export default RegisterPage;
