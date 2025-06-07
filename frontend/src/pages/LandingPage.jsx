// frontend/src/pages/LandingPage.jsx

import React from 'react';
import { Box, Button, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      minH="100vh"
      bgImage="/assets/landing/landingpage.jpg"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
      alignItems="center"
      pb={20} // separa el botón del borde inferior
    >
      <VStack spacing={6}>
        <Button
          size="lg"
          bg="rgba(255, 255, 255, 0.85)"
          color="teal.800"
          border="2px solid teal"
          _hover={{
            bg: "white",
            color: "teal.900",
            transform: "scale(1.05)",
            boxShadow: "md",
          }}
          px={10}
          py={6}
          fontWeight="bold"
          fontSize="lg"
          borderRadius="full"
          onClick={() => navigate('/home')}
        >
          Ingresar
        </Button>
      </VStack>
    </Box>
  );
};

export default LandingPage;
