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

const SEIGNIORAGE_URL =
  "https://github.com/tokamak-network/papers/blob/master/cryptoeconomics/tokamak-cryptoeconomics-en.md#seigniorage-distribution";

const STAKING_DASHBOARD_URL = "https://sepolia.staking.tokamak.network/staking";

const METADATA_GUIDE_URL = "https://docs.tokamak.network";

const METADATA_REPO_URL = "https://github.com/tokamak-network/tokamak-rollup-metadata-repository";

const AUDIT_REPORTS = {
  hacken: "https://drive.google.com/file/d/16C6S41ofv6AZQGMga7xPNBHj-FYCyTYt/view",
  nethermind: "https://drive.google.com/file/d/15CZFQXpL6vgQOo7j_MYZo2qQg5-cP3rE/view",
  independent: "https://drive.google.com/file/d/1LXojKxWYb3vaVcewxcnGzNOZ9rPEQS_O/view",
};

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
                          Tokamak Rollup Hub Team
                        </Text>
                      </Flex>
                      <Flex flexDir={"column"} gap={"3px"}>
                        <Text fontSize={"12px"} fontWeight={400}>
                          Launching on
                        </Text>
                        <Text fontSize={"13px"} fontWeight={700}>
                          17 December 2026
                        </Text>
                      </Flex>
                    </Flex>
                    <Flex gap={"12px"} flexWrap={"wrap"}>
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
                  <br />- Authorized to receive distribution of TON seigniorage according to activation of rollup (See{" "}
                  <Link
                    color={"#0070ED"}
                    href={SEIGNIORAGE_URL}
                    target="_blank"
                    _hover={{ textDecoration: "underline" }}
                  >
                    distribution criteria
                  </Link>
                  )
                </Text>
              </Flex>
              <Flex gap={"15px"} flexDir={"column"} alignItems={"center"}>
                <Box
                  borderRadius={"15px"}
                  border={"1px solid #E1E8ED"}
                  backgroundColor={"#f8fafc"}
                  overflow={"hidden"}
                  w={"80%"}
                >
                  <img
                    src="/images/dao1.png"
                    alt="DAO Registration"
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </Box>
                <Box
                  borderRadius={"15px"}
                  border={"1px solid #E1E8ED"}
                  backgroundColor={"#f8fafc"}
                  overflow={"hidden"}
                  w={"80%"}
                >
                  <img
                    src="/images/dao2.jpg"
                    alt="DAO Staking"
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
                  - Information for governance participation and seigniorage distribution is available on the{" "}
                  <Link
                    color={"#0070ED"}
                    href={STAKING_DASHBOARD_URL}
                    target="_blank"
                    _hover={{ textDecoration: "underline" }}
                  >
                    Staking Dashboard
                  </Link>
                  <br />- <Text as={"span"} fontWeight={700}>
                    Seigniorage Distribution
                  </Text>{" "}
                  - Automatically receives TON seigniorage according to distribution logic
                </Text>
              </Flex>
              <Flex flexDir={"column"} gap={"6px"}>
                <Text
                  fontSize={"18px"}
                  fontWeight={700}
                  letterSpacing={"-0.54px"}
                >
                  What You Need
                </Text>
                <Text fontSize={"15px"} fontWeight={400} lineHeight={"18px"}>
                  To register your rollup as a DAO candidate, you&apos;ll need:
                  <br />
                  <br />- <Text as={"span"} fontWeight={700}>
                    Staking Amount
                  </Text>{" "}
                  - Minimum 1000.1 TON (required)
                  <br />- <Text as={"span"} fontWeight={700}>
                    Memo
                  </Text>{" "}
                  - A memo for your rollup (required)
                  <br />- <Text as={"span"} fontWeight={700}>
                    Name
                  </Text>{" "}
                  - A name for your rollup (optional)
                </Text>
              </Flex>
              <Flex flexDir={"column"} gap={"6px"}>
                <Text
                  fontSize={"18px"}
                  fontWeight={700}
                  letterSpacing={"-0.54px"}
                >
                  L1 Verification Contract
                </Text>
                <Text fontSize={"15px"} fontWeight={400} lineHeight={"18px"}>
                  The TRH platform includes an L1 verification contract that validates the chain stack and registers operators. This contract has been audited by Nethermind, Hacken and an independent auditor (Carl). View the audit reports in the sidebar.
                </Text>
              </Flex>
              <Flex flexDir={"column"} gap={"6px"}>
                <Text
                  fontSize={"18px"}
                  fontWeight={700}
                  letterSpacing={"-0.54px"}
                >
                  Additional Steps to Build Community Trust
                </Text>
                <Text fontSize={"15px"} fontWeight={400} lineHeight={"18px"} mt={"6px"}>
                  <Text as={"span"} fontWeight={700}>
                    Operator Metadata Registration
                  </Text>{" "}
                  (
                  <Link
                    color={"#0070ED"}
                    href={METADATA_GUIDE_URL}
                    target="_blank"
                    _hover={{ textDecoration: "underline" }}
                  >
                    Guide
                  </Link>
                  )
                  <br />
                  Operators can register metadata to provide additional transparency, including:
                  <br />- Official website information
                  <br />- Support and contact URLs
                  <br />- Documentation links
                  <br />- Community and social links
                </Text>
                <Text fontSize={"15px"} fontWeight={400} lineHeight={"18px"} mt={"15px"}>
                  <Text as={"span"} fontWeight={700}>
                    Metadata Verification via Tokamak Network
                  </Text>
                  <br />
                  Tokamak Network provides a metadata checker dApp that:
                  <br />- Verifies chain stack information
                  <br />- Allows verified metadata to be shared with users
                  <br />- Helps improve transparency and trust within the community
                </Text>
                <Text fontSize={"15px"} fontWeight={400} lineHeight={"18px"} mt={"15px"}>
                  <Text as={"span"} fontWeight={700}>
                    Prerequisite:
                  </Text>
                  <br />
                  Operators must provide a GitHub Personal Access Token (PAT) to push metadata to the{" "}
                  <Link
                    color={"#0070ED"}
                    href={METADATA_REPO_URL}
                    target="_blank"
                    _hover={{ textDecoration: "underline" }}
                  >
                    Tokamak Rollup Metadata Repository
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
                Quick Info
              </Text>
              <Flex flexDir={"column"} gap={"12px"}>
                <Flex justifyContent={"space-between"} alignItems={"center"}>
                  <Text fontSize={"13px"} fontWeight={400} color={"#666"}>
                    Min. Stake
                  </Text>
                  <Text fontSize={"13px"} fontWeight={600}>
                    1000.1 TON
                  </Text>
                </Flex>
                <Flex justifyContent={"space-between"} alignItems={"center"}>
                  <Text fontSize={"13px"} fontWeight={400} color={"#666"}>
                    Contract Fee
                  </Text>
                  <Text fontSize={"13px"} fontWeight={600}>
                    None
                  </Text>
                </Flex>
                <Flex justifyContent={"space-between"} alignItems={"center"}>
                  <Text fontSize={"13px"} fontWeight={400} color={"#666"}>
                    Prerequisite
                  </Text>
                  <Text fontSize={"13px"} fontWeight={600}>
                    Thanos Stack
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Box height={"1px"} alignSelf={"stretch"} bgColor={"#E1E8ED"} />
            <Flex flexDir={"column"} gap={"9px"}>
              <Text
                fontSize={"15px"}
                fontWeight={700}
                letterSpacing={"-0.45px"}
              >
                Security Audits
              </Text>
              <Text fontSize={"12px"} fontWeight={400} color={"#666"} lineHeight={"16px"}>
                L1 Verification Contract audited by:
              </Text>
              <Flex flexDir={"column"} gap={"8px"} mt={"4px"}>
                <AuditCard
                  name="Hacken"
                  subtitle="Security Audit Firm"
                  logo="/icon/hacken.png"
                  link={AUDIT_REPORTS.hacken}
                />
                <AuditCard
                  name="Nethermind Security"
                  subtitle="Security Audit Firm"
                  logo="/icon/nethermindsecurity.png"
                  link={AUDIT_REPORTS.nethermind}
                />
                <AuditCard
                  name="Carl Farterson"
                  subtitle="Independent Auditor"
                  link={AUDIT_REPORTS.independent}
                />
              </Flex>
            </Flex>
            <Box height={"1px"} alignSelf={"stretch"} bgColor={"#E1E8ED"} />
            <Flex flexDir={"column"} gap={"9px"}>
              <Text
                fontSize={"15px"}
                fontWeight={700}
                letterSpacing={"-0.45px"}
              >
                Resources
              </Text>
              <Flex flexDir={"column"} gap={"6px"}>
                <Link
                  href={STAKING_DASHBOARD_URL}
                  target="_blank"
                  fontSize={"13px"}
                  color={"#0070ED"}
                  _hover={{ textDecoration: "underline" }}
                >
                  Staking Dashboard
                </Link>
                <Link
                  href={SEIGNIORAGE_URL}
                  target="_blank"
                  fontSize={"13px"}
                  color={"#0070ED"}
                  _hover={{ textDecoration: "underline" }}
                >
                  Seigniorage Distribution
                </Link>
                <Link
                  href={METADATA_REPO_URL}
                  target="_blank"
                  fontSize={"13px"}
                  color={"#0070ED"}
                  _hover={{ textDecoration: "underline" }}
                >
                  Metadata Repository
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

