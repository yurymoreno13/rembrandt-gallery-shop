// frontend/src/App.js

import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import QuienesSomos from './pages/QuienesSomos';
import NuestrosProductos from './pages/NuestrosProductos';
import CategoriaProductos from './pages/CategoriaProductos';
import Recomendaciones from './pages/Recomendaciones';
import GaleriaDeArte from './pages/GaleriaDeArte';
import ObraDelMes from './pages/ObraDelMes';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import Carrito from './pages/Carrito';

function App() {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/productos" element={<NuestrosProductos />} />
          <Route path="/productos/:categoria" element={<CategoriaProductos />} />
          <Route path="/recomendaciones" element={<Recomendaciones />} />
          <Route path="/galeria" element={<GaleriaDeArte />} />
          <Route path="/obra-del-mes" element={<ObraDelMes />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;