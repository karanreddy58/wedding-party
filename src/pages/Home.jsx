import React from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';

const MotionHeading = motion(Heading);
const MotionText = motion(Text);

function Home() {
  return (
    <Box
      bg="#f9f9f9" // Neutral background
      w="100%"
      minH="100vh"
    >
      {/* Hero Section */}
      <Hero />

      {/* "Our Special Day" Section */}
      <VStack spacing={16} py={[10, 20]} maxW="1200px" mx="auto" px={4}>
        {/* Heading */}
        <MotionHeading
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          fontSize={["3xl", "5xl"]} // Responsive font size
          color="#a2b798" // Primary green
          textAlign="center"
          fontFamily="'Moontime', cursive" // Elegant script font
        >
          Our Special Day
        </MotionHeading>

        {/* Description */}
        <MotionText
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.2 }}
  fontSize={["lg", "xl"]}
  textAlign="center"
  maxW="800px"
  color="#4a4a4a"
  fontFamily="'Montserrat', sans-serif"
>
  Celebrate with us on May 24th at Flinders Lane Kitchen and Bar in Stamford, Connecticut where love, laughter, and unforgettable moments await.
</MotionText>

      </VStack>
    </Box>
  );
}

export default Home;