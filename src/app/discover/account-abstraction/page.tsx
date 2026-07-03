"use client";
import { Box, Flex, Link, List, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import backIcon from "@/assets/icon/back.svg";
import Image from "next/image";
import { SocialButton } from "@/components/ui/social-button";
import { IntegrationLogo } from "@/components/ui/integration-logo";
import { useState } from "react";

const ERC_4337_SPEC_URL = "https://eips.ethereum.org/EIPS/eip-4337";

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
      <Text color={"#0070ED"}>Account Abstraction</Text>
    </Flex>
  );
};

export default function AccountAbstractionPage() {
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
                    name={"account-abstraction"}
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
                      Account Abstraction
                    </Text>
                    <Text
                      fontSize={{ base: "13px", md: "14px" }}
                      fontWeight={400}
                      lineHeight={"normal"}
                    >
                      Multi-Token Paymaster
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
                          Every preset
                        </Text>
                      </Flex>
                    </Flex>
                    <Flex gap={"12px"} flexWrap={"wrap"}>
                      <SocialButton
                        icon={"document"}
                        label={"ERC-4337 Spec"}
                        link={ERC_4337_SPEC_URL}
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
                  Every rollup deployed with the Rollup Hub ships with ERC-4337
                  Account Abstraction built in. An EntryPoint and a Multi-Token
                  Paymaster are predeployed at genesis, so your users can pay
                  transaction fees in tokens other than the native TON &mdash;
                  no separate installation or preset required.
                  <br />
                  <br />
                  Key benefits:
                  <br />&bull; Pay gas in non-TON fee tokens
                  <br />&bull; ERC-4337 standard EntryPoint and Paymaster
                  <br />&bull; EntryPoint kept funded through automatic refills
                  <br />&bull; Available across every preset out of the box
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
                  The EntryPoint and Multi-Token Paymaster contracts are
                  predeployed with your chain. When your rollup uses a non-TON
                  fee token, Account Abstraction activates: TON is pre-deposited
                  to fund the EntryPoint on the chain&apos;s behalf, and an
                  auto-refill keeps that balance topped up so user operations
                  keep flowing. The chain&apos;s admin account maintains a
                  minimum TON balance to cover these deposits.
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
                  Account Abstraction is included in every preset automatically
                  &mdash; there is nothing to install. Choosing a non-TON fee
                  token when you deploy activates the paymaster flow. Learn more
                  about the underlying standard in the{" "}
                  <Link
                    _hover={{ textDecoration: "underline" }}
                    color={"#0070ED"}
                    href={ERC_4337_SPEC_URL}
                    target="_blank"
                  >
                    ERC-4337 specification
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
                  Pay Gas in Any Token
                  <Text
                    as={"span"}
                    fontSize={"13px"}
                    fontWeight={400}
                    lineHeight={"17px"}
                  >
                    {" "}
                    &bull; Users are not limited to native TON
                  </Text>
                </List.Item>
                <List.Item fontSize={"14px"} fontWeight={700} lineHeight={"17px"}>
                  ERC-4337 Standard
                  <Text
                    as={"span"}
                    fontSize={"13px"}
                    fontWeight={400}
                    lineHeight={"17px"}
                  >
                    {" "}
                    &bull; EntryPoint and Paymaster predeploys
                  </Text>
                </List.Item>
                <List.Item fontSize={"14px"} fontWeight={700} lineHeight={"17px"}>
                  Auto-Refilled
                  <Text
                    as={"span"}
                    fontSize={"13px"}
                    fontWeight={400}
                    lineHeight={"17px"}
                  >
                    {" "}
                    &bull; EntryPoint stays funded automatically
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
                Built into every rollup, across all presets.
              </Text>
            </Flex>
            <Box height={"1px"} alignSelf={"stretch"} bgColor={"#E1E8ED"} />
            <Flex flexDir={"column"} gap={"9px"}>
              <Text fontSize={"15px"} fontWeight={700} letterSpacing={"-0.45px"}>
                Requirements
              </Text>
              <List.Root ml={"15px"}>
                <List.Item fontSize={"13px"} fontWeight={400} lineHeight={"17px"}>
                  Deployed Thanos Stack (any preset)
                </List.Item>
                <List.Item fontSize={"13px"} fontWeight={400} lineHeight={"17px"}>
                  Non-TON fee token to activate the paymaster
                </List.Item>
              </List.Root>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
