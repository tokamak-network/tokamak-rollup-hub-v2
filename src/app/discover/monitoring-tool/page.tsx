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
                        label={"Grafana"}
                        link={"https://grafana.com/oss/grafana/"}
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
                  The Monitoring Tool provides comprehensive monitoring and analytics for your rollup infrastructure. Built on Grafana, Prometheus, and AlertManager, it offers real-time visibility into system performance, resource utilization, and network health. The integration is deployed automatically via the Thanos SDK and includes auto-generated credentials for immediate access.
                  <br />
                  <br />
                  With the Monitoring Tool, operators can:
                  <br />- Visualize metrics in real-time using Grafana dashboards
                  <br />- Collect and store performance data with Prometheus
                  <br />- Configure email alerts via SMTP with customizable receivers
                  <br />- Set up Telegram notifications using bot tokens for critical alerts
                  <br />- Track deployment logs and integration status in real-time
                  <br />- Monitor rollup performance including transaction throughput and block production
                  <br />
                  <br />
                  The Monitoring Tool is deployed asynchronously in the background, with credentials and configuration stored securely in your stack metadata. Alert channels can be configured or disabled at any time through the platform interface.
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
                  The Monitoring Tool is deployed via the Thanos SDK as an integration to your deployed stack. During installation, the system automatically sets up Grafana, Prometheus, and AlertManager, generates secure credentials, and stores the Grafana URL in your stack metadata. Operators can configure alert channels (Email/Telegram) either during initial deployment or afterward through the integration settings. The deployment process runs asynchronously in the background with real-time log tracking for monitoring progress.
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
                  Real-time Metrics
                  <Text
                    as={"span"}
                    fontSize={"13px"}
                    fontWeight={400}
                    lineHeight={"17px"}
                  >
                    - Monitor rollup performance with Grafana dashboards
                  </Text>
                </List.Item>
                <List.Item
                  fontSize={"14px"}
                  fontWeight={700}
                  lineHeight={"17px"}
                >
                  Multi-channel Alerts
                  <Text
                    as={"span"}
                    fontSize={"13px"}
                    fontWeight={400}
                    lineHeight={"17px"}
                  >
                    - Email and Telegram notifications for critical events
                  </Text>
                </List.Item>
                <List.Item
                  fontSize={"14px"}
                  fontWeight={700}
                  lineHeight={"17px"}
                >
                  Easy Configuration
                  <Text
                    as={"span"}
                    fontSize={"13px"}
                    fontWeight={400}
                    lineHeight={"17px"}
                  >
                    - Simple SMTP and bot token setup
                  </Text>
                </List.Item>
                <List.Item
                  fontSize={"14px"}
                  fontWeight={700}
                  lineHeight={"17px"}
                >
                  No Contract Costs
                  <Text
                    as={"span"}
                    fontSize={"13px"}
                    fontWeight={400}
                    lineHeight={"17px"}
                  >
                    - Only operational infrastructure costs
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
                The deployment cost of the Monitoring Tool is minimal as it doesn&apos;t require any contract deployment. Operators only need to cover the operational costs for running the monitoring infrastructure on their cloud provider or on-premise servers.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
