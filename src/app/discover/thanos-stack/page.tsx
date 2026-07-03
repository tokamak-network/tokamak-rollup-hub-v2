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
      onClick={() => router.push("/discover?category=stack")}
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
        onClick={() => router.push("/discover?category=stack")}
      >
        Stacks
      </Text>
      <Text opacity={0.25}>/</Text>
      <Text color={"#0070ED"}>Thanos Stack</Text>
    </Flex>
  );
};

export default function ThanosStackPage() {
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
                    name={"thanos-stack"}
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
                      Thanos Stack
                    </Text>
                    <Text
                      fontSize={{ base: "13px", md: "14px" }}
                      fontWeight={400}
                      lineHeight={"normal"}
                    >
                      OP
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
                          6 February 2025
                        </Text>
                      </Flex>
                    </Flex>
                    <Flex gap={"12px"} flexWrap={"wrap"}>
                      <SocialButton
                        icon={"github"}
                        label={"Github"}
                        link={
                          "https://github.com/tokamak-network/tokamak-thanos"
                        }
                      />
                      <SocialButton
                        icon={"document"}
                        label={"Document"}
                        link={
                          "https://docs.tokamak.network/home/service-guide/tokamak-l2/thanos-stack"
                        }
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
                  The Thanos Stack is built on{" "}
                  <Link
                    href={
                      "https://github.com/ethereum-optimism/optimism/releases/tag/op-node%2Fv1.12.0"
                    }
                    color={"#0070ED"}
                    target="_blank"
                  >
                    OP Stack v1.12.0
                  </Link>
                  , which natively supports the Ethereum Pectra upgrade, and has
                  been further upgraded to add support for the Ethereum Fusaka
                  upgrade. <br />
                  To meet the needs of the ecosystem and the direction of the
                  market, we can utilize ERC20 tokens as native tokens at layer
                  2. The Tokamak Network aims to create a flexible ecosystem
                  that supports on-demand Layer 2 solutions tailored to the
                  needs of users. This flexibility allows dApp developers and
                  operators to choose and manage the Layer 2 chain that best
                  suits the specific needs of their application. <br />
                  The Thanos Stack is the first Layer 2 stack in Tokamak that
                  will serve as the cornerstone for building on-demand Layer 2
                  chains.
                </Text>
              </Flex>
              <Box
                px={"30px"}
                bg={"url(/images/thanos-stack-bg.jpg) no-repeat center center"}
                bgSize={"cover"}
                width={"100%"}
                borderRadius={"15px"}
                border={"1px solid #E1E8ED"}
                backgroundColor={"#FFF"}
                aspectRatio={"1.1/1"}
              />
              {/* <Flex flexDir={"column"} gap={"6px"}>
                <Text
                  fontSize={"18px"}
                  fontWeight={700}
                  letterSpacing={"-0.54px"}
                >
                  Deployment Guide
                </Text>
                <Text fontSize={"15px"} fontWeight={400} lineHeight={"18px"}>
                  This stack is supported for deployment on local devnet,
                  testnet (Sepolia), and Ethereum Mainnet by SDK following{" "}
                  <Link
                    _hover={{ textDecoration: "underline" }}
                    color={"#0070ED"}
                    href={THANOS_STACK_DEPLOYMENT_GUIDE_URL}
                    target="_blank"
                  >
                    This Guide
                  </Link>
                  . For the infrastructure of the testnet and mainnet
                  deployment, we currently offer support for AWS in our
                  deployment SDK. Support for other cloud providers such as GCP
                  and Azure is in the pipeline.
                </Text>
              </Flex> */}
              <Flex flexDir={"column"} gap={"6px"}>
                <Text
                  fontSize={"18px"}
                  fontWeight={700}
                  letterSpacing={"-0.54px"}
                >
                  How to Contribute this Stack
                </Text>
                <Text fontSize={"15px"} fontWeight={400} lineHeight={"18px"}>
                  The thanos stack is open source, and operators and developers
                  can extend its functionalities to suit their specific needs.
                  If you want to contribute to the thanos chain, please feel
                  free to create a PR on{" "}
                  <Link
                    _hover={{ textDecoration: "underline" }}
                    color={"#0070ED"}
                    href={"https://github.com/tokamak-network/tokamak-thanos"}
                    target="_blank"
                  >
                    GitHub
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
                Hightlights
              </Text>
              <List.Root ml={"15px"}>
                <List.Item
                  fontSize={"14px"}
                  fontWeight={700}
                  lineHeight={"17px"}
                >
                  Ease of deployment
                  <Text
                    as={"span"}
                    fontSize={"13px"}
                    fontWeight={400}
                    lineHeight={"17px"}
                  >
                    • Simple to configure and deploy where you want
                  </Text>
                </List.Item>
                <List.Item
                  fontSize={"14px"}
                  fontWeight={700}
                  lineHeight={"17px"}
                >
                  Flexible Ecosystem
                  <Text
                    as={"span"}
                    fontSize={"13px"}
                    fontWeight={400}
                    lineHeight={"17px"}
                  >
                    • Supports on-demand Layer 2 solutions that fit the needs of
                    users
                  </Text>
                </List.Item>
                <List.Item
                  fontSize={"14px"}
                  fontWeight={700}
                  lineHeight={"17px"}
                >
                  Fast and Secure
                  <Text
                    as={"span"}
                    fontSize={"13px"}
                    fontWeight={400}
                    lineHeight={"17px"}
                  >
                    • Delivers L2 scalability, security, and reliability while
                    interacting seamlessly with L1 blockchain systems
                  </Text>
                </List.Item>
                <List.Item
                  fontSize={"14px"}
                  fontWeight={700}
                  lineHeight={"17px"}
                >
                  Seamless Development
                  <Text
                    as={"span"}
                    fontSize={"13px"}
                    fontWeight={400}
                    lineHeight={"17px"}
                  >
                    • Provides a development environment that mirrors the
                    familiar Ethereum environment
                  </Text>
                </List.Item>
                <List.Item
                  fontSize={"14px"}
                  fontWeight={700}
                  lineHeight={"17px"}
                >
                  Cost-Effective
                  <Text
                    as={"span"}
                    fontSize={"13px"}
                    fontWeight={400}
                    lineHeight={"17px"}
                  >
                    • Offers faster transaction processing and lower transaction
                    fees
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
                Suggested Integrations
              </Text>
              <List.Root ml={"15px"}>
                <List.Item
                  fontSize={"14px"}
                  fontWeight={700}
                  lineHeight={"17px"}
                >
                  Thanos Explorer
                  <Text
                    as={"span"}
                    fontSize={"13px"}
                    fontWeight={400}
                    lineHeight={"17px"}
                  >
                    • A tool for monitoring and analyzing the performance of the
                    thanos chain
                  </Text>
                </List.Item>
                <List.Item
                  fontSize={"14px"}
                  fontWeight={700}
                  lineHeight={"17px"}
                >
                  Thanos Bridge
                  <Text
                    as={"span"}
                    fontSize={"13px"}
                    fontWeight={400}
                    lineHeight={"17px"}
                  >
                    • A bridge for transferring ERC-20 tokens between the thanos
                    chain and the L1 network
                  </Text>
                </List.Item>
                <List.Item
                  fontSize={"14px"}
                  fontWeight={700}
                  lineHeight={"17px"}
                >
                  Staking / DAO Candidate Registration
                  <Text
                    as={"span"}
                    fontSize={"13px"}
                    fontWeight={400}
                    lineHeight={"17px"}
                  >
                    • Register your chain as a staking and DAO candidate in
                    Tokamak Staking v2 to receive a share of the distributed
                    seigniorage rewards.
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
                The maximum L1 contract deployment cost on Thanos Stack is
                estimated to be around gas price * 80,000,000 (Wei).
                Additionally, both testnet and mainnet deployments will incur
                AWS infrastructure costs based on usage.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
