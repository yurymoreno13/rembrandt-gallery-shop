// frontend/src/pages/ProfilePage.jsx

import React from 'react';
import { Box, Heading, Text, Avatar, Stack } from '@chakra-ui/react';
import { useAuth } from '../context/AuthContext';
import MainLayout from '../components/MainLayout';

const ProfilePage = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <MainLayout>
        <Box p={6}>
          <Heading>Perfil</Heading>
          <Text mt={4}>No estás autenticado</Text>
        </Box>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Box p={6}>
        <Heading mb={6}>Perfil del Usuario</Heading>
        <Stack direction="row" spacing={6} align="center">
          <Avatar size="xl" name={user.name} src={user.avatar} />
          <Box>
            <Text fontSize="lg"><strong>Nombre:</strong> {user.name}</Text>
            <Text fontSize="lg"><strong>Email:</strong> {user.email}</Text>
            <Text fontSize="lg"><strong>ID:</strong> {user._id || 'No disponible'}</Text>
          </Box>
        </Stack>
      </Box>
    </MainLayout>
  );
};

export default ProfilePage;
