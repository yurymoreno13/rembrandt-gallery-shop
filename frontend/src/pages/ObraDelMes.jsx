// frontend/src/pages/ObraDelMes.jsx

import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  Image
} from '@chakra-ui/react';
import MainLayout from '../components/MainLayout';

const obraDelMes = {
  nombre: 'Luz entre Sombras',
  pintor: 'Aurora Tamesis',
  materiales: 'Óleos Rembrandt sobre lienzo de lino',
  valor: '$1.500.000',
  tecnica: 'Óleo sobre lienzo',
  descripcion: 'Una obra con gran valoración por su manejo de luces y texturas en una composición armónica.'
};

const ObraDelMes = () => {
  return (
    <MainLayout>
      <Box p={8} minH="100vh" bg="gray.50">
        <VStack spacing={6} mb={10}>
          <Heading size="2xl">Obra del mes</Heading>
          <Text fontSize="lg" color="gray.600">
            La pintura más destacada por nuestros artistas y clientes
          </Text>
        </VStack>

        <Box
          bg="white"
          maxW="3xl"
          mx="auto"
          p={6}
          rounded="md"
          boxShadow="md"
          border="1px solid #e2e8f0"
        >
          <VStack spacing={6}>
            <Image
              src="/assets/secciones/obra-del-mes.jpg"
              alt={obraDelMes.nombre}
              borderRadius="md"
              boxShadow="lg"
              objectFit="cover"
              maxH="400px"
              w="100%"
            />
            <Heading size="lg">{obraDelMes.nombre}</Heading>
            <Text><strong>Pintor:</strong> {obraDelMes.pintor}</Text>
            <Text><strong>Materiales:</strong> {obraDelMes.materiales}</Text>
            <Text><strong>Técnica:</strong> {obraDelMes.tecnica}</Text>
            <Text fontWeight="bold" color="teal.600">{obraDelMes.valor}</Text>
            <Text fontStyle="italic" textAlign="center" color="gray.700">
              "{obraDelMes.descripcion}"
            </Text>
          </VStack>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default ObraDelMes;
