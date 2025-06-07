// frontend/src/pages/QuienesSomos.jsx

import React from 'react';
import { Box, Heading, Text, VStack, Image } from '@chakra-ui/react';
import MainLayout from '../components/MainLayout';

const QuienesSomos = () => {
  return (
    <MainLayout>
      <Image
        src="/assets/secciones/quienes-somos.jpg"
        alt="Inspiración artística"
        maxH="500px"
        w="100%"
        objectFit="cover"
        borderRadius="md"
        mb={8}
      />
      <Box p={8} minH="100vh" bg="gray.50">
        <VStack spacing={6} align="start" maxW="4xl" mx="auto">
          <Heading as="h1" size="2xl" textAlign="center" w="full">
            ¿Quiénes somos?
          </Heading>
          <Text fontSize="lg" color="gray.700">
            En Rembrandt, creemos que cada obra de arte cuenta una historia y que cada producto tiene el poder de inspirar. 
            Nos dedicamos a ofrecer una selección única de productos artísticos, cuidadosamente diseñados para resaltar la 
            creatividad y la originalidad de cada artista. Desde materiales de alta calidad hasta piezas exclusivas, 
            nuestra misión es llevar lo mejor del arte a tus manos.
          </Text>
          <Text fontSize="lg" color="gray.700">
            Ya seas un creador apasionado o un amante del arte, aquí encontrarás todo lo que necesitas para expresar tu estilo 
            y dar vida a tus ideas. ¡Explora nuestra colección y deja que el arte transforme tu mundo!
          </Text>
        </VStack>
      </Box>
    </MainLayout>
  );
};

export default QuienesSomos;