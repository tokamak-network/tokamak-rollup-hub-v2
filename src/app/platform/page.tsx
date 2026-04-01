"use client";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import {
  PLATFORM_DOWNLOAD_LINUX,
  PLATFORM_DOWNLOAD_MAC_ARM,
  PLATFORM_DOWNLOAD_MAC_INTEL,
  PLATFORM_DOWNLOAD_WINDOWS,
  PLATFORM_VERSION,
} from "@/consts/urls";

interface DownloadButtonProps {
  label: string;
  url: string;
}

const DownloadButton = ({ label, url }: DownloadButtonProps) => (
  <Link
    href={url}
    display={"flex"}
    alignItems={"center"}
    justifyContent={"center"}
    px={"24px"}
    py={"12px"}
    borderRadius={"8px"}
    border={"1px solid #E1E8ED"}
    bgColor={"#FFF"}
    fontSize={"14px"}
    fontWeight={600}
    color={"#2E2E3A"}
    cursor={"pointer"}
    textDecoration={"none"}
    _hover={{ bgColor: "#0070ED", color: "#FFF", borderColor: "#0070ED" }}
    transition={"all 0.15s ease"}
    width={"100%"}
    textAlign={"center"}
  >
    {label}
  </Link>
);

interface OsCardProps {
  osName: string;
  description: string;
  children: React.ReactNode;
}

const OsCard = ({ osName, description, children }: OsCardProps) => (
  <Flex
    flexDir={"column"}
    justifyContent={"space-between"}
    gap={"18px"}
    p={"30px"}
    borderRadius={"15px"}
    border={"1px solid #E1E8ED"}
    bgColor={"#FFF"}
    flex={1}
    minW={{ base: "100%", md: "220px" }}
  >
    <Flex flexDir={"column"} gap={"6px"}>
      <Text fontSize={"18px"} fontWeight={700} letterSpacing={"-0.54px"}>
        {osName}
      </Text>
      <Text fontSize={"13px"} fontWeight={400} color={"#6B7280"} lineHeight={"normal"}>
        {description}
      </Text>
    </Flex>
    <Flex flexDir={"column"} gap={"9px"}>
      {children}
    </Flex>
  </Flex>
);

export default function PlatformPage() {
  return (
    <Box
      pt={{ base: "108px", md: "138px", lg: "198px" }}
      px={{ base: "15px", md: "31px", lg: "40px" }}
      pb={"60px"}
      w={"100%"}
      minH={`calc(100vh - 95px)`}
      bgColor={"#FAFBFC"}
    >
      <Flex
        position={"absolute"}
        top={0}
        left={0}
        w={"100%"}
        h={"100vh"}
        zIndex={1}
        bg={"url(/images/discover-bg.png) no-repeat center center"}
        bgSize={"cover"}
      />
      <Flex
        flexDir={"column"}
        gap={"48px"}
        maxWidth={"900px"}
        mx={"auto"}
        zIndex={100}
        position={"relative"}
      >
        <Flex flexDir={"column"} gap={"12px"}>
          <Flex alignItems={"center"} gap={"12px"} flexWrap={"wrap"}>
            <Text
              fontSize={{ base: "28px", md: "36px" }}
              fontWeight={700}
              letterSpacing={"-1.08px"}
            >
              TRH Desktop
            </Text>
            <Text
              px={"10px"}
              py={"4px"}
              borderRadius={"6px"}
              border={"1px solid #E1E8ED"}
              bgColor={"#FFF"}
              fontSize={"13px"}
              fontWeight={600}
              color={"#6B7280"}
            >
              v{PLATFORM_VERSION}
            </Text>
          </Flex>
          <Text
            fontSize={"15px"}
            fontWeight={400}
            color={"#4B5563"}
            lineHeight={"24px"}
            maxW={"600px"}
          >
            A one-click desktop application for deploying your L2 rollup.
            Automates Docker container orchestration so you can launch a
            Layer 2 chain without using the command line.
          </Text>
        </Flex>

        <Flex
          gap={"18px"}
          flexDir={{ base: "column", md: "row" }}
          alignItems={"stretch"}
        >
          <OsCard
            osName="macOS"
            description="macOS 12 Monterey or later"
          >
            <DownloadButton
              label="Download for Intel (x64)"
              url={PLATFORM_DOWNLOAD_MAC_INTEL}
            />
            <DownloadButton
              label="Download for Apple Silicon (ARM64)"
              url={PLATFORM_DOWNLOAD_MAC_ARM}
            />
          </OsCard>

          <OsCard
            osName="Windows"
            description="Windows 10 / 11 (x64)"
          >
            <DownloadButton
              label="Download for Windows (x64)"
              url={PLATFORM_DOWNLOAD_WINDOWS}
            />
          </OsCard>

          <OsCard
            osName="Linux"
            description="AppImage — works on most distros (x64)"
          >
            <DownloadButton
              label="Download AppImage (x64)"
              url={PLATFORM_DOWNLOAD_LINUX}
            />
          </OsCard>
        </Flex>
      </Flex>
    </Box>
  );
}
