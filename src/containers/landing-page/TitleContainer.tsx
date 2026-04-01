"use client";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import RightArrowIcon from "@/assets/icon/next-icon.svg";
import Image from "next/image";
import TrhCenterIcon from "@/assets/trh-center.svg";
import { useBreakpoint } from "@/hooks/breakpoint";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  PLATFORM_DOWNLOAD_LINUX,
  PLATFORM_DOWNLOAD_MAC_ARM,
  PLATFORM_DOWNLOAD_MAC_INTEL,
  PLATFORM_DOWNLOAD_WINDOWS,
  PLATFORM_VERSION,
  USER_GUIDE_URL,
} from "@/consts/urls";

interface DownloadLinkProps {
  href: string;
  label: string;
}

const DownloadLink = ({ href, label }: DownloadLinkProps) => (
  <Link href={href}>
    <Flex
      alignItems={"center"}
      gap={"6px"}
      px={"18px"}
      py={"13px"}
      borderRadius={"10px"}
      border={"1px solid #E1E8ED"}
      bgColor={"rgba(255,255,255,0.6)"}
      fontSize={"16px"}
      fontWeight={600}
      color={"#2E2E3A"}
      cursor={"pointer"}
      _hover={{ bgColor: "#1C1C1C", color: "#FFF", borderColor: "#1C1C1C" }}
      transition={"all 0.15s ease"}
    >
      <Text as={"span"} fontSize={"11px"}>↓</Text>
      {label}
    </Flex>
  </Link>
);

