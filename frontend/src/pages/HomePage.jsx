// frontend/src/pages/HomePage.jsx

import React from 'react';
import { Box, Button, Heading, Stack, Text, Wrap, WrapItem, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../components/MainLayout';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <Image
        src="/assets/secciones/home-hero.jpg"
        alt="Arte Rembrandt Home"
        maxH="600px"
        w="100%"
        objectFit="cover"
        mb={10}
      />
      <Stack spacing={6} align="center" mb={10}>
        <Heading size="2xl">Rembrandt</Heading>
        <Text fontSize="xl" color="gray.600">Tienda artística y galería</Text>
      </Stack>

      <Wrap justify="center" spacing={6}>
        <WrapItem>
          <Button size="lg" colorScheme="teal" onClick={() => navigate('/productos')}>
            Nuestros Productos
          </Button>
        </WrapItem>
        <WrapItem>
          <Button size="lg" colorScheme="teal" onClick={() => navigate('/quienes-somos')}>
            Quiénes somos
          </Button>
        </WrapItem>
        <WrapItem>
          <Button size="lg" colorScheme="teal" onClick={() => navigate('/galeria')}>
            Galería de arte
          </Button>
        </WrapItem>
        <WrapItem>
          <Button size="lg" colorScheme="teal" onClick={() => navigate('/recomendaciones')}>
            Recomendaciones de pintura
          </Button>
        </WrapItem>
        <WrapItem>
          <Button size="lg" colorScheme="teal" onClick={() => navigate('/obra-del-mes')}>
            Obra del mes
          </Button>
        </WrapItem>
        <WrapItem>
          <Button size="lg" colorScheme="gray" onClick={() => navigate('/login')}>
            Iniciar sesión
          </Button>
        </WrapItem>
      </Wrap>
    </MainLayout>
  );
};

export default HomePage;