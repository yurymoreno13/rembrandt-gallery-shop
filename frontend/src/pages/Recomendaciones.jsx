// frontend/src/pages/Recomendaciones.jsx

import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Divider,
  Image,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react';
import MainLayout from '../components/MainLayout';

const recomendaciones = [
  {
    pintor: 'Larana, Inc.',
    tecnica: 'Óleo sobre lienzo',
    obra: 'Atardecer en Florencia',
    image: 'atardecer-en-florencia.jpg',
    materiales: 'Óleos Rembrandt, Lienzo de lino, Pinceles finos',
    valor: '$1.200.000',
    comentario: 'Los óleos tienen una pigmentación increíble y se mezclan perfectamente.'
  },
  {
    pintor: 'Studio Shodwe',
    tecnica: 'Acrílico sobre madera',
    obra: 'Explosión de color',
    image: 'explosion-de-color.jpg',
    materiales: 'Acrílicos Rembrandt, Tablero MDF, Espátula',
    valor: '$890.000',
    comentario: 'Los colores acrílicos son vibrantes y secan rápido, perfectos para capas múltiples.'
  },
  {
    pintor: 'Borcelle',
    tecnica: 'Acuarela',
    obra: 'Lluvia en el parque',
    image: 'lluvia-en-el-parque.jpg',
    materiales: 'Acuarelas Rembrandt, Papel prensado en frío, Pinceles suaves',
    valor: '$650.000',
    comentario: 'La transparencia de las acuarelas es excelente y se comportan muy bien en capas.'
  }
];

const Recomendaciones = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [seleccionada, setSeleccionada] = useState(null);

  const abrirModal = (rec) => {
    setSeleccionada(rec);
    onOpen();
  };

  return (
    <MainLayout>
      <Box p={8} minH="100vh" bg="gray.50">
        <VStack spacing={6} mb={10}>
          <Heading size="2xl">Recomendaciones de Pintura</Heading>
          <Text fontSize="lg" color="gray.600">
            Opiniones de los pintores sobre los productos que utilizaron
          </Text>
        </VStack>

        <Image
          src="/assets/secciones/recomendaciones.jpg"
          alt="Recomendaciones de pintura"
          borderRadius="lg"
          mb={10}
          boxShadow="xl"
          maxH="500px"
          w="100%"
          objectFit="cover"
        />

        <SimpleGrid columns={[1, null, 2]} spacing={8}>
          {recomendaciones.map((rec, idx) => (
            <Box
              key={idx}
              position="relative"
              p={6}
              bg="white"
              boxShadow="md"
              rounded="md"
              border="1px solid #e2e8f0"
              minH="180px"
              cursor="pointer"
              onClick={() => abrirModal(rec)}
              _hover={{ boxShadow: 'lg', transform: 'scale(1.01)', transition: 'all 0.2s' }}
            >
              <Box pr={["0", "150px"]}>
                <Heading size="md" mb={1}>{rec.pintor}</Heading>
                <Text fontSize="sm"><strong>Técnica:</strong> {rec.tecnica}</Text>
                <Text fontSize="sm"><strong>Obra:</strong> {rec.obra}</Text>
                <Text fontSize="sm"><strong>Materiales:</strong> {rec.materiales}</Text>
                <Text fontSize="sm" mb={2}><strong>Valor:</strong> {rec.valor}</Text>
                <Divider my={2} />
                <Text fontStyle="italic" fontSize="sm">"{rec.comentario}"</Text>
              </Box>

              <Image
                src={`/assets/recomendaciones/${rec.image}`}
                alt={rec.obra}
                borderRadius="md"
                objectFit="cover"
                position="absolute"
                top="1.5rem"
                right="1.5rem"
                boxSize="110px"
                display={["none", "block"]}
              />
            </Box>
          ))}
        </SimpleGrid>

        {seleccionada && (
          <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>{seleccionada.obra}</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <Image
                  src={`/assets/recomendaciones/${seleccionada.image}`}
                  alt={seleccionada.obra}
                  borderRadius="md"
                  mb={4}
                />
                <Text><strong>Pintor:</strong> {seleccionada.pintor}</Text>
                <Text><strong>Técnica:</strong> {seleccionada.tecnica}</Text>
                <Text><strong>Materiales:</strong> {seleccionada.materiales}</Text>
                <Text><strong>Valor:</strong> {seleccionada.valor}</Text>
                <Divider my={3} />
                <Text fontStyle="italic">"{seleccionada.comentario}"</Text>
              </ModalBody>
            </ModalContent>
          </Modal>
        )}
      </Box>
    </MainLayout>
  );
};

export default Recomendaciones;
