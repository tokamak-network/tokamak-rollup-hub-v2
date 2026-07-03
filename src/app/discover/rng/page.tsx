"use client";
import { Box, Flex, Link, List, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import backIcon from "@/assets/icon/back.svg";
import Image from "next/image";
import { SocialButton } from "@/components/ui/social-button";
import { IntegrationLogo } from "@/components/ui/integration-logo";
import { useState } from "react";

const COMMIT_REVEAL2_URL =
  "https://github.com/tokamak-network/Commit-Reveal2";

const DRB_NODE_URL = "https://github.com/tokamak-network/DRB-node";

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
      <Text color={"#0070ED"}>Random Number Generation</Text>
    </Flex>
  );
};

export default function RngPage() {
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
                  <IntegrationLogo name={"rng"} width={60} height={60} />
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
                      Random Number Generation
                    </Text>
                    <Text
                      fontSize={{ base: "13px", md: "14px" }}
                      fontWeight={400}
                      lineHeight={"normal"}
                    >
                      Powered by Tokamak DRB
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
                          Gaming &amp; Full presets
                        </Text>
                      </Flex>
                    </Flex>
                    <Flex gap={"12px"} flexWrap={"wrap"}>
                      <SocialButton
                        icon={"github"}
                        label={"Commit-Reveal2"}
                        link={COMMIT_REVEAL2_URL}
                      />
                      <SocialButton
                        icon={"github"}
                        label={"DRB Node"}
                        link={DRB_NODE_URL}
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
                  Random Number Generation brings manipulation-resistant
                  on-chain randomness to your chain through the Tokamak
                  Distributed Random Beacon (DRB). It gives smart contracts a
                  verifiable source of randomness &mdash; ideal for gaming,
                  lotteries, fair ordering, and other use cases that need
                  tamper-proof entropy.
                  <br />
                  <br />
                  Key benefits:
                  <br />&bull; Manipulation-resistant randomness no single party
                  can bias
                  <br />&bull; Verifiable on-chain output
                  <br />&bull; Distributed operator set, no trusted third party
                  <br />&bull; Deployed automatically with the Gaming and Full
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
                  DRB uses a two-phase commit-reveal protocol. In the commit
                  phase, participants lock in hidden values that produce an
                  intermediate value. In the reveal phase, the reveal order is
                  itself randomized from those commitments, so no participant
                  can predict or claim the final position. This defeats the
                  &ldquo;last revealer&rdquo; attack that lets an actor peek at
                  the outcome and strategically withhold their reveal.
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
                  DRB is provisioned automatically when you deploy your Thanos
                  Stack with the Gaming or Full preset &mdash; no manual setup
                  required. Explore the protocol contracts in{" "}
                  <Link
                    _hover={{ textDecoration: "underline" }}
                    color={"#0070ED"}
                    href={COMMIT_REVEAL2_URL}
                    target="_blank"
                  >
                    Commit-Reveal2
                  </Link>{" "}
                  and the node software in{" "}
                  <Link
                    _hover={{ textDecoration: "underline" }}
                    color={"#0070ED"}
                    href={DRB_NODE_URL}
                    target="_blank"
                  >
                    DRB-node
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
                  Manipulation-Resistant
                  <Text
                    as={"span"}
                    fontSize={"13px"}
                    fontWeight={400}
                    lineHeight={"17px"}
                  >
                    {" "}
                    &bull; Two-phase commit-reveal design
                  </Text>
                </List.Item>
                <List.Item fontSize={"14px"} fontWeight={700} lineHeight={"17px"}>
                  On-Chain Verifiable
                  <Text
                    as={"span"}
                    fontSize={"13px"}
                    fontWeight={400}
                    lineHeight={"17px"}
                  >
                    {" "}
                    &bull; Randomness contracts can verify
                  </Text>
                </List.Item>
                <List.Item fontSize={"14px"} fontWeight={700} lineHeight={"17px"}>
                  Built for Gaming
                  <Text
                    as={"span"}
                    fontSize={"13px"}
                    fontWeight={400}
                    lineHeight={"17px"}
                  >
                    {" "}
                    &bull; Fair entropy for on-chain games
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
                Deployed automatically with the Gaming and Full presets.
              </Text>
            </Flex>
            <Box height={"1px"} alignSelf={"stretch"} bgColor={"#E1E8ED"} />
            <Flex flexDir={"column"} gap={"9px"}>
              <Text fontSize={"15px"} fontWeight={700} letterSpacing={"-0.45px"}>
                Requirements
              </Text>
              <List.Root ml={"15px"}>
                <List.Item fontSize={"13px"} fontWeight={400} lineHeight={"17px"}>
                  Deployed Thanos Stack (Gaming or Full preset)
                </List.Item>
              </List.Root>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
