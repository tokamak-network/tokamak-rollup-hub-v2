"use client";
import { Flex, Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Image from "next/image";
import CloseIcon from "@/assets/icon/close.svg";
import "./banner.css";

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("banner-dismissed");
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("banner-dismissed", "true");
    // Dispatch custom event to notify other components
    window.dispatchEvent(new Event("banner-dismissed"));
  };

  if (!isVisible) return null;

  return (
    <Box
      position="fixed"
      top="0"
      width="100%"
      bg="rgba(0, 0, 0, 0.8)"
      backdropFilter="blur(12px)"
      py={{ base: "10px", md: "12px" }}
      px={{ base: "20px", md: "30px" }}
      zIndex={1001}
      borderBottom="1px solid rgba(255, 255, 255, 0.08)"
    >
      <Flex
        maxW="100%"
        mx="auto"
        alignItems="center"
        justifyContent="center"
        position="relative"
        gap="8px"
      >
        <span style={{ fontSize: "16px" }}>🎉</span>
        <div className="banner-text">
          <span className="animated-gradient-text">Tokamak Rollup Hub is now live</span>
          <span className="banner-regular-text"> — Deploy your custom L2 appchain today</span>
        </div>
      </Flex>
      <Box
        position="absolute"
        right={{ base: "20px", md: "30px" }}
        top="50%"
        transform="translateY(-50%)"
        cursor="pointer"
        onClick={handleClose}
        p="8px"
        borderRadius="full"
        _hover={{ bg: "rgba(255, 255, 255, 0.1)" }}
        transition="all 0.2s"
      >
        <Image
          src={CloseIcon}
          alt="close"
          width={20}
          height={20}
          style={{ filter: 'invert(1)' }}
        />
      </Box>
    </Box>
  );
}
