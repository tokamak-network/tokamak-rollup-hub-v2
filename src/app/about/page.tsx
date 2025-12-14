"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { USER_GUIDE_URL } from "@/consts/urls";
import Image from "next/image";
import logo from "@/assets/logo/logo.svg";

export default function AboutPage() {
  const router = useRouter();

  return (
    <Box
      pt={{ base: "108px", md: "138px", lg: "198px" }}
      px={{ base: "20px", md: "40px", lg: "60px" }}
      pb={"60px"}
      w={"100%"}
      minH={"100vh"}
      bgColor={"#FAFBFC"}
    >
      <Flex
        position={"absolute"}
        top={0}
        left={0}
        w={"100%"}
        h={"100vh"}
        zIndex={1}
        bg={"url(/images/discover-bg.png) no-repeat center center"}
        bgSize={"cover"}
        opacity={0.9}
      />
      <Flex
        flexDir={"column"}
        gap={"40px"}
        maxWidth={"1000px"}
        mx={"auto"}
        zIndex={100}
        position={"relative"}
      >
        {/* Hero Section with Image */}
        <Flex flexDir={"column"} alignItems={"center"}>
          <Flex alignItems={"center"} gap={{ base: "10px", md: "15px" }} flexWrap={"wrap"} justifyContent={"center"}>
            <Text
              fontSize={{ base: "36px", md: "48px", lg: "54px" }}
              fontWeight={700}
              lineHeight={"normal"}
              letterSpacing={"-1.62px"}
            >
              About Tokamak
            </Text>
            <Box
              display={"flex"}
              alignItems={"center"}
              h={{ base: "28px", md: "36px", lg: "42px" }}
            >
              <Image
                src={logo}
                alt="Tokamak Logo"
                width={42}
                height={42}
                style={{
                  width: "auto",
                  height: "100%",
                }}
              />
            </Box>
            <Text
              fontSize={{ base: "36px", md: "48px", lg: "54px" }}
              fontWeight={700}
              lineHeight={"normal"}
              letterSpacing={"-1.62px"}
            >
              Rollup Hub
            </Text>
          </Flex>
          <Text
            fontSize={{ base: "16px", md: "18px" }}
            fontWeight={400}
            lineHeight={"1.6"}
            color={"#2E2E3A"}
            opacity={0.8}
            textAlign={"center"}
          >
            A comprehensive platform for deploying and managing Optimistic Rollup chains on the Thanos stack
          </Text>

          {/* Hero Image */}
          <Image
            src="/images/about-hero.png"
            alt="TRH Platform - One-click deploy connecting to all integrations"
            width={3328}
            height={1398}
            style={{ maxWidth: "700px", width: "100%", height: "auto", marginTop: "10px", marginBottom: "-40px" }}
          />
        </Flex>

        {/* Platform Overview Section */}
        <Flex
          flexDir={"column"}
          gap={"30px"}
          p={{ base: "30px", md: "45px" }}
          borderRadius={"15px"}
          border={"1px solid #E1E8ED"}
          bgColor={"#FFF"}
        >
          <Text
            fontSize={{ base: "24px", md: "30px" }}
            fontWeight={700}
            letterSpacing={"-0.9px"}
          >
            Platform Overview
          </Text>
          <Text fontSize={"16px"} fontWeight={400} lineHeight={"1.75"}>
            Tokamak Rollup Hub (TRH) is an end-to-end platform that simplifies the deployment and management of Layer 2 rollup chains. Built on the Thanos stack, TRH provides developers and organizations with the tools they need to launch custom L2 appchains quickly and efficiently, without the complexity of manual infrastructure setup.
          </Text>
          <Text fontSize={"16px"} fontWeight={400} lineHeight={"1.75"}>
            TRH addresses the challenge of deploying production-ready rollups by offering automated deployment workflows, pre-integrated components, and comprehensive monitoring tools. Whether you&apos;re building a gaming platform, DeFi protocol, or enterprise blockchain solution, TRH provides the foundation for scalable, secure Layer 2 infrastructure.
          </Text>
          <Text fontSize={"16px"} fontWeight={400} lineHeight={"1.75"}>
            The platform leverages AWS infrastructure with PostgreSQL for reliable data management, containerized deployments for consistency, and asynchronous task processing to handle concurrent rollup deployments without blocking operations.
          </Text>
        </Flex>

        {/* Core Features Section */}
        <Flex
          flexDir={"column"}
          gap={"30px"}
          p={{ base: "30px", md: "45px" }}
          borderRadius={"15px"}
          border={"1px solid #E1E8ED"}
          bgColor={"#FFF"}
        >
          <Text
            fontSize={{ base: "24px", md: "30px" }}
            fontWeight={700}
            letterSpacing={"-0.9px"}
          >
            Core Features
          </Text>

          <Flex flexDir={"column"} gap={"24px"}>
            {/* Feature 1 */}
            <Flex flexDir={"column"} gap={"9px"}>
              <Text fontSize={"20px"} fontWeight={700} letterSpacing={"-0.6px"}>
                One-Click Rollup Deployment
              </Text>
              <Text fontSize={"15px"} fontWeight={400} lineHeight={"1.75"}>
                Deploy complete Thanos Stack infrastructure with SDK automation through a guided 4-step wizard. Configure network parameters including chain ID, gas limits, batch submission frequency, and consensus settings. Support for both mainnet and testnet deployments with real-time deployment tracking and comprehensive logging. Fine-tune performance with customizable L2 block time (default: 2s), output root frequency (default: 240s), and challenge period settings.
              </Text>
            </Flex>

            {/* Feature 2 */}
            <Flex flexDir={"column"} gap={"9px"}>
              <Text fontSize={"20px"} fontWeight={700} letterSpacing={"-0.6px"}>
                Essential Integrations
              </Text>
              <Text fontSize={"15px"} fontWeight={400} lineHeight={"1.75"}>
                <Text as={"span"} fontWeight={600}>Thanos Bridge:</Text> Transfer assets between L1 and L2 with support for ETH, TON, USDC, and USDT with lightweight architecture
                <br />
                <Text as={"span"} fontWeight={600}>Thanos Explorer:</Text> Blockscout-powered blockchain explorer for transaction and contract visibility with real-time indexing
                <br />
                <Text as={"span"} fontWeight={600}>Monitoring Tool:</Text> Grafana + Prometheus stack with multi-channel alerts via Email and Telegram, customizable alert receivers
                <br />
                <Text as={"span"} fontWeight={600}>Uptime Kuma:</Text> Real-time platform health and service availability monitoring with instant downtime notifications
                <br />
                <Text as={"span"} fontWeight={600}>Cross Trade:</Text> Fast, decentralized withdrawals between L2-L1 and L2-L2 chains with multi-token support
              </Text>
            </Flex>

            {/* Feature 3 */}
            <Flex flexDir={"column"} gap={"9px"}>
              <Text fontSize={"20px"} fontWeight={700} letterSpacing={"-0.6px"}>
                Governance & Economics
              </Text>
              <Text fontSize={"15px"} fontWeight={400} lineHeight={"1.75"}>
                Register as DAO candidate to participate in Tokamak Network governance with metadata DAO registration. Earn seigniorage rewards based on L2 growth metrics including transaction volume and network participation. Safe Wallet multi-signature governance for secure fund management with role-based access control. Stake TON tokens for ecosystem participation with minimum 1000.1 TON requirement.
              </Text>
            </Flex>

            {/* Feature 4 */}
            <Flex flexDir={"column"} gap={"9px"}>
              <Text fontSize={"20px"} fontWeight={700} letterSpacing={"-0.6px"}>
                Infrastructure Management
              </Text>
              <Text fontSize={"15px"} fontWeight={400} lineHeight={"1.75"}>
                Async background deployment with status tracking and 5 concurrent workers for non-blocking operations. Real-time log ingestion with downloadable log files for troubleshooting. Integration lifecycle management with install, uninstall, retry, and cancel capabilities. Stack control operations including resume, stop, and network parameter updates post-deployment. Metadata storage for credentials, configurations, and rollup config files.
              </Text>
            </Flex>

            {/* Feature 5 - Advanced Features */}
            <Flex flexDir={"column"} gap={"9px"}>
              <Text fontSize={"20px"} fontWeight={700} letterSpacing={"-0.6px"}>
                Advanced Backup & Recovery
              </Text>
              <Text fontSize={"15px"} fontWeight={400} lineHeight={"1.75"}>
                Comprehensive backup management system with checkpoint creation, snapshot management, and recovery point restoration. EFS and Kubernetes backup attachment support with configurable backup schedules. Automated retry logic for failed integrations without requiring full redeployment, minimizing downtime during issues.
              </Text>
            </Flex>
          </Flex>
        </Flex>

        {/* Technical Architecture Section */}
        <Flex
          flexDir={"column"}
          gap={"30px"}
          p={{ base: "30px", md: "45px" }}
          borderRadius={"15px"}
          border={"1px solid #E1E8ED"}
          bgColor={"#FFF"}
        >
          <Text
            fontSize={{ base: "24px", md: "30px" }}
            fontWeight={700}
            letterSpacing={"-0.9px"}
          >
            Technical Architecture
          </Text>
          <Flex flexDir={"column"} gap={"18px"}>
            <Text fontSize={"16px"} fontWeight={400} lineHeight={"1.75"}>
              TRH is built on a robust technical foundation designed for enterprise-grade reliability and performance. The backend utilizes Go with the Gin framework for high-performance API handling, PostgreSQL with connection pooling for optimized data management, and Docker containerization for consistent deployments across environments.
            </Text>
            <Text fontSize={"16px"} fontWeight={400} lineHeight={"1.75"}>
              <Text as={"span"} fontWeight={600}>Security:</Text> JWT-based authentication with role-based access control (Admin/User roles), secure credential management with encrypted AWS key storage, comprehensive input validation, and graceful error handling with structured audit logging.
            </Text>
            <Text fontSize={"16px"} fontWeight={400} lineHeight={"1.75"}>
              <Text as={"span"} fontWeight={600}>Performance:</Text> Asynchronous task processing with 5 concurrent workers and 20-item queue capacity, CORS optimization with 12-hour cache TTL, and request latency tracking for all API operations.
            </Text>
            <Text fontSize={"16px"} fontWeight={400} lineHeight={"1.75"}>
              <Text as={"span"} fontWeight={600}>Infrastructure:</Text> AWS-based deployment with support for all AWS regions, EC2 compute resources, EFS for backup storage, and automated credential validation. Containerized architecture ensures consistency between development and production environments.
            </Text>
          </Flex>
        </Flex>

        {/* Who Uses TRH Section */}
        <Flex
          flexDir={"column"}
          gap={"24px"}
          p={{ base: "30px", md: "45px" }}
          borderRadius={"15px"}
          border={"1px solid #E1E8ED"}
          bgColor={"#FFF"}
        >
          <Text
            fontSize={{ base: "24px", md: "30px" }}
            fontWeight={700}
            letterSpacing={"-0.9px"}
          >
            Who Uses TRH
          </Text>
          <Flex flexDir={"column"} gap={"12px"}>
            <Text fontSize={"15px"} fontWeight={400} lineHeight={"1.75"}>
              • <Text as={"span"} fontWeight={600}>DApp Developers:</Text> Building scalable applications with reduced transaction costs and improved throughput
            </Text>
            <Text fontSize={"15px"} fontWeight={400} lineHeight={"1.75"}>
              • <Text as={"span"} fontWeight={600}>Gaming Projects:</Text> Requiring high-throughput, low-latency infrastructure for gaming dApps with thousands of transactions
            </Text>
            <Text fontSize={"15px"} fontWeight={400} lineHeight={"1.75"}>
              • <Text as={"span"} fontWeight={600}>DeFi Protocols:</Text> Seeking to reduce gas costs by orders of magnitude through Layer 2 scaling
            </Text>
            <Text fontSize={"15px"} fontWeight={400} lineHeight={"1.75"}>
              • <Text as={"span"} fontWeight={600}>Enterprises:</Text> Deploying private or consortium chains with managed access control and governance
            </Text>
            <Text fontSize={"15px"} fontWeight={400} lineHeight={"1.75"}>
              • <Text as={"span"} fontWeight={600}>DAO Operators:</Text> Creating decentralized governance structures with TON staking and seigniorage rewards
            </Text>
            <Text fontSize={"15px"} fontWeight={400} lineHeight={"1.75"}>
              • <Text as={"span"} fontWeight={600}>Cross-Chain Builders:</Text> Developing multi-chain dApps using L2-L2 bridge capabilities
            </Text>
          </Flex>
        </Flex>

        {/* Getting Started Section */}
        <Flex
          flexDir={"column"}
          gap={"24px"}
          p={{ base: "30px", md: "45px" }}
          borderRadius={"15px"}
          border={"1px solid #E1E8ED"}
          bgColor={"#FFF"}
        >
          <Text
            fontSize={{ base: "24px", md: "30px" }}
            fontWeight={700}
            letterSpacing={"-0.9px"}
          >
            Getting Started
          </Text>
          <Flex flexDir={"column"} gap={"12px"}>
            <Text fontSize={"15px"} fontWeight={400} lineHeight={"1.75"}>
              1. Connect your wallet to the TRH platform
            </Text>
            <Text fontSize={"15px"} fontWeight={400} lineHeight={"1.75"}>
              2. Configure your rollup parameters (chain ID, network settings, performance tuning)
            </Text>
            <Text fontSize={"15px"} fontWeight={400} lineHeight={"1.75"}>
              3. Set up AWS credentials and select your deployment region
            </Text>
            <Text fontSize={"15px"} fontWeight={400} lineHeight={"1.75"}>
              4. Select integrations (Bridge, Explorer, Monitoring, Backup Management)
            </Text>
            <Text fontSize={"15px"} fontWeight={400} lineHeight={"1.75"}>
              5. Deploy your Thanos Stack with one click
            </Text>
            <Text fontSize={"15px"} fontWeight={400} lineHeight={"1.75"}>
              6. Monitor deployment progress in real-time with live logs
            </Text>
            <Text fontSize={"15px"} fontWeight={400} lineHeight={"1.75"}>
              7. Access your rollup infrastructure via provided URLs and download configuration files
            </Text>
          </Flex>
          <Flex gap={"15px"} mt={"18px"} flexWrap={"wrap"}>
            <Box
              as="button"
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-start"}
              gap={"10px"}
              px={"12px"}
              pr={"28px"}
              py={"13px"}
              borderRadius={"30px"}
              bgColor={"#0070ED"}
              color={"white"}
              fontSize={"15px"}
              fontWeight={600}
              cursor={"pointer"}
              border={"none"}
              position={"relative"}
              transition={"all 0.5s"}
              boxShadow={"5px 5px 10px rgba(0, 0, 0, 0.116)"}
              _hover={{
                bgColor: "#0060d1",
                "& svg": {
                  transform: "rotate(250deg)",
                },
              }}
              _active={{
                transform: "scale(0.97)",
              }}
              onClick={() => router.push("/discover#integration")}
            >
              <svg
                viewBox="0 0 512 512"
                height="20px"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  transition: "transform 1.5s",
                }}
              >
                <path
                  d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
                  fill="white"
                />
              </svg>
              Explore Integrations
            </Box>
            <Box
              as="button"
              px={"28px"}
              py={"13px"}
              borderRadius={"30px"}
              bgColor={"white"}
              color={"#0070ED"}
              fontSize={"15px"}
              fontWeight={600}
              cursor={"pointer"}
              border={"2px solid #0070ED"}
              onClick={() => window.open(USER_GUIDE_URL, "_blank")}
            >
              User Guide
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
