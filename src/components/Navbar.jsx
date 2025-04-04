import React from "react";
import { Box, Flex, Button, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

function Navbar() {
  return (
    <MotionBox
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      bg="rgba(255, 255, 255, 0.9)"
      backdropFilter="blur(10px)"
      boxShadow="md"
      position="fixed"
      w="100%"
      zIndex="10"
    >
      <Flex
        p={[3, 4]}
        maxW="1200px"
        mx="auto"
        align={["center", "start"]}
        flexWrap="wrap"
        flexDirection={["column", "row"]}
      >
        <Box
          fontSize={["2xl", "3xl"]}
          fontWeight="bold"
          fontFamily="'Moontime', cursive"
          color="#4a4a4a"
          letterSpacing="wide"
          mb={[4, 0]}
          _hover={{
            transform: "scale(1.1)",
            color: "#5d7975",
          }}
          transition="all 0.3s ease"
        >
          K&A
        </Box>
        <Spacer display={["none", "block"]} />
        <Flex gap={[2, 5]} flexWrap="wrap" justifyContent="center">
          <Button
            as={Link}
            to="/"
            variant="ghost"
            _hover={{
              color: "#5d7975",
              transform: "scale(1.05)",
              fontWeight: "bold",
            }}
            transition="all 0.3s ease"
            fontSize={["sm", "md"]}
          >
            Home
          </Button>
          <Button
            as={Link}
            to="/gallery"
            variant="ghost"
            _hover={{
              color: "#5d7975",
              transform: "scale(1.05)",
              fontWeight: "bold",
            }}
            transition="all 0.3s ease"
            fontSize={["sm", "md"]}
          >
            Gallery
          </Button>
          <Button
            as={Link}
            to="/rsvp"
            variant="ghost"
            _hover={{
              color: "#5d7975",
              transform: "scale(1.05)",
              fontWeight: "bold",
            }}
            transition="all 0.3s ease"
            fontSize={["sm", "md"]}
          >
            RSVP
          </Button>
          <Button
            as={Link}
            to="/details"
            variant="ghost"
            _hover={{
              color: "#5d7975",
              transform: "scale(1.05)",
              fontWeight: "bold",
            }}
            transition="all 0.3s ease"
            fontSize={["sm", "md"]}
          >
            Details
          </Button>
        </Flex>
      </Flex>
    </MotionBox>
  );
}

export default Navbar;
