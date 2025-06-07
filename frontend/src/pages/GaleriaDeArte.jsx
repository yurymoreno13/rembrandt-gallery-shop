// frontend/src/pages/GaleriaDeArte.jsx

import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Image,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import MainLayout from '../components/MainLayout';

const obras = [
  {
    nombre: 'Reflejos del Alma',
    pintor: 'Borcelle',
    materiales: 'Óleos Rembrandt',
    valor: '$1.000.000',
    tecnica: 'Óleo sobre lienzo',
    imagen: '/assets/galeria/reflejos-del-alma.jpg'
  },
  {
    nombre: 'Horizonte Fragmentado',
    pintor: 'Studio Shodwe',
    materiales: 'Acrílicos Rembrandt',
    valor: '$870.000',
    tecnica: 'Acrílico abstracto',
    imagen: '/assets/galeria/horizonte-fragmentado.jpg'
  },
  {
    nombre: 'Susurros del Agua',
    pintor: 'Liceria & Co.',
    materiales: 'Acuarelas Rembrandt',
    valor: '$720.000',
    tecnica: 'Acuarela expresiva',
    imagen: '/assets/galeria/susurros-del-agua.jpg'
  },
  {
    nombre: 'Viento Urbano',
    pintor: 'Rimberio',
    materiales: 'Pasteles Rembrandt',
    valor: '$580.000',
    tecnica: 'Pastel seco sobre papel',
    imagen: '/assets/galeria/viento-urbano.jpg'
  },
  {
    nombre: 'Sombras y Silencio',
    pintor: 'Warner & Spencer',
    materiales: 'Óleos y carboncillo',
    valor: '$1.350.000',
    tecnica: 'Mixta',
    imagen: '/assets/galeria/sombras-y-silencio.jpg'
  }
];

const GaleriaDeArte = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [obraSeleccionada, setObraSeleccionada] = useState(null);

  const abrirModal = (obra) => {
    setObraSeleccionada(obra);
    onOpen();
  };

  return (
    <MainLayout>
      <Box p={8} minH="100vh" bg="gray.50">
        <VStack spacing={6} mb={10}>
          <Heading size="2xl">Galería de arte</Heading>
          <Text fontSize="lg" color="gray.600">
            Explora las obras destacadas de nuestros artistas
          </Text>
        </VStack>

        <Image
          src="/assets/secciones/galeria.jpg"
          alt="Galería de arte"
          borderRadius="lg"
          mb={10}
          boxShadow="xl"
          maxH="500px"
          w="100%"
          objectFit="cover"
        />

        <SimpleGrid columns={[1, 2, 3]} spacing={8}>
          {obras.map((obra, idx) => (
            <Box key={idx} p={6} bg="white" border="1px solid #e2e8f0" rounded="md" boxShadow="md">
              <Heading size="md" mb={2}>{obra.nombre}</Heading>
              <Text><strong>Pintor:</strong> {obra.pintor}</Text>
              <Text><strong>Materiales:</strong> {obra.materiales}</Text>
              <Text><strong>Técnica:</strong> {obra.tecnica}</Text>
              <Text fontWeight="bold" mt={2} color="teal.600">{obra.valor}</Text>
              <Button mt={4} colorScheme="teal" variant="outline" onClick={() => abrirModal(obra)}>
                Ver más
              </Button>
            </Box>
          ))}
        </SimpleGrid>

        {obraSeleccionada && (
          <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>{obraSeleccionada.nombre}</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <Image
                  src={obraSeleccionada.imagen}
                  alt={obraSeleccionada.nombre}
                  borderRadius="md"
                  mb={4}
                />
                <Text><strong>Pintor:</strong> {obraSeleccionada.pintor}</Text>
                <Text><strong>Materiales:</strong> {obraSeleccionada.materiales}</Text>
                <Text><strong>Técnica:</strong> {obraSeleccionada.tecnica}</Text>
                <Text><strong>Valor:</strong> {obraSeleccionada.valor}</Text>
              </ModalBody>
            </ModalContent>
          </Modal>
        )}
      </Box>
    </MainLayout>
  );
};

export default GaleriaDeArte;
