// frontend/src/components/UserAvatar.jsx

import React from 'react';
import { Avatar, Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const UserAvatar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) return null;

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<Avatar size="sm" src={user.avatar} name={user.name} />}
        variant="ghost"
        borderRadius="full"
        _hover={{ bg: 'gray.100' }}
        _expanded={{ bg: 'gray.200' }}
      />
      <MenuList>
        <MenuItem onClick={() => navigate('/profile')}>Ver perfil</MenuItem>
        <MenuItem onClick={() => {
          logout();
          navigate('/');
        }}>
          Cerrar sesión
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserAvatar;