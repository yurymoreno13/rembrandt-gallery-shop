// frontend/src/pages/Carrito.jsx

import React, { useEffect, useState } from 'react';
import {
  Box, Heading, Text, VStack, HStack, Button, Spinner, Divider, Input, useToast
} from '@chakra-ui/react';
import MainLayout from '../components/MainLayout';

const Carrito = () => {
  const [carrito, setCarrito] = useState([]);
  const [loading, setLoading] = useState(true);
  const toast = useToast();
  const token = localStorage.getItem('token');

  const fetchCarrito = async () => {
    try {
      const res = await fetch('/api/users/me/cart', {
        headers: { Authorization: 'Bearer ' + token }
      });
      const data = await res.json();
      setCarrito(data);
    } catch (err) {
      console.error('Error al cargar el carrito:', err);
    } finally {
      setLoading(false);
    }
  };

  const actualizarCantidad = async (productId, quantity) => {
    const cantidadNumerica = Number(quantity);
    if (!cantidadNumerica || cantidadNumerica < 1) return;

    try {
      const res = await fetch('/api/users/me/cart', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        },
        body: JSON.stringify({ productId, quantity: cantidadNumerica })
      });
      await fetchCarrito();
    } catch (error) {
      toast({
        title: 'Error al actualizar cantidad',
        status: 'error',
        duration: 3000,
        isClosable: true
      });
    }
  };

  const eliminarProducto = async (productId) => {
    try {
      const res = await fetch(`/api/users/me/cart/${productId}`, {
        method: 'DELETE',
        headers: { Authorization: 'Bearer ' + token }
      });
      const data = await res.json();
      setCarrito(data);
    } catch (error) {
      toast({
        title: 'Error al eliminar producto',
        status: 'error',
        duration: 3000,
        isClosable: true
      });
    }
  };

  const finalizarCompra = async () => {
    try {
      const res = await fetch('/api/users/me/cart', {
        method: 'DELETE',
        headers: { Authorization: 'Bearer ' + token }
      });

      if (res.ok) {
        setCarrito([]);
        toast({
          title: 'Compra realizada con éxito',
          description: 'Gracias por tu compra. Pronto recibirás una confirmación.',
          status: 'success',
          duration: 4000,
          isClosable: true
        });
      } else {
        toast({
          title: 'No se pudo vaciar el carrito',
          description: 'Este endpoint puede no estar disponible en el backend.',
          status: 'warning',
          duration: 3000,
          isClosable: true
        });
      }
    } catch (error) {
      toast({
        title: 'Error al finalizar la compra',
        status: 'error',
        duration: 3000,
        isClosable: true
      });
    }
  };

  useEffect(() => {
    fetchCarrito();
  }, []);

  return (
    <MainLayout>
      <Box p={8} minH="100vh" bg="gray.50">
        <VStack spacing={6} align="start">
          <Heading size="xl">Tu carrito</Heading>

          {loading ? (
            <Spinner size="xl" />
          ) : carrito.length === 0 ? (
            <Text>No hay productos en tu carrito.</Text>
          ) : (
            carrito.map((item, index) => (
              <Box
                key={item.productId._id || index}
                p={4}
                bg="white"
                w="100%"
                boxShadow="md"
                border="1px solid #e2e8f0"
                rounded="md"
              >
                <HStack justify="space-between" align="center">
                  <VStack align="start" spacing={1}>
                    <Text fontWeight="bold">{item.productId.name}</Text>
                    <Text>Formato: {item.productId.format}</Text>
                    <Text>Precio: ${item.productId.price}</Text>
                    <HStack>
                      <Text>Cantidad:</Text>
                      <Input
                        type="number"
                        width="60px"
                        size="sm"
                        defaultValue={item.quantity}
                        onBlur={(e) =>
                          actualizarCantidad(item.productId._id, e.target.value)
                        }
                        min={1}
                      />
                    </HStack>
                  </VStack>
                  <Button
                    colorScheme="red"
                    variant="outline"
                    onClick={() => eliminarProducto(item.productId._id)}
                  >
                    Eliminar
                  </Button>
                </HStack>
              </Box>
            ))
          )}
          {carrito.length > 0 && (
            <>
              <Divider />
              <Button colorScheme="green" size="lg" onClick={finalizarCompra}>
                Finalizar compra
              </Button>
            </>
          )}
        </VStack>
      </Box>
    </MainLayout>
  );
};

export default Carrito;