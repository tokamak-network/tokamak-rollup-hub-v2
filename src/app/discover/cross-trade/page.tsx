"use client";
import { Box, Flex, Link, List, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import backIcon from "@/assets/icon/back.svg";
import Image from "next/image";
import { SocialButton } from "@/components/ui/social-button";
import { IntegrationLogo } from "@/components/ui/integration-logo";
import { useState } from "react";

const CROSS_TRADE_RESEARCH_URL =
  "https://ethresear.ch/t/canonical-cross-chain-swap-fast-and-decentralized-settlement-for-cross-chain-swap-using-canonical-native-l1-l2-messaging/21638/3";

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
      <Text color={"#0070ED"}>Cross Trade</Text>
    </Flex>
  );
};

export default function CrossTradePage() {
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
                    name={"cross-trade"}
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
                      Cross Trade
                    </Text>
                    <Text
                      fontSize={{ base: "13px", md: "14px" }}
                      fontWeight={400}
                      lineHeight={"normal"}
                    >
                      Fast cross-chain settlement
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
                          Available in
                        </Text>
                        <Text fontSize={"13px"} fontWeight={700}>
                          DeFi &amp; Full presets
                        </Text>
                      </Flex>
                    </Flex>
                    <Flex gap={"12px"} flexWrap={"wrap"}>
                      <SocialButton
                        icon={"document"}
                        label={"Research"}
                        link={CROSS_TRADE_RESEARCH_URL}
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
                  Cross Trade lets your chain&apos;s users move assets across
                  chains without waiting out the standard 7-day withdrawal
                  challenge period. It supports fast, decentralized withdrawals
                  between L2 and L1 as well as direct L2-to-L2 transfers,
                  settled through canonical native L1&harr;L2 messaging.
                  <br />
                  <br />
                  Key benefits:
                  <br />&bull; Skip the 7-day withdrawal wait for supported
                  assets
                  <br />&bull; L2&harr;L1 and L2&harr;L2 transfers
                  <br />&bull; Decentralized settlement &mdash; no trusted
                  custodian
                  <br />&bull; Deployed automatically with the DeFi and Full
                  presets
                </Text>
              </Flex>
              <Flex flexDir={"column"} gap={"6px"}>
                <Text
                  fontSize={"18px"}
                  fontWeight={700}
                  letterSpacing={"-0.54px"}
                >
                  How It Works
                </Text>
                <Text fontSize={"15px"} fontWeight={400} lineHeight={"18px"}>
                  A liquidity provider fronts the requested asset on the
                  destination chain immediately, then reclaims the locked funds
                  on the source chain once the canonical cross-chain message is
                  finalized. Because settlement relies on native L1&harr;L2
                  messaging rather than a third-party bridge, users receive
                  funds quickly while the protocol remains trust-minimized.
                </Text>
              </Flex>
              <Flex flexDir={"column"} gap={"6px"}>
                <Text
                  fontSize={"18px"}
                  fontWeight={700}
                  letterSpacing={"-0.54px"}
                >
                  How to Enable
                </Text>
                <Text fontSize={"15px"} fontWeight={400} lineHeight={"18px"}>
                  Cross Trade is included out of the box when you deploy your
                  Thanos Stack with the DeFi or Full preset &mdash; no manual
                  setup required. Read the design rationale in the{" "}
                  <Link
                    _hover={{ textDecoration: "underline" }}
                    color={"#0070ED"}
                    href={CROSS_TRADE_RESEARCH_URL}
                    target="_blank"
                  >
                    canonical cross-chain swap research
                  </Link>
                  .
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
              <Text fontSize={"15px"} fontWeight={700} letterSpacing={"-0.45px"}>
                Highlights
              </Text>
              <List.Root ml={"15px"}>
                <List.Item fontSize={"14px"} fontWeight={700} lineHeight={"17px"}>
                  No 7-Day Wait
                  <Text
                    as={"span"}
                    fontSize={"13px"}
                    fontWeight={400}
                    lineHeight={"17px"}
                  >
                    {" "}
                    &bull; Fast withdrawals for supported assets
                  </Text>
                </List.Item>
                <List.Item fontSize={"14px"} fontWeight={700} lineHeight={"17px"}>
                  L2&harr;L1 &amp; L2&harr;L2
                  <Text
                    as={"span"}
                    fontSize={"13px"}
                    fontWeight={400}
                    lineHeight={"17px"}
                  >
                    {" "}
                    &bull; Move assets in both directions
                  </Text>
                </List.Item>
                <List.Item fontSize={"14px"} fontWeight={700} lineHeight={"17px"}>
                  Decentralized
                  <Text
                    as={"span"}
                    fontSize={"13px"}
                    fontWeight={400}
                    lineHeight={"17px"}
                  >
                    {" "}
                    &bull; Settlement via canonical messaging
                  </Text>
                </List.Item>
              </List.Root>
            </Flex>
            <Box height={"1px"} alignSelf={"stretch"} bgColor={"#E1E8ED"} />
            <Flex flexDir={"column"} gap={"9px"}>
              <Text fontSize={"15px"} fontWeight={700} letterSpacing={"-0.45px"}>
                Availability
              </Text>
              <Text fontSize={"14px"} fontWeight={400} lineHeight={"17px"}>
                Deployed automatically with the DeFi and Full presets.
              </Text>
            </Flex>
            <Box height={"1px"} alignSelf={"stretch"} bgColor={"#E1E8ED"} />
            <Flex flexDir={"column"} gap={"9px"}>
              <Text fontSize={"15px"} fontWeight={700} letterSpacing={"-0.45px"}>
                Requirements
              </Text>
              <List.Root ml={"15px"}>
                <List.Item fontSize={"13px"} fontWeight={400} lineHeight={"17px"}>
                  Deployed Thanos Stack (DeFi or Full preset)
                </List.Item>
              </List.Root>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
