import React from 'react';
import { Box, Text, Flex, Icon } from '@chakra-ui/react';
import { FaHeart, FaLeaf } from 'react-icons/fa';

function Footer() {
  return (
    <Box bg="#a2b798" color="white" py={8}>
      <Flex maxW="1200px" mx="auto" justify="center" align="center" direction={["column", "row"]} gap={[2, 4]}>
        <Icon as={FaLeaf} boxSize={6} color="white" /> {/* Leaf icon for botanical theme */}
        <Text fontSize="lg" fontFamily="'Montserrat', sans-serif">
          Crafted with love for Amanda & Karan
        </Text>
        <Icon as={FaHeart} boxSize={6} color="white" /> {/* Heart icon for elegance */}
      </Flex>
      <Text textAlign="center" mt={4} fontSize="sm" color="rgba(255, 255, 255, 0.8)" fontFamily="'Montserrat', sans-serif">
        © 2025 Amanda & Karan's Wedding. All rights reserved.
      </Text>
    </Box>
  );
}

export default Footer;