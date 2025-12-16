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
      pt={{ base: "88px", md: "108px", lg: "148px" }}
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
              Tokamak
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
            An all-in-one platform to seamlessly deploy and manage rollup chains and participate in the Tokamak ecosystem.
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
            Tokamak Rollup Hub (TRH) is an end-to-end platform designed to simplify the deployment and management of Layer 2 rollup chains. It enables developers and organizations to quickly launch custom L2 appchains without the overhead of manual infrastructure setup.
          </Text>
          <Text fontSize={"16px"} fontWeight={400} lineHeight={"1.75"}>
            By providing automated deployment workflows, pre-integrated components, and robust monitoring tools, Tokamak Rollup Hub removes the complexity of building and operating production-ready rollups.
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
                Deploy a complete Thanos Stack using Platform and SDK automation through a guided four-step workflow. Easily configure key network parameters such as chain ID, gas limits, batch submission frequency, and consensus settings. The current release supports testnet deployments with real-time progress tracking and detailed logs. Optimize performance with configurable L2 block time (default: 2s), output root frequency (default: 240s), and challenge period parameters.
              </Text>
            </Flex>

            {/* Feature 2 */}
            <Flex flexDir={"column"} gap={"9px"}>
              <Text fontSize={"20px"} fontWeight={700} letterSpacing={"-0.6px"}>
                Essential Integrations
              </Text>
              <Text fontSize={"15px"} fontWeight={400} lineHeight={"1.75"}>
                <Text as={"span"} fontWeight={600}>Thanos Bridge:</Text> Seamless asset transfers between L1 and L2 with support for ETH, TON, USDC, and USDT using a lightweight bridge architecture.
                <br />
                <Text as={"span"} fontWeight={600}>Thanos Explorer:</Text> A Blockscout-powered blockchain explorer offering real-time transaction and smart contract visibility.
                <br />
                <Text as={"span"} fontWeight={600}>Monitoring Tool:</Text> Integrated Grafana and Prometheus stack with customizable alerts delivered via Email and Telegram.
                <br />
                <Text as={"span"} fontWeight={600}>System Pulse:</Text> Real-time service health and availability monitoring with instant downtime notifications.
                <br />
                <Text as={"span"} fontWeight={600}>Staking/DAO:</Text> Register your rollup as a staking/DAO candidate to participate in Tokamak Network governance. Earn seigniorage rewards driven by L2 growth metrics such as transaction volume and network activity. Participate in the ecosystem by staking TON tokens, with a minimum requirement of 1000.1 TON.
              </Text>
            </Flex>

            {/* Feature 3 */}
            <Flex flexDir={"column"} gap={"9px"}>
              <Text fontSize={"20px"} fontWeight={700} letterSpacing={"-0.6px"}>
                Infrastructure Management
              </Text>
              <Text fontSize={"15px"} fontWeight={400} lineHeight={"1.75"}>
                Run deployments asynchronously with status tracking. Access real-time logs with downloadable files for effective troubleshooting. Manage the full lifecycle of integrations with install, uninstall, retry, and cancel actions. Control stack operations including resume, stop, and post-deployment network parameter updates. Securely store metadata such as credentials, configurations, and rollup files.
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
          <Text fontSize={"16px"} fontWeight={400} lineHeight={"1.75"}>
            TRH is designed to provide a fast, secure, and scalable Layer 2 deployment platform built on a robust technical foundation designed for enterprise-grade reliability and performance. The backend utilizes Go with the Gin framework for high-performance API handling, PostgreSQL with connection pooling for optimized data management, and Docker containerization for consistent deployments across environments.
          </Text>

          <Flex flexDir={"column"} gap={"24px"}>
            {/* Subsection 1 */}
            <Flex flexDir={"column"} gap={"9px"}>
              <Text fontSize={"20px"} fontWeight={700} letterSpacing={"-0.6px"}>
                Efficient Performance & Scalability
              </Text>
              <Text fontSize={"15px"} fontWeight={400} lineHeight={"1.75"}>
                <Text as={"span"} fontWeight={600}>Asynchronous Task Processing:</Text> Long-running operations such as chain deployments and integration installations are handled in the background by a dedicated worker pool. With 5 concurrent workers processing up to 20 queued tasks, users can continue their work without waiting for operations to complete.
              </Text>
              <Text fontSize={"15px"} fontWeight={400} lineHeight={"1.75"}>
                <Text as={"span"} fontWeight={600}>Performance Optimization:</Text> The system implements intelligent caching with a 12-hour TTL for repeated requests, significantly reducing response times. Real-time latency tracking monitors every API request, enabling continuous performance improvements. Database queries are accelerated through strategic indexing, ensuring fast retrieval even with large datasets.
              </Text>
              <Text fontSize={"15px"} fontWeight={400} lineHeight={"1.75"}>
                <Text as={"span"} fontWeight={600}>Operational Stability:</Text> Production-grade timeout configurations (15-second read/write, 60-second idle) prevent resource exhaustion, while graceful shutdown mechanisms ensure clean service termination and automatic recovery from failures.
              </Text>
            </Flex>

            {/* Subsection 2 */}
            <Flex flexDir={"column"} gap={"9px"}>
              <Text fontSize={"20px"} fontWeight={700} letterSpacing={"-0.6px"}>
                Enterprise-Grade Security
              </Text>
              <Text fontSize={"15px"} fontWeight={400} lineHeight={"1.75"}>
                <Text as={"span"} fontWeight={600}>Authentication & Authorization:</Text> Token-based authentication (24-hour validity) provides secure user sessions, while role-based access control (RBAC) enforces strict separation between Administrator and User privileges.
              </Text>
              <Text fontSize={"15px"} fontWeight={400} lineHeight={"1.75"}>
                <Text as={"span"} fontWeight={600}>Data Protection:</Text> Passwords are cryptographically hashed using bcrypt, making them irreversible and resistant to rainbow table attacks. All user inputs undergo strict validation, with automated format verification for emails, AWS credentials, and other sensitive data to prevent injection attacks and malformed requests.
              </Text>
              <Text fontSize={"15px"} fontWeight={400} lineHeight={"1.75"}>
                <Text as={"span"} fontWeight={600}>Audit Logging:</Text> Comprehensive request logging captures who performed what action and when, including request methods, processing times, IP addresses, and response statuses. This detailed audit trail facilitates rapid troubleshooting and security incident investigation.
              </Text>
            </Flex>

            {/* Subsection 3 */}
            <Flex flexDir={"column"} gap={"9px"}>
              <Text fontSize={"20px"} fontWeight={700} letterSpacing={"-0.6px"}>
                AWS Cloud Integration
              </Text>
              <Text fontSize={"15px"} fontWeight={400} lineHeight={"1.75"}>
                <Text as={"span"} fontWeight={600}>Global Deployment:</Text> TRH supports deployment across all AWS regions worldwide. Upon registering AWS credentials, the system automatically queries available regions and provisions necessary resources including EC2 compute instances and EFS storage in the selected region.
              </Text>
              <Text fontSize={"15px"} fontWeight={400} lineHeight={"1.75"}>
                <Text as={"span"} fontWeight={600}>Environment Consistency:</Text> Docker containerization guarantees identical behavior between development and production environments. Code tested on a developer&apos;s local machine will execute identically in AWS cloud infrastructure, eliminating environment-specific bugs.
              </Text>
              <Text fontSize={"15px"} fontWeight={400} lineHeight={"1.75"}>
                <Text as={"span"} fontWeight={600}>Automated Validation:</Text> AWS credentials undergo automatic verification before storage, preventing deployment failures caused by invalid or expired credentials. This proactive validation ensures smooth operations and reduces troubleshooting time.
              </Text>
            </Flex>
          </Flex>
        </Flex>

        {/* Who Can Use Section */}
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
            Who Can Use Tokamak Rollup Hub?
          </Text>
          <Flex flexDir={"column"} gap={"12px"}>
            <Text fontSize={"15px"} fontWeight={400} lineHeight={"1.75"}>
              • <Text as={"span"} fontWeight={600}>Chain Operators:</Text> Deploy fast, production-ready optimistic rollups and manage them through open-source infrastructure tools
            </Text>
            <Text fontSize={"15px"} fontWeight={400} lineHeight={"1.75"}>
              • <Text as={"span"} fontWeight={600}>DApp Developers:</Text> Build scalable applications with lower fees and higher transaction throughput
            </Text>
            <Text fontSize={"15px"} fontWeight={400} lineHeight={"1.75"}>
              • <Text as={"span"} fontWeight={600}>DeFi Protocols:</Text> Significantly reduce gas costs using Layer 2 scaling
            </Text>
            <Text fontSize={"15px"} fontWeight={400} lineHeight={"1.75"}>
              • <Text as={"span"} fontWeight={600}>DAO Operators:</Text> Set up decentralized governance with TON staking and receive seigniorage incentives
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
              1. Setup the Tokamak Rollup Hub platform
            </Text>
            <Text fontSize={"15px"} fontWeight={400} lineHeight={"1.75"}>
              2. Configure your rollup parameters (chain ID, network settings, performance tuning)
            </Text>
            <Text fontSize={"15px"} fontWeight={400} lineHeight={"1.75"}>
              3. Set up AWS credentials and select your deployment region
            </Text>
            <Text fontSize={"15px"} fontWeight={400} lineHeight={"1.75"}>
              4. Deploy your Thanos Stack with one click
            </Text>
            <Text fontSize={"15px"} fontWeight={400} lineHeight={"1.75"}>
              5. Monitor deployment progress in real-time with live logs
            </Text>
            <Text fontSize={"15px"} fontWeight={400} lineHeight={"1.75"}>
              6. Access your rollup infrastructure via provided URLs and download configuration files
            </Text>
            <Text fontSize={"15px"} fontWeight={400} lineHeight={"1.75"}>
              7. Try out the integrations (Bridge, Explorer, Monitoring, Uptime Kuma)
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
