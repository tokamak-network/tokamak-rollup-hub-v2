"use client";
import { Box, Flex, Link, List, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import backIcon from "@/assets/icon/back.svg";
import Image from "next/image";
import { SocialButton } from "@/components/ui/social-button";
import { IntegrationLogo } from "@/components/ui/integration-logo";
import { useState } from "react";
import { USER_GUIDE_URL } from "@/consts/urls";

const DAO_CANDIDATE_GUIDE_URL =
  "https://github.com/tokamak-network/papers/blob/master/cryptoeconomics/tokamak-cryptoeconomics-en.md#222-ton-staking-v2";

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
                        label={"GitHub"}
                        link={"https://github.com/tokamak-network/papers"}
                      />
                      <SocialButton
                        icon={"document"}
                        label={"Guide"}
                        link={DAO_CANDIDATE_GUIDE_URL}
                      />
                      <SocialButton
                        icon={"document"}
                        label={"Docs"}
                        link={USER_GUIDE_URL}
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
                  Register your rollup as a DAO candidate in the Tokamak Network
                  ecosystem. By staking TON tokens, your rollup becomes an
                  official participant in the network&apos;s governance and
                  reward system.
                  <br />
                  <br />
                  Key benefits:
                  <br />- Become part of the Tokamak Network ecosystem
                  <br />- Participate in governance decisions
                  <br />- Access to ecosystem resources and community
                  <br />- Increased visibility within the Tokamak community
                </Text>
              </Flex>
              <Box
                bg={
                  "url(/images/dao.png) no-repeat center center"
                }
                bgSize={"cover"}
                width={"100%"}
                borderRadius={"15px"}
                border={"1px solid #E1E8ED"}
                backgroundColor={"#f8fafc"}
                aspectRatio={"3.37/1"}
              />
              <Flex flexDir={"column"} gap={"6px"}>
                <Text
                  fontSize={"18px"}
                  fontWeight={700}
                  letterSpacing={"-0.54px"}
                >
                  What You Get
                </Text>
                <Text fontSize={"15px"} fontWeight={400} lineHeight={"18px"}>
                  After registration, you&apos;ll receive:
                  <br />
                  <br />- <Text as={"span"} fontWeight={700}>
                    Safe Wallet
                  </Text>{" "}
                  - A multi-signature wallet for secure governance participation
                  <br />- <Text as={"span"} fontWeight={700}>
                    Registration Record
                  </Text>{" "}
                  - Your candidate name, staking amount, and registration time
                  <br />- <Text as={"span"} fontWeight={700}>
                    Config Address
                  </Text>{" "}
                  - Your rollup&apos;s unique configuration address on-chain
                  <br />- <Text as={"span"} fontWeight={700}>
                    Wallet Owners
                  </Text>{" "}
                  - List of authorized signers for your Safe Wallet
                </Text>
              </Flex>
              <Flex flexDir={"column"} gap={"6px"}>
                <Text
                  fontSize={"18px"}
                  fontWeight={700}
                  letterSpacing={"-0.54px"}
                >
                  How to Register
                </Text>
                <Text fontSize={"15px"} fontWeight={400} lineHeight={"18px"}>
                  Register from the Integrations tab after deploying your Thanos
                  Stack. You&apos;ll need to provide:
                  <br />
                  <br />- <Text as={"span"} fontWeight={700}>
                    Staking Amount
                  </Text>{" "}
                  - Minimum 1000.1 TON tokens
                  <br />- <Text as={"span"} fontWeight={700}>
                    Candidate Name
                  </Text>{" "}
                  - A name for your rollup in the registry
                  <br />- <Text as={"span"} fontWeight={700}>Memo</Text> -
                  Additional information or purpose
                  <br />
                  <br />
                  For detailed information about the cryptoeconomics model, see
                  the{" "}
                  <Link
                    _hover={{ textDecoration: "underline" }}
                    color={"#0070ED"}
                    href={DAO_CANDIDATE_GUIDE_URL}
                    target="_blank"
                  >
                    official documentation
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
                  Join Tokamak Ecosystem
                  <Text
                    as={"span"}
                    fontSize={"13px"}
                    fontWeight={400}
                    lineHeight={"17px"}
                  >
                    {" "}
                    - Become an official participant in the network
                  </Text>
                </List.Item>
                <List.Item
                  fontSize={"14px"}
                  fontWeight={700}
                  lineHeight={"17px"}
                >
                  Safe Wallet
                  <Text
                    as={"span"}
                    fontSize={"13px"}
                    fontWeight={400}
                    lineHeight={"17px"}
                  >
                    {" "}
                    - Multi-sig wallet for secure governance
                  </Text>
                </List.Item>
                <List.Item
                  fontSize={"14px"}
                  fontWeight={700}
                  lineHeight={"17px"}
                >
                  Simple Registration
                  <Text
                    as={"span"}
                    fontSize={"13px"}
                    fontWeight={400}
                    lineHeight={"17px"}
                  >
                    {" "}
                    - Stake TON, provide name and memo
                  </Text>
                </List.Item>
                <List.Item
                  fontSize={"14px"}
                  fontWeight={700}
                  lineHeight={"17px"}
                >
                  On-chain Record
                  <Text
                    as={"span"}
                    fontSize={"13px"}
                    fontWeight={400}
                    lineHeight={"17px"}
                  >
                    {" "}
                    - Your registration is recorded on blockchain
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
                Minimum stake of 1000.1 TON tokens required. No additional
                contract deployment fees.
              </Text>
            </Flex>
            <Box height={"1px"} alignSelf={"stretch"} bgColor={"#E1E8ED"} />
            <Flex flexDir={"column"} gap={"9px"}>
              <Text
                fontSize={"15px"}
                fontWeight={700}
                letterSpacing={"-0.45px"}
              >
                Requirements
              </Text>
              <List.Root ml={"15px"}>
                <List.Item
                  fontSize={"13px"}
                  fontWeight={400}
                  lineHeight={"17px"}
                >
                  Deployed Thanos Stack
                </List.Item>
                <List.Item
                  fontSize={"13px"}
                  fontWeight={400}
                  lineHeight={"17px"}
                >
                  1000.1+ TON tokens
                </List.Item>
                <List.Item
                  fontSize={"13px"}
                  fontWeight={400}
                  lineHeight={"17px"}
                >
                  Candidate name & memo
                </List.Item>
              </List.Root>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