function AuditCard({ name, subtitle, logo, link }: { name: string; subtitle?: string; logo?: string; link: string }) {
  return (
    <Link
      href={link}
      target="_blank"
      bg="#FFF"
      border="1px solid #E1E8ED"
      borderRadius="12px"
      px={4}
      py={4}
      cursor="pointer"
      _hover={{ borderColor: "#0070ED", bg: "#F8FAFF", textDecoration: "none" }}
      transition="all 0.2s"
      display="flex"
      alignItems="center"
      w="100%"
      gap={3}
    >
      <Box
        w="40px"
        h="40px"
        minW="40px"
        borderRadius="10px"
        border="1px solid #E1E8ED"
        bg="#FFF"
        overflow="hidden"
        flexShrink={0}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {logo ? (
          <img
            src={logo}
            alt={name}
            style={{ width: "40px", height: "40px", objectFit: "cover" }}
          />
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="4"/>
            <path d="M4 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2"/>
          </svg>
        )}
      </Box>
      <Flex flexDir="column" flex={1} overflow="hidden">
        <Text fontSize="13px" fontWeight={600} color="#111" truncate>
          {name}
        </Text>
        {subtitle && (
          <Text fontSize="11px" color="#888" truncate>
            {subtitle}
          </Text>
        )}
      </Flex>
      <Text fontSize="11px" color="#0070ED" fontWeight={600} flexShrink={0}>
        View
      </Text>
    </Link>
  );
}
