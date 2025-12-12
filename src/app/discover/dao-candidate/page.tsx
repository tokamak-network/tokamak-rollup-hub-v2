"use client";
import { Box, Flex, Link, List, Text } from "@chakra-ui/react";
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
      <Text color={"#0070ED"}>Staking / DAO Candidate Registration</Text>
    </Flex>
  );
};

export default function DaoCandidatePage() {
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
                    name={"dao-candidate"}
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
                      lineHeight={"normal"}
                    >
                      Staking / DAO Candidate Registration
                    </Text>
                    <Text
                      fontSize={{ base: "13px", md: "14px" }}
                      fontWeight={400}
                      lineHeight={"normal"}
                    >
                      DAO
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
                          Tokamak Network
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
                        link={"https://github.com/tokamak-network/papers"}
                      />
                      <SocialButton
                        icon={"document"}
                        label={"Document"}
                        link={"https://github.com/tokamak-network/papers/blob/master/cryptoeconomics/tokamak-cryptoeconomics-en.md#222-ton-staking-v2"}
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
                  Register your rollup as a DAO candidate in the Tokamak Network ecosystem to participate in governance and earn seigniorage rewards. The registration requires a minimum stake of 1000.1 TON tokens and automatically provisions a Safe Wallet for multi-signature governance. Rewards are distributed proportionally based on your L2&apos;s transaction volume, total value locked (TVL), and overall contribution to ecosystem growth.
                  <br />
                  <br />
                  By becoming a DAO candidate, operators can:
                  <br />- Earn TON token rewards proportional to L2 growth and performance metrics
                  <br />- Vote on Tokamak Network governance proposals via Safe Wallet
                  <br />- Access ecosystem resources and cross-chain opportunities
                  <br />- Increase legitimacy and visibility within the Tokamak community
                  <br />
                  <br />
                  The registration process is handled asynchronously via the Thanos SDK. Operators submit their stake amount, memo, and optional name information. The system then verifies the registration, creates a Safe Wallet with configurable signature threshold, and tracks the registration status through the integration lifecycle.
                </Text>
              </Flex>
              <Flex flexDir={"column"} gap={"6px"}>
                <Text
                  fontSize={"18px"}
                  fontWeight={700}
                  letterSpacing={"-0.54px"}
                >
                  Registration Guide
                </Text>
                <Text fontSize={"15px"} fontWeight={400} lineHeight={"18px"}>
                  To register your chain as a DAO candidate, stake a minimum of 1000.1 TON tokens through the platform interface. Provide a memo for reference and optionally a candidate name. The system will automatically verify your registration via the Thanos SDK, provision a Safe Wallet for governance, and store registration details including staking amount, timestamp, and rollup configuration address. Detailed information on the cryptoeconomics model and reward distribution is available in{" "}
                  <Link
                    _hover={{ textDecoration: "underline" }}
                    color={"#0070ED"}
                    href={"https://github.com/tokamak-network/papers/blob/master/cryptoeconomics/tokamak-cryptoeconomics-en.md#222-ton-staking-v2"}
                    target="_blank"
                  >
                    the official documentation
                  </Link>
                  .
                </Text>
              </Flex>
              <Flex flexDir={"column"} gap={"6px"}>
                <Text
                  fontSize={"18px"}
                  fontWeight={700}
                  letterSpacing={"-0.54px"}
                >
                  Cryptoeconomics Model
                </Text>
                <Text fontSize={"15px"} fontWeight={400} lineHeight={"18px"}>
                  The Tokamak Network uses a sophisticated cryptoeconomics model to distribute seigniorage rewards to DAO candidates. Rewards are calculated based on multiple factors including transaction volume, total value locked, and overall contribution to the ecosystem. This model incentivizes high-quality rollups and sustainable growth. Learn more about the economic model in the{" "}
                  <Link
                    _hover={{ textDecoration: "underline" }}
                    color={"#0070ED"}
                    href={"https://github.com/tokamak-network/papers/blob/master/cryptoeconomics/tokamak-cryptoeconomics-en.md"}
                    target="_blank"
                  >
                    Tokamak Cryptoeconomics paper
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
                  Earn TON Rewards
                  <Text
                    as={"span"}
                    fontSize={"13px"}
                    fontWeight={400}
                    lineHeight={"17px"}
                  >
                    - Receive seigniorage rewards proportional to your L2&apos;s growth and performance
                  </Text>
                </List.Item>
                <List.Item
                  fontSize={"14px"}
                  fontWeight={700}
                  lineHeight={"17px"}
                >
                  Governance Participation
                  <Text
                    as={"span"}
                    fontSize={"13px"}
                    fontWeight={400}
                    lineHeight={"17px"}
                  >
                    - Vote on Tokamak Network proposals via Safe Wallet
                  </Text>
                </List.Item>
                <List.Item
                  fontSize={"14px"}
                  fontWeight={700}
                  lineHeight={"17px"}
                >
                  Low Barrier
                  <Text
                    as={"span"}
                    fontSize={"13px"}
                    fontWeight={400}
                    lineHeight={"17px"}
                  >
                    - Minimum 1000.1 TON stake to get started
                  </Text>
                </List.Item>
                <List.Item
                  fontSize={"14px"}
                  fontWeight={700}
                  lineHeight={"17px"}
                >
                  Growth Incentives
                  <Text
                    as={"span"}
                    fontSize={"13px"}
                    fontWeight={400}
                    lineHeight={"17px"}
                  >
                    - Rewards scale with transaction volume and ecosystem contribution
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
                Registration Cost
              </Text>
              <Text fontSize={"14px"} fontWeight={400} lineHeight={"17px"}>
                DAO candidate registration requires a minimum stake of 1000.1 TON tokens. There are no contract deployment fees, but operators should account for the initial TON stake and ongoing operational costs of maintaining governance participation.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
