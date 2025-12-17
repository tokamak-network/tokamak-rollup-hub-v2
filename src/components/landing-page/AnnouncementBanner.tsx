"use client";
import { Flex, Box, Text, VStack, HStack, Link } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Image from "next/image";
import CloseIcon from "@/assets/icon/close.svg";
import Logo from "@/assets/logo/logo.svg";
import { PLATFORM_GUIDE_URL } from "@/consts/urls";
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
        bg="#000"
        py={{ base: "12px", md: "14px" }}
        zIndex={1001}
        overflow="hidden"
        cursor="pointer"
        onClick={handleBannerClick}
        _hover={{ bg: "#0a0a0a" }}
        transition="all 0.2s"
      >
        <div className="marquee-track">
          <div className="marquee-content">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="marquee-item">
                <Image src={Logo} alt="Tokamak" width={40} height={16} />
                <span className="animated-gradient-text marquee-text-large">Tokamak Rollup Hub Platform is Live</span>
                <span className="marquee-dot">•</span>
                <svg className="marquee-gift-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 12v10H4V12"></path>
                  <path d="M2 7h20v5H2z"></path>
                  <path d="M12 22V7"></path>
                  <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                  <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
                </svg>
                <span className="animated-gradient-text marquee-text-large">Rewards & Bug Bounty Program Open</span>
                <span className="marquee-badge">Ends Jan 5</span>
              </span>
            ))}
          </div>
        </div>
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
              top="12px"
              right="12px"
              cursor="pointer"
              onClick={handleModalClose}
              p="4px"
              _hover={{ opacity: 0.7 }}
              transition="all 0.15s"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round">
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
                Available Stack and Integrations
              </Text>
              <Flex gap={4} mb={14} flexWrap="wrap" justify="center">
                <Tag text="Thanos Stack" href="/discover/thanos-stack" />
                <Tag text="Thanos Bridge" href="/discover/thanos-bridge" />
                <Tag text="Thanos Explorer" href="/discover/thanos-explorer" />
                <Tag text="Monitoring Tools" href="/discover/monitoring-tool" />
                <Tag text="System Pulse" href="/discover/uptime-kuma" />
                <Tag text="DAO Staking" href="/discover/dao-candidate" />
              </Flex>

              {/* Reward */}
              <Link
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
                _hover={{ bg: "#FFF3CC", borderColor: "#FFD633", textDecoration: "none" }}
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
              </Link>

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
                <Link
                  href={PLATFORM_GUIDE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="typewriter-link"
                  color="#333"
                  fontSize="17px"
                  fontWeight="600"
                  cursor="pointer"
                  _hover={{ color: "#0070ED", textDecoration: "none" }}
                  transition="color 0.3s ease"
                >
                  <span className="typewriter-wrapper">Get Started with Setup Guide</span>
                  <span className="typewriter-arrow">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"/>
                      <path d="M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </Link>
              </Flex>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}

function Tag({ text, href }: { text: string; href?: string }) {
  const content = (
    <Text color="#0070ED" fontSize="16px" fontWeight="600">
      {text}
    </Text>
  );

  if (href) {
    return (
      <Link
        href={href}
        bg="#EEF4FF"
        border="1px solid #D0E3FF"
        px={6}
        py={3}
        borderRadius="12px"
        cursor="pointer"
        _hover={{ bg: "#DCE8FF", borderColor: "#A0C4FF", textDecoration: "none" }}
        transition="all 0.2s"
      >
        {content}
      </Link>
    );
  }

  return (
    <Box
      bg="#EEF4FF"
      border="1px solid #D0E3FF"
      px={6}
      py={3}
      borderRadius="12px"
      cursor="default"
      transition="all 0.2s"
    >
      {content}
    </Box>
  );
}

