import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import GalleryPage from './pages/GalleryPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Box
        display="flex"
        flexDirection="column"
        minH="100vh"
        maxW="100vw"
        overflowX="hidden"
      >
        <Navbar />
        <Box flex="1"> {/* Main content area grows to fill space */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </Box>
        <Footer /> {/* Footer stays at the bottom */}
      </Box>
    </Router>
  );
}

export default App;