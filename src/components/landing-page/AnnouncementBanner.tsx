"use client";
import { Flex, Box, Text, VStack, HStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Image from "next/image";
import CloseIcon from "@/assets/icon/close.svg";
import "./banner.css";

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("banner-dismissed");
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
    localStorage.setItem("banner-dismissed", "true");
    window.dispatchEvent(new Event("banner-dismissed"));
  };

  const handleBannerClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  if (!isVisible) return null;

  return (
    <>
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
          <Box
            as="button"
            onClick={handleBannerClick}
            display="flex"
            alignItems="center"
            gap="8px"
            bg="transparent"
            border="none"
            cursor="pointer"
            _hover={{ opacity: 0.9 }}
            transition="all 0.2s"
          >
            <span style={{ fontSize: "16px" }}>🎉</span>
            <div className="banner-text">
              <span className="animated-gradient-text">Tokamak Rollup Hub Platform is Now Live</span>
              <span className="banner-regular-text"> — Testnet deployment available</span>
              <span className="banner-cta-text">View Details</span>
            </div>
          </Box>
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
          zIndex={1002}
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

      {isModalOpen && (
        <Box
          position="fixed"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="rgba(0, 0, 0, 0.3)"
          zIndex={2000}
          display="flex"
          alignItems="center"
          justifyContent="center"
          onClick={handleModalClose}
          className="modal-backdrop"
        >
          <Box
            bg="#FFFFFF"
            borderRadius="20px"
            boxShadow="0 10px 40px rgba(0, 0, 0, 0.15)"
            maxW={{ base: "94vw", md: "800px" }}
            width="100%"
            position="relative"
            onClick={(e) => e.stopPropagation()}
            className="announcement-modal"
          >
            {/* Close Button */}
            <Box
              position="absolute"
              top="16px"
              right="16px"
              cursor="pointer"
              onClick={handleModalClose}
              p="8px"
              _hover={{ opacity: 0.7 }}
              transition="all 0.15s"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </Box>

            {/* Content */}
            <Box px={{ base: 8, md: 16 }} py={{ base: 14, md: 20 }}>
              {/* Title */}
              <Text
                fontSize={{ base: "28px", md: "36px" }}
                fontWeight="700"
                color="#111"
                textAlign="center"
                mb={8}
              >
                Tokamak Rollup Hub Platform is Live
              </Text>

              {/* Subtitle */}
              <Text
                color="#555"
                fontSize={{ base: "16px", md: "17px" }}
                textAlign="center"
                lineHeight="2.2"
                mb={14}
              >
                The Tokamak Rollup Hub Platform is now officially available for testnet deployment.<br />
                Deploy your own Layer 2 rollup with all essential infrastructure — fully open source<br />
                with complete ownership, no vendor lock-in, and community-driven support.
              </Text>

              {/* Features */}
              <Text fontSize="18px" fontWeight="700" color="#222" mb={6} textAlign="center">
                Available Integrations
              </Text>
              <Flex gap={4} mb={14} flexWrap="wrap" justify="center">
                <Tag text="Thanos Bridge" href="/discover/thanos-bridge" />
                <Tag text="Block Explorer" href="/discover/thanos-explorer" />
                <Tag text="Monitoring Tools" href="/discover/monitoring-tool" />
                <Tag text="System Pulse" href="/discover/uptime-kuma" />
                <Tag text="DAO Staking" href="/discover/dao-candidate" />
              </Flex>

              {/* Reward */}
              <Box
                as="a"
                href="https://tokamak.notion.site/Tokamak-Rollup-Hub-Platform-Reward-and-Bug-Bounty-Program-2c6d96a400a3803786a4cfd74ae44a89"
                target="_blank"
                rel="noopener noreferrer"
                display="block"
                bg="#FFF9E6"
                border="1px solid #FFE066"
                borderRadius="14px"
                p={7}
                mb={8}
                textAlign="center"
                cursor="pointer"
                _hover={{ bg: "#FFF3CC", borderColor: "#FFD633" }}
                transition="all 0.2s"
              >
                <Flex align="center" justify="center" gap={2} mb={3}>
                  <Text fontSize="24px">🎁</Text>
                  <Text fontSize="18px" fontWeight="700" color="#996600">
                    Reward & Bug Bounty Program
                  </Text>
                </Flex>
                <Text fontSize="15px" color="#775500" lineHeight="1.8">
                  Earn rewards by deploying rollups, testing features, and providing feedback on the platform.
                </Text>
              </Box>

              {/* What's Next */}
              <Box
                bg="#EEF4FF"
                border="1px solid #D0E3FF"
                borderRadius="14px"
                p={7}
                mb={12}
                textAlign="center"
              >
                <Text fontSize="18px" fontWeight="700" color="#0070ED" mb={3}>
                  What&apos;s Next?
                </Text>
                <Text fontSize="15px" color="#444" lineHeight="1.8">
                  Expanding integrations and moving toward mainnet deployment based on community feedback.
                </Text>
              </Box>

              {/* Get Started Link */}
              <Flex justify="center">
                <Box
                  as="a"
                  href="https://docs.tokamak.network/home/~/changes/151/service-guide/tokamak-rollup-hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="typewriter-link"
                  color="#333"
                  fontSize="17px"
                  fontWeight="600"
                  cursor="pointer"
                  _hover={{ color: "#0070ED" }}
                  transition="color 0.3s ease"
                >
                  <span className="typewriter-wrapper">Get Started with Installation Guide</span>
                  <span className="typewriter-arrow">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"/>
                      <path d="M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}

function Tag({ text, href }: { text: string; href?: string }) {
  return (
    <Box
      as={href ? "a" : "div"}
      href={href}
      bg="#EEF4FF"
      border="1px solid #D0E3FF"
      px={6}
      py={3}
      borderRadius="12px"
      cursor={href ? "pointer" : "default"}
      _hover={href ? { bg: "#DCE8FF", borderColor: "#A0C4FF" } : {}}
      transition="all 0.2s"
    >
      <Text color="#0070ED" fontSize="16px" fontWeight="600">
        {text}
      </Text>
    </Box>
  );
}

