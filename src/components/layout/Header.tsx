"use client";
import { Flex } from "@chakra-ui/react";
import LogoComponent from "./LogoComponent";
import MenuBarComponent from "./MenuBarComponent";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBannerDismissed, setIsBannerDismissed] = useState(true);

  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "auto";
    }
  }, [isMenuOpen]);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const checkBannerStatus = () => {
      const dismissed = localStorage.getItem("banner-dismissed");
      setIsBannerDismissed(dismissed === "true");
    };

    checkBannerStatus();

    // Listen for banner dismissed event
    window.addEventListener("banner-dismissed", checkBannerStatus);
    // Listen for storage changes (for cross-tab)
    window.addEventListener("storage", checkBannerStatus);

    return () => {
      window.removeEventListener("banner-dismissed", checkBannerStatus);
      window.removeEventListener("storage", checkBannerStatus);
    };
  }, []);

  return (
    <>
      <Flex
        h={isMenuOpen ? "100vh" : "54px"}
        px={{ base: "20px", md: "30px" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        position={"fixed"}
        top={isMenuOpen ? "0" : isBannerDismissed ? "0" : { base: "48px", md: "52px" }}
        width={"100%"}
        zIndex={1000}
        backgroundColor={
          isMenuOpen
            ? "#FAFBFC"
            : isScrolled
            ? "rgba(250, 251, 252, 0.92)"
            : "transparent"
        }
        backdropFilter={isScrolled && !isMenuOpen ? "blur(10px)" : "none"}
        pr={"20px"}
        transition="top 0.3s ease-in-out, background-color 0.3s ease-in-out"
      >
        {!isMenuOpen && <LogoComponent />}
        <MenuBarComponent
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </Flex>
    </>
  );
}