export default function TitleContainer() {
  const { isMobile, isTablet } = useBreakpoint();
  const imageWidth = isMobile ? 75 : isTablet ? 125 : 200;
  const router = useRouter();

  return (
    <Flex
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      height={{ base: "833px", md: "100vh" }}
      position={"relative"}
      className="title-component"
    >
      <Box
        position={{ base: "absolute", md: "relative" }}
        top={{ base: "307px", md: "0" }}
        left={{ base: "50%", md: "0" }}
        transform={{ base: "translate(-50%, 0%)", md: "translate(0%, 0%)" }}
      >
        <Image
          src={TrhCenterIcon}
          alt="trh-center"
          width={imageWidth}
          height={imageWidth}
        />
      </Box>

      {/* Left: title + CTA */}
      <Flex
        flexDirection={"column"}
        gap={"30px"}
        width={{ base: "100%", md: "576px" }}
        position={"absolute"}
        alignItems={{ base: "center", md: "flex-start" }}
        bottom={{ base: "0", md: "30px", lg: "60px" }}
        left={{ base: "0", md: "30px", lg: "90px" }}
      >
        <Flex flexDirection={"column"} gap={{ base: "12px", md: "18px" }}>
          <Text
            fontSize={{ base: "30px", md: "54px" }}
            fontWeight={{ base: 700, md: 600 }}
            color={"#1C1C1C"}
            lineHeight={{ base: "36px", md: "66px" }}
            letterSpacing={{ base: "-0.81px", md: "-1.8px" }}
            textTransform={"uppercase"}
            textAlign={{ base: "center", md: "left" }}
          >
            L2 On-Demand{" "}
            <Text
              as={"span"}
              fontSize={{ base: "30px", md: "60px" }}
              letterSpacing={{ base: "-0.9px", md: "-1.8px" }}
              whiteSpace={"nowrap"}
            >
              Tailored for Ethereum
            </Text>
          </Text>
          <Text
            display={"flex"}
            flexDir={"column"}
            fontSize={{ base: "13px", md: "20px" }}
            fontWeight={500}
            color={"#1C1C1C"}
            lineHeight={{ base: "normal", md: "27px" }}
            textAlign={{ base: "center", md: "left" }}
          >
            Explore and Deploy your On-Demand Appchain{" "}
            <Text as={"span"}>
              A Fast, Secure, and Fully Customizable L2 Appchain
            </Text>{" "}
          </Text>
        </Flex>
        <Flex gap={"15px"} zIndex={50}>
          <Link href={USER_GUIDE_URL} target="_blank">
            <Button
              px={"15px"}
              py={"12px"}
              width={"132px"}
              height={"45px"}
              borderRadius={"23px"}
              alignItems={"center"}
              justifyContent={"center"}
              fontFamily={"Proxima Nova"}
              fontSize={"14px"}
              fontWeight={600}
              textAlign={"center"}
              border={"2px solid #DFE4EE"}
              background={"rgba(255, 255, 255, 0.25)"}
              color={"#1C1C1C"}
              cursor={"pointer"}
              _hover={{
                background: "#1C1C1C",
                color: "#FFFFFF",
                borderColor: "#1C1C1C",
              }}
            >
              Documents
            </Button>
          </Link>
          <Button
            px={"15px"}
            py={"12px"}
            borderRadius={"23px"}
            width={"135px"}
            height={"45px"}
            border={"none"}
            background={"#1C1C1C"}
            color={"#FFFFFF"}
            cursor={"pointer"}
            justifyContent={"center"}
            alignItems={"center"}
            _hover={{ background: "#0070ED" }}
            onClick={() => router.push("/discover")}
          >
            <Flex gap={"6px"} alignItems={"center"} justifyContent={"center"}>
              <Text
                fontSize={"14px"}
                fontWeight={600}
                lineHeight={"21px"}
                textAlign={"center"}
              >
                Discover
              </Text>
              <Image
                src={RightArrowIcon}
                alt="right-arrow"
                width={14}
                height={14}
              />
            </Flex>
          </Button>
        </Flex>
      </Flex>

      {/* Right: download card — desktop only */}
      <Flex
        display={{ base: "none", lg: "flex" }}
        flexDir={"column"}
        gap={"20px"}
        position={"absolute"}
        bottom={{ md: "30px", lg: "60px" }}
        right={{ md: "30px", lg: "90px" }}
        p={"30px"}
        borderRadius={"20px"}
        border={"1px solid #E1E8ED"}
        bgColor={"rgba(255,255,255,0.55)"}
        backdropFilter={"blur(12px)"}
        zIndex={50}
        minW={"300px"}
      >
        {/* Header */}
        <Flex flexDir={"column"} gap={"6px"}>
          <Flex alignItems={"center"} gap={"10px"}>
            <Text
              as={"span"}
              bgColor={"#FF4B4B"}
              color={"white"}
              fontSize={"13px"}
              fontWeight={700}
              px={"8px"}
              py={"3px"}
              borderRadius={"5px"}
              lineHeight={"normal"}
            >
              NEW
            </Text>
          </Flex>
          <Text fontSize={"22px"} fontWeight={700} color={"#1C1C1C"} lineHeight={"1.2"}>
            Desktop Version
            <Text as={"span"} color={"#0070ED"}> is here</Text>
          </Text>
          <Text fontSize={"13px"} color={"#9CA3AF"} fontWeight={500}>
            TRH Desktop v{PLATFORM_VERSION}
          </Text>
        </Flex>

        {/* Divider */}
        <Box height={"1px"} bgColor={"#E1E8ED"} />

        {/* Download links */}
        <Flex flexDir={"column"} gap={"6px"}>
          <Text fontSize={"13px"} fontWeight={600} color={"#9CA3AF"} letterSpacing={"0.5px"} textTransform={"uppercase"}>
            macOS
          </Text>
          <DownloadLink href={PLATFORM_DOWNLOAD_MAC_ARM} label={"Apple Silicon"} />
          <DownloadLink href={PLATFORM_DOWNLOAD_MAC_INTEL} label={"Intel (x64)"} />
        </Flex>
        <Flex flexDir={"column"} gap={"6px"}>
          <Text fontSize={"13px"} fontWeight={600} color={"#9CA3AF"} letterSpacing={"0.5px"} textTransform={"uppercase"}>
            Windows
          </Text>
          <DownloadLink href={PLATFORM_DOWNLOAD_WINDOWS} label={"Windows (x64)"} />
        </Flex>
        <Flex flexDir={"column"} gap={"6px"}>
          <Text fontSize={"13px"} fontWeight={600} color={"#9CA3AF"} letterSpacing={"0.5px"} textTransform={"uppercase"}>
            Linux
          </Text>
          <DownloadLink href={PLATFORM_DOWNLOAD_LINUX} label={"Linux AppImage"} />
        </Flex>
      </Flex>
    </Flex>
  );
}
