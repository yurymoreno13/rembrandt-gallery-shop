import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Heading, Text, Avatar, VStack } from '@chakra-ui/react';

function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:5000/api/users/me', {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(res => setUser(res.data))
    .catch(() => setUser(null));
  }, []);

  if (!user) return <Text p={10}>Unauthorized or user not found</Text>;

  return (
    <Box p={10}>
      <Heading mb={4}>User Profile</Heading>
      <VStack spacing={4} align="start">
        {user.picture && <Avatar name={user.name} src={user.picture} size="xl" />}
        <Text><strong>Name:</strong> {user.name}</Text>
        <Text><strong>Email:</strong> {user.email}</Text>
        <Text><strong>ID:</strong> {user.id}</Text>
      </VStack>
    </Box>
  );
}

export default ProfilePage;

