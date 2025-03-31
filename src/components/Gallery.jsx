import React, { useState, useEffect } from "react";
import { Box, Modal, ModalOverlay, ModalContent, ModalBody, IconButton, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { AiOutlineClose as CloseIcon } from "react-icons/ai";
import { MdArrowBack as ArrowBackIcon, MdArrowForward as ArrowForwardIcon } from "react-icons/md";
import Gallery from "react-photo-gallery";

// Dynamically load all images from the gallery folder
const importedImages = import.meta.glob("/src/assets/gallery/*.{jpg,jpeg,png}", { eager: true });

function GalleryPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = () => {
      const imageArray = Object.keys(importedImages).map((key) => {
        const src = importedImages[key].default;
        const img = new Image();
        img.src = src;
        
        // Return width and height dynamically from the image
        return new Promise((resolve) => {
          img.onload = () => {
            resolve({
              src,
              width: img.width,
              height: img.height,
            });
          };
        });
      });

      Promise.all(imageArray).then((loadedImages) => {
        setImages(loadedImages);
      });
    };

    loadImages();
  }, []);

  const handleOpen = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <Box py={[10, 20]} px={[4, 8]} bg="#f9f9f9">
      {/* Page Heading */}
      <Heading
        fontSize={["3xl", "5xl"]}
        textAlign="center"
        mb={8}
        color="#a2b798"
        fontFamily="'Moontime', cursive"
      >
        Moments to Cherish
      </Heading>

      {/* Photo Gallery */}
      {images.length > 0 && (
        <Gallery
          photos={images}
          onClick={(e, { index }) => handleOpen(index)}
        />
      )}

      {/* Lightbox Modal */}
      <Modal isOpen={isOpen} onClose={handleClose} size="4xl">
        <ModalOverlay bg="rgba(0, 0, 0, 0.8)" />
        <ModalContent bg="black" borderRadius="md" shadow="lg">
          <ModalBody display="flex" justifyContent="center" alignItems="center" position="relative" p={6}>
            <IconButton
              aria-label="Close"
              icon={<CloseIcon />}
              position="absolute"
              top="10px"
              right="10px"
              onClick={handleClose}
              bg="whiteAlpha.800"
              color="black"
            />
            <IconButton
              aria-label="Previous"
              icon={<ArrowBackIcon />}
              position="absolute"
              left="10px"
              top="50%"
              transform="translateY(-50%)"
              onClick={handlePrev}
              bg="whiteAlpha.800"
              color="black"
            />
            <IconButton
              aria-label="Next"
              icon={<ArrowForwardIcon />}
              position="absolute"
              right="10px"
              top="50%"
              transform="translateY(-50%)"
              onClick={handleNext}
              bg="whiteAlpha.800"
              color="black"
            />
            <motion.img
              src={images[currentIndex]?.src}
              alt={`Gallery image ${currentIndex + 1}`}
              style={{
                maxWidth: "100%",
                maxHeight: "80vh",
                objectFit: "contain", // Ensures the image maintains aspect ratio without cropping
                borderRadius: "8px"
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default GalleryPage;
