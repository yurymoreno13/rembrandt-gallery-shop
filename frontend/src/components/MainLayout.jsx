// frontend/src/components/MainLayout.jsx

import React from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import CartIcon from './CartIcon';
import UserAvatar from './UserAvatar';

const MainLayout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/home';

  return (
    <Box minH="100vh" bg="gray.50" position="relative" px={4} py={2}>
      <Box
        position="fixed"
        top={3}
        left={3}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        w="calc(100% - 2rem)"
        zIndex={999}
      >
        {!isHome && (
          <IconButton
            aria-label="Ir al inicio"
            icon={<FiHome />}
            onClick={() => navigate('/home')}
            variant="ghost"
          />
        )}
        <Box ml="auto" display="flex" alignItems="center" gap={6}>
          <CartIcon />
          <UserAvatar />
        </Box>
      </Box>

      <Box pt="60px">{children}</Box>
    </Box>
  );
};

export default MainLayout;