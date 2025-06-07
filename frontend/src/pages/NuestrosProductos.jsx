// frontend/src/pages/NuestrosProductos.jsx

import React from 'react';
import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  Button,
  useColorModeValue,
  Image
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../components/MainLayout';

const productos = [
  { id: '01', nombre: 'oleos', display: 'Óleos' },
  { id: '02', nombre: 'acrilicos', display: 'Acrílicos' },
  { id: '03', nombre: 'acuarelas', display: 'Acuarelas' },
  { id: '04', nombre: 'pasteles', display: 'Pasteles' },
  { id: '05', nombre: 'pinceles', display: 'Pinceles' }
];

const NuestrosProductos = () => {
  const navigate = useNavigate();
  const cardBg = useColorModeValue('white', 'gray.700');

  return (
    <MainLayout>
      <Box p={8} minH="100vh" bg="gray.50">
        <VStack spacing={6} mb={10}>
          <Heading size="2xl">Nuestros Productos</Heading>
          <Text fontSize="lg" color="gray.600">Explora nuestras categorías</Text>
        </VStack>

        <SimpleGrid columns={[1, 2, 3]} spacing={8}>
          {productos.map((producto) => (
            <Box
              key={producto.id}
              p={4}
              bg={cardBg}
              boxShadow="md"
              rounded="lg"
              textAlign="center"
              overflow="hidden"
            >
              <Image
                src={`/assets/categorias/${producto.nombre}.jpg`}
                alt={producto.display}
                borderRadius="md"
                mb={4}
                maxH="200px"
                w="100%"
                objectFit="cover"
              />
              <Heading size="md" mb={2}>
                {producto.id} - {producto.display}
              </Heading>
              <Button
                colorScheme="teal"
                onClick={() => navigate(`/productos/${producto.nombre}`)}
              >
                Ver productos
              </Button>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </MainLayout>
  );
};

export default NuestrosProductos;
