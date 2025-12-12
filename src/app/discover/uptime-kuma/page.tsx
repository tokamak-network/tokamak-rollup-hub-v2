"use client";
import { Box, Flex, List, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import backIcon from "@/assets/icon/back.svg";
import Image from "next/image";
import { SocialButton } from "@/components/ui/social-button";
import { IntegrationLogo } from "@/components/ui/integration-logo";
import { useState } from "react";

const BackButton = () => {
  const router = useRouter();
  const [isHover, setIsHover] = useState(false);
  return (
    <Flex
      gap={"12px"}
      ml={"30px"}
      alignItems={"center"}
      cursor={"pointer"}
      onClick={() => router.push("/discover?category=integration")}
      zIndex={100}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Image src={backIcon} alt="back" />
      <Text
        fontSize={"18px"}
        fontWeight={700}
        letterSpacing={"-0.54px"}
        cursor={"pointer"}
        textDecoration={isHover ? "underline" : "none"}
      >
        Back
      </Text>
    </Flex>
  );
};

const RouteComponent = () => {
  const router = useRouter();
  return (
    <Flex
      gap={"12px"}
      alignItems={"center"}
      fontSize={"12px"}
      lineHeight={"normal"}
      cursor={"pointer"}
    >
      <Text
        _hover={{ textDecoration: "underline" }}
        onClick={() => router.push("/discover")}
      >
        Discover
      </Text>
      <Text opacity={0.25}>/</Text>
      <Text
        _hover={{ textDecoration: "underline" }}
        onClick={() => router.push("/discover?category=integration")}
      >
        Integrations
      </Text>
      <Text opacity={0.25}>/</Text>
      <Text color={"#0070ED"}>Uptime Kuma</Text>
    </Flex>
  );
};

export default function UptimeKumaPage() {
  return (
    <Box
      pt={{ base: "108px", md: "138px", lg: "198px" }}
      px={{ base: "15px", md: "31px", lg: "40px" }}
      pb={"30px"}
      w={"100%"}
      minH={`calc(100vh - ${95}px)`}
      bgColor={"#FAFBFC"}
    >
      <Flex flexDir={"column"} gap={"30px"} maxWidth={"1200px"} mx={"auto"}>
        <Flex
          position={"absolute"}
          top={0}
          left={0}
          w={"100%"}
          h={"100vh"}
          zIndex={1}
          bg={"url(/images/discover-bg.png) no-repeat center center"}
          bgSize={"cover"}
        ></Flex>
        <BackButton />
        <Flex
          gap={"30px"}
          flexDir={{ base: "column", lg: "row" }}
          alignItems={"flex-start"}
          zIndex={100}
        >
          <Flex
            flexDir={"column"}
            width={{ base: "100%", lg: "75%" }}
            borderRadius={"15px"}
            border={"1px solid #E1E8ED"}
            bgColor={"#FFF"}
            padding={{ base: "21px 21px 30px 21px", lg: "45px 30px 60px 30px" }}
            gap={{ base: "60px", lg: "75px" }}
            alignItems={"flex-start"}
          >
            <Flex flexDir={"column"} gap={"45px"}>
              <RouteComponent />
              <Flex flexDir={"column"} gap={"18px"}>
                <Flex alignItems={"center"} gap={"15px"}>
                  <IntegrationLogo
                    name={"uptime-kuma"}
                    width={45}
                    height={45}
                  />
                  <Flex
                    gap={{ base: "6px", md: "12px" }}
                    alignItems={{ base: "flex-start", md: "center" }}
                    flexDir={{ base: "column", md: "row" }}
                  >
                    <Text
                      fontSize={{ base: "21px", md: "36px" }}
                      fontWeight={700}
                      letterSpacing={"-1.08px"}
                    >
                      Uptime Kuma
                    </Text>
                    <Text
                      fontSize={{ base: "13px", md: "14px" }}
                      fontWeight={400}
                      lineHeight={"normal"}
                    >
                      Monitoring
                    </Text>
                  </Flex>
                </Flex>
                <Flex
                  ml={{ base: "0px", md: "60px" }}
                  flexDir={"column"}
                  gap={"30px"}
                >
                  <Flex flexDir={"column"} gap={"30px"}>
                    <Flex alignItems={"center"} gap={"45px"}>
                      <Flex flexDir={"column"} gap={"3px"}>
                        <Text fontSize={"12px"} fontWeight={400}>
                          Created by
                        </Text>
                        <Text fontSize={"13px"} fontWeight={700}>
                          TRH Team
                        </Text>
                      </Flex>
                      <Flex flexDir={"column"} gap={"3px"}>
                        <Text fontSize={"12px"} fontWeight={400}>
                          Released on
                        </Text>
                        <Text fontSize={"13px"} fontWeight={700}>
                          22 January 2025
                        </Text>
                      </Flex>
                    </Flex>
                    <Flex gap={"12px"} flexWrap={"wrap"}>
                      <SocialButton
                        icon={"github"}
                        label={"Github"}
                        link={"https://github.com/louislam/uptime-kuma"}
                      />
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex flexDir={"column"} gap={"45px"}>
              <Flex flexDir={"column"} gap={"6px"}>
                <Text
                  fontSize={"18px"}
                  fontWeight={700}
                  letterSpacing={"-0.54px"}
                >
                  Overview
                </Text>
                <Text fontSize={"15px"} fontWeight={400} lineHeight={"18px"}>
                  System Pulse provides real-time visibility into platform health and service availability across your rollup infrastructure. Built on Uptime Kuma, this self-hosted monitoring solution tracks uptime and performance with instant notifications for downtime or degraded performance. The integration is deployed independently via the Thanos SDK after your stack deployment.
                  <br />
                  <br />
                  With System Pulse, operators can:
                  <br />- Track service availability and platform health in real-time
                  <br />- Monitor all rollup components including RPC nodes, explorers, and bridges
                  <br />- Receive instant alerts when services go down
                  <br />- View historical uptime statistics and identify patterns
                  <br />- Access the Uptime Kuma dashboard via the stored service URL
                  <br />- Create status pages to share uptime metrics with your community
                  <br />
                  <br />
                  System Pulse is deployed asynchronously with the service URL stored in your stack metadata. Deployment logs are tracked in real-time, and the integration can be uninstalled at any time through the platform interface.
                </Text>
              </Flex>
              <Flex flexDir={"column"} gap={"6px"}>
                <Text
                  fontSize={"18px"}
                  fontWeight={700}
                  letterSpacing={"-0.54px"}
                >
                  Deployment Guide
                </Text>
                <Text fontSize={"15px"} fontWeight={400} lineHeight={"18px"}>
                  System Pulse is deployed via the Thanos SDK as an integration to your deployed Thanos Stack. The deployment process runs asynchronously in the background, with real-time log tracking for monitoring progress. Once deployed, the service URL is stored in your stack metadata and can be accessed through the platform interface. The integration requires a deployed Thanos Stack and runs independently to monitor all critical rollup components.
                </Text>
              </Flex>
              <Flex flexDir={"column"} gap={"6px"}>
                <Text
                  fontSize={"18px"}
                  fontWeight={700}
                  letterSpacing={"-0.54px"}
                >
                  Features
                </Text>
                <Text fontSize={"15px"} fontWeight={400} lineHeight={"18px"}>
                  Uptime Kuma offers a comprehensive set of features including:
                  <br />- Multi-protocol monitoring (HTTP, TCP, Ping, DNS, and more)
                  <br />- 90+ notification integrations
                  <br />- Beautiful and customizable status pages
                  <br />- Certificate expiry monitoring
                  <br />- Proxy support
                  <br />- 2FA authentication
                  <br />- Multi-language support
                  <br />- Mobile-responsive design
                  <br />
                  <br />
                  The tool is actively maintained with regular updates and has a large community of users contributing features and improvements.
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            p={"24px"}
            flexDir={"column"}
            gap={"21px"}
            borderRadius={"15px"}
            border={"1px solid #E1E8ED"}
            bgColor={"#FFF"}
            w={{ base: "100%", lg: "25%" }}
          >
            <Flex flexDir={"column"} gap={"9px"}>
              <Text
                fontSize={"15px"}
                fontWeight={700}
                letterSpacing={"-0.45px"}
              >
                Highlights
              </Text>
              <List.Root ml={"15px"}>
                <List.Item
                  fontSize={"14px"}
                  fontWeight={700}
                  lineHeight={"17px"}
                >
                  Real-time Monitoring
                  <Text
                    as={"span"}
                    fontSize={"13px"}
                    fontWeight={400}
                    lineHeight={"17px"}
                  >
                    - Track service availability and platform health 24/7
                  </Text>
                </List.Item>
                <List.Item
                  fontSize={"14px"}
                  fontWeight={700}
                  lineHeight={"17px"}
                >
                  Instant Alerts
                  <Text
                    as={"span"}
                    fontSize={"13px"}
                    fontWeight={400}
                    lineHeight={"17px"}
                  >
                    - Get notified immediately when services go down
                  </Text>
                </List.Item>
                <List.Item
                  fontSize={"14px"}
                  fontWeight={700}
                  lineHeight={"17px"}
                >
                  Self-hosted
                  <Text
                    as={"span"}
                    fontSize={"13px"}
                    fontWeight={400}
                    lineHeight={"17px"}
                  >
                    - Complete control over your monitoring data
                  </Text>
                </List.Item>
                <List.Item
                  fontSize={"14px"}
                  fontWeight={700}
                  lineHeight={"17px"}
                >
                  Simple Setup
                  <Text
                    as={"span"}
                    fontSize={"13px"}
                    fontWeight={400}
                    lineHeight={"17px"}
                  >
                    - Quick deployment via SDK with minimal configuration
                  </Text>
                </List.Item>
              </List.Root>
            </Flex>
            <Box height={"1px"} alignSelf={"stretch"} bgColor={"#E1E8ED"} />
            <Flex flexDir={"column"} gap={"9px"}>
              <Text
                fontSize={"15px"}
                fontWeight={700}
                letterSpacing={"-0.45px"}
              >
                Deployment Cost
              </Text>
              <Text fontSize={"14px"} fontWeight={400} lineHeight={"17px"}>
                Uptime Kuma is completely free and open source. The only costs are the minimal operational expenses for hosting the monitoring service on your cloud provider or on-premise server. No contract deployments or licensing fees are required.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
