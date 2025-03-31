import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import pic from "../assets/pic.jpg"; // Background for larger screens
import pic2 from "../assets/pic2.jpg"; // Background for mobile

const MotionBox = motion(Box);

function Hero() {
  return (
    <MotionBox
      h="100vh"
      w="100%"
      bgImage={{
        base: `url(${pic2})`, // Mobile background image
        md: `url(${pic})`, // Desktop background image
      }}
      bgSize="cover" // Ensure the background covers the viewport
      bgPosition="center"
      bgRepeat="no-repeat" // Avoid repeating the image
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Overlay to enhance readability */}
      <Box
        bg="rgba(0, 0, 0, 0.5)" // Dark semi-transparent overlay
        p={[6, 8]}
        borderRadius="md"
        boxShadow="lg"
        w={["90%", "70%", "50%"]} // Responsive width
      >
        {/* Elegant Heading */}
        <Heading
          fontWeight="400"
          fontSize={["5xl", "9xl"]} // Adjust font size for mobile
          mb={4}
          fontFamily="'Moontime', cursive"
          color="white"
        >
          Amanda & Karan
        </Heading>
        {/* Date and Venue */}
        <Text
          fontSize={["sm", "lg", "xl"]} // Responsive font size
          mb={6}
          fontFamily="'Montserrat', sans-serif"
          color="white"
        >
          May 25, 2025
        </Text>
        {/* Call-to-Action Button */}
        <Button
          bg="#a2b798" // Primary green
          color="white"
          size={["md", "lg"]} // Adjust button size for mobile
          _hover={{ bg: "#86a177" }} // Slightly darker green for hover
          boxShadow="md"
          fontFamily="'Montserrat', sans-serif"
        >
          RSVP Now
        </Button>
      </Box>
    </MotionBox>
  );
}

export default Hero;