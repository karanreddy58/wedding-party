import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link here
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
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
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
        bg="rgba(0, 0, 0, 0.5)"
        p={[6, 8]}
        borderRadius="md"
        boxShadow="lg"
        w={["90%", "70%", "50%"]}
      >
        {/* Elegant Heading */}
        <Heading
          fontWeight="400"
          fontSize={["5xl", "9xl"]}
          mb={4}
          fontFamily="'Moontime', cursive"
          color="white"
        >
          Amanda & Karan
        </Heading>
        {/* Date and Venue */}
        <Text
          fontSize={["sm", "lg", "xl"]}
          mb={6}
          fontFamily="'Montserrat', sans-serif"
          color="white"
        >
          May 24, 2025 @ Flindes Lane, Stamford, Connecticut
        </Text>
        {/* Call-to-Action Button */}
        <Button
          as={Link}  // Render the Button as a Link
          to="/rsvp" // Navigation target
          bg="#a2b798"
          color="white"
          size={["md", "lg"]}
          _hover={{ bg: "#86a177" }}
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
