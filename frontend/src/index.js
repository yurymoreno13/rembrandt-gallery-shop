import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import App from './App'; 
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';  // Using createTheme for Chakra UI v3.x

// Create your custom theme here using createTheme
const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      900: "#1a202c",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>  {/* Wrap the app with ChakraProvider and pass the custom theme */}
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();
