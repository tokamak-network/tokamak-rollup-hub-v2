"use client";
import { Box, Flex, Link, List, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import backIcon from "@/assets/icon/back.svg";
import Image from "next/image";
import { SocialButton } from "@/components/ui/social-button";
import { IntegrationLogo } from "@/components/ui/integration-logo";
import { useState } from "react";
import { MONITORING_TOOL_GUIDE_URL } from "@/consts/urls";

const MONITORING_DOCS_URL = "https://docs.tokamak.network/home/service-guide/tokamak-rollup-hub/tokamak-rollup-hub-platform/integrate-your-chain-with-modular-services/monitoring-plugin";

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
      <Text color={"#0070ED"}>Monitoring Tool</Text>
    </Flex>
  );
};

export default function MonitoringToolPage() {
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
                    name={"monitoring-tool"}
                    width={60}
                    height={60}
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
                      Monitoring Tool
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
                          Tokamak Rollup Hub Team
                        </Text>
                      </Flex>
                      <Flex flexDir={"column"} gap={"3px"}>
                        <Text fontSize={"12px"} fontWeight={400}>
                          Launched on
                        </Text>
                        <Text fontSize={"13px"} fontWeight={700}>
                          17 December 2025
                        </Text>
                      </Flex>
                    </Flex>
                    <Flex gap={"12px"} flexWrap={"wrap"}>
                      <SocialButton
                        icon={"notion"}
                        label={"Guide"}
                        link={MONITORING_TOOL_GUIDE_URL}
                      />
                      <SocialButton
                        icon={"document"}
                        label={"Docs"}
                        link={MONITORING_DOCS_URL}
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
                  <Text as={"span"} fontWeight={700}>24/7 System Watch</Text> - Monitors the health of the Thanos Stack around the clock.
                  <br />
                  <Text as={"span"} fontWeight={700}>Visualization & Alerts</Text> - Provides real-time dashboards and instant notifications for critical issues.
                  <br />
                  <Text as={"span"} fontWeight={700}>Log Management</Text> - Centralized log collection for efficient troubleshooting.
                </Text>
              </Flex>
              <Flex flexDir={"column"} gap={"6px"}>
                <Text
                  fontSize={"18px"}
                  fontWeight={700}
                  letterSpacing={"-0.54px"}
                >
                  Key Features
                </Text>
                <Text fontSize={"15px"} fontWeight={400} lineHeight={"18px"}>
                  • <Text as={"span"} fontWeight={700}>Grafana Dashboards</Text> - Visualize real-time metrics for network health
                  <br />• <Text as={"span"} fontWeight={700}>Multi-channel Alerts</Text> - Instant notifications via Email (Gmail SMTP) and Telegram
                  <br />• <Text as={"span"} fontWeight={700}>Log Collection</Text> - Aggregates logs from all components for easy analysis
                  <br />• <Text as={"span"} fontWeight={700}>Customizable Monitoring</Text> - Tracks all Thanos Stack components and system resources
                </Text>
              </Flex>
              <Flex gap={"15px"} flexDir={"column"} alignItems={"center"}>
                <Box
                  borderRadius={"6px"}
                  border={"1px solid #E1E8ED"}
                  backgroundColor={"#0f0f0f"}
                  overflow={"hidden"}
                  w={"100%"}
                >
                  <img
                    src="/images/mt1.png"
                    alt="Monitoring Dashboard 1"
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </Box>
                <Box
                  borderRadius={"6px"}
                  border={"1px solid #E1E8ED"}
                  backgroundColor={"#0f0f0f"}
                  overflow={"hidden"}
                  w={"100%"}
                >
                  <img
                    src="/images/mt2.png"
                    alt="Monitoring Dashboard 2"
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </Box>
                <Box
                  borderRadius={"6px"}
                  border={"1px solid #E1E8ED"}
                  backgroundColor={"#0f0f0f"}
                  overflow={"hidden"}
                  w={"100%"}
                >
                  <img
                    src="/images/mt3.png"
                    alt="Monitoring Dashboard 3"
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </Box>
              </Flex>
              <Flex flexDir={"column"} gap={"6px"}>
                <Text
                  fontSize={"18px"}
                  fontWeight={700}
                  letterSpacing={"-0.54px"}
                >
                  What&apos;s Monitored
                </Text>
                <Text fontSize={"15px"} fontWeight={400} lineHeight={"18px"}>
                  • <Text as={"span"} fontWeight={700}>op-node</Text> - L2 node synchronization and derivation
                  <br />• <Text as={"span"} fontWeight={700}>op-geth</Text> - EVM execution client status
                  <br />• <Text as={"span"} fontWeight={700}>op-batcher</Text> - Batch transaction submission to L1
                  <br />• <Text as={"span"} fontWeight={700}>op-proposer</Text> - State root proposal generation
                  <br />• <Text as={"span"} fontWeight={700}>External Infrastructure</Text> - L1 RPC connectivity
                  <br />• <Text as={"span"} fontWeight={700}>System Resources</Text> - CPU, Memory, and Storage usage
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
                  Real-time Dashboards
                  <Text
                    as={"span"}
                    fontSize={"13px"}
                    fontWeight={400}
                    lineHeight={"17px"}
                  >
                    {" "}
                    • Grafana visualization of system health and metrics
                  </Text>
                </List.Item>
                <List.Item
                  fontSize={"14px"}
                  fontWeight={700}
                  lineHeight={"17px"}
                >
                  Email Alerts
                  <Text
                    as={"span"}
                    fontSize={"13px"}
                    fontWeight={400}
                    lineHeight={"17px"}
                  >
                    {" "}
                    • Gmail SMTP notifications for critical events
                  </Text>
                </List.Item>
                <List.Item
                  fontSize={"14px"}
                  fontWeight={700}
                  lineHeight={"17px"}
                >
                  Telegram Alerts
                  <Text
                    as={"span"}
                    fontSize={"13px"}
                    fontWeight={400}
                    lineHeight={"17px"}
                  >
                    {" "}
                    • Instant bot messages when issues arise
                  </Text>
                </List.Item>
                <List.Item
                  fontSize={"14px"}
                  fontWeight={700}
                  lineHeight={"17px"}
                >
                  Easy Setup
                  <Text
                    as={"span"}
                    fontSize={"13px"}
                    fontWeight={400}
                    lineHeight={"17px"}
                  >
                    {" "}
                    • Configure from the platform UI in minutes
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
                No smart contract costs. Only cloud infrastructure costs for
                running the monitoring stack on your provider.
              </Text>
            </Flex>
            <Box height={"1px"} alignSelf={"stretch"} bgColor={"#E1E8ED"} />
            <Flex flexDir={"column"} gap={"9px"}>
              <Text
                fontSize={"15px"}
                fontWeight={700}
                letterSpacing={"-0.45px"}
              >
                Monitoring Stack
              </Text>
              <List.Root ml={"15px"}>
                <List.Item
                  fontSize={"13px"}
                  fontWeight={400}
                  lineHeight={"17px"}
                >
                  <Text as={"span"} fontWeight={700}>
                    Prometheus
                  </Text>{" "}
                  • Metrics collection and storage
                </List.Item>
                <List.Item
                  fontSize={"13px"}
                  fontWeight={400}
                  lineHeight={"17px"}
                >
                  <Text as={"span"} fontWeight={700}>
                    Grafana
                  </Text>{" "}
                  • Visualization dashboards with custom panels
                </List.Item>
                <List.Item
                  fontSize={"13px"}
                  fontWeight={400}
                  lineHeight={"17px"}
                >
                  <Text as={"span"} fontWeight={700}>
                    AlertManager
                  </Text>{" "}
                  • Alert routing and notification
                </List.Item>
                <List.Item
                  fontSize={"13px"}
                  fontWeight={400}
                  lineHeight={"17px"}
                >
                  <Text as={"span"} fontWeight={700}>
                    Blackbox Exporter
                  </Text>{" "}
                  • External endpoint monitoring
                </List.Item>
                <List.Item
                  fontSize={"13px"}
                  fontWeight={400}
                  lineHeight={"17px"}
                >
                  <Text as={"span"} fontWeight={700}>
                    CloudWatch Logs
                  </Text>{" "}
                  • Centralized log storage and retention management
                </List.Item>
              </List.Root>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
