// frontend/src/pages/CategoriaProductos.jsx

import React, { useEffect, useState } from 'react';
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Button,
  useToast,
  Image
} from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import MainLayout from '../components/MainLayout';

const CategoriaProductos = () => {
  const { categoria } = useParams();
  const [productos, setProductos] = useState([]);
  const toast = useToast();
  const navigate = useNavigate();
  const { token } = useAuth();

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const res = await fetch(`/api/products?categoria=${categoria}`);
        const data = await res.json();
        setProductos(data);
      } catch (error) {
        console.error('Error al cargar productos:', error);
      }
    };

    fetchProductos();
  }, [categoria]);

  const agregarAlCarrito = async (productId) => {
    if (!token) {
      toast({
        title: 'Debes iniciar sesión',
        description: 'Inicia sesión para agregar productos al carrito.',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
      navigate('/login');
      return;
    }

    try {
      const res = await fetch('/api/users/me/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify({ productId, quantity: 1 }),
      });

      if (res.ok) {
        toast({
          title: 'Producto agregado',
          description: 'El producto fue agregado al carrito',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: 'Error al agregar',
          description: 'No se pudo agregar al carrito',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (err) {
      console.error(err);
      toast({
        title: 'Error de red',
        description: 'No se pudo conectar con el servidor',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <MainLayout>
      <Box p={8}>
        <Box
          display="flex"
          justifyContent="center"
          mb={8}
        >
          <Box
            borderRadius="lg"
            overflow="hidden"
            transition="all 0.3s ease-in-out"
            _hover={{ transform: 'scale(1.03)', boxShadow: 'xl' }}
            border="1px solid #e2e8f0"
            bg="white"
            maxW="700px"
            w="100%"
          >
            <Image
              src={`/assets/categorias/${categoria}.jpg`}
              alt={`Categoría ${categoria}`}
              objectFit="contain"
              maxH="500px"
              w="100%"
            />
          </Box>
        </Box>
        <Heading mb={4} textTransform="capitalize">{categoria}</Heading>
        <Text mb={8}>Productos disponibles en la categoría {categoria}</Text>

        {productos.length === 0 ? (
          <Text>No hay productos disponibles en esta categoría.</Text>
        ) : (
          <SimpleGrid columns={[1, 2, 3]} spacing={6}>
            {productos.map((producto) => (
              <Box
                key={producto._id}
                borderWidth="1px"
                borderRadius="lg"
                p={4}
                bg="white"
                boxShadow="md"
              >
                <Heading size="md" mb={2}>{producto.name}</Heading>
                <Text>Formato: {producto.format}</Text>
                <Text mb={4}>${producto.price}</Text>
                <Button colorScheme="teal" onClick={() => agregarAlCarrito(producto._id)}>
                  Agregar al carrito
                </Button>
              </Box>
            ))}
          </SimpleGrid>
        )}
      </Box>
    </MainLayout>
  );
};

export default CategoriaProductos;
