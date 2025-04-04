import React from "react";
import { Box, Heading, Container } from "@chakra-ui/react";

function RSVP() {
  return (
    <Container maxW="container.lg" mt={["100px", "120px"]} mb={10}>
      <Heading as="h1" mb={6} textAlign="center" fontFamily="'Montserrat', sans-serif" color="#a2b798">
        RSVP
      </Heading>
      <Box
        as="iframe"
        src="https://docs.google.com/forms/d/e/1FAIpQLSccKCEcCFrmJQXBl8oS2OQA7nyydtd2wVccMPRdD0QPD5_yQA/viewform?embedded=true"
        width="100%"
        height="1116px"
        border="0"
        marginHeight="0"
        marginWidth="0"
      >
        Loading…
      </Box>
    </Container>
  );
}

export default RSVP;
