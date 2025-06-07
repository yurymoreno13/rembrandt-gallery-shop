// frontend/src/components/CartIcon.jsx

import React, { useEffect, useState } from 'react';
import { Box, Icon, Text } from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';
import { motion, useAnimation } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const MotionBox = motion(Box);

const CartIcon = () => {
  const [totalItems, setTotalItems] = useState(0);
  const token = localStorage.getItem('token');
  const controls = useAnimation();
  const navigate = useNavigate();

  const fetchCart = async () => {
    try {
      const res = await fetch('/api/users/me/cart', {
        headers: { Authorization: 'Bearer ' + token }
      });
      const data = await res.json();

      const cantidad = data.reduce((sum, item) => sum + item.quantity, 0);

      if (cantidad > totalItems) {
        // Trigger bounce only if items increased
        controls.start({
          scale: [1, 1.3, 1],
          transition: { duration: 0.4 }
        });
      }

      setTotalItems(cantidad);
    } catch (error) {
      console.error('Error al obtener el carrito:', error);
    }
  };

  useEffect(() => {
    fetchCart();
    const interval = setInterval(fetchCart, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <MotionBox
      onClick={() => navigate('/carrito')}
      position="relative"
      cursor="pointer"
      animate={controls}
    >
      <Icon as={FiShoppingCart} boxSize={6} />
      {totalItems > 0 && (
        <Box
          position="absolute"
          top="-1"
          right="-1"
          bg="red.500"
          color="white"
          rounded="full"
          fontSize="xs"
          px={2}
          fontWeight="bold"
        >
          {totalItems}
        </Box>
      )}
    </MotionBox>
  );
};

export default CartIcon;