"use client";
import { Flex, Text } from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Carousel from "react-multi-carousel";
import CardComponent from "./CardComponent";
import "react-multi-carousel/lib/styles.css";
import { useRef } from "react";
import Link from "next/link";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1920 },
    items: 3,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 1920, min: 1200 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1200, min: 800 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 800, min: 360 },
    items: 1,
    slidesToSlide: 1,
  },
  base: {
    breakpoint: { max: 360, min: 0 },
    items: 1,
  },
};

const ThanosBridgeComponent = () => {
  return (
    <CardComponent
      title={"Thanos Bridge"}
      description={
        <>
          <Text as={"span"} fontWeight={700}>
            Thanos Bridge
          </Text>{" "}
          allows users to transfer assets between your deployed chain and L1. It
          supports a number of assets including TON, ETH, USDC and integrates
          quickly for seamless usability.
        </>
      }
      featured={true}
      link={"/discover/thanos-bridge"}
    />
  );
};

const BlockExplorerComponent = () => {
  return (
    <CardComponent
      title={"Thanos Explorer"}
      description={
        <>
          Easily deploy an explorer for your chain with our SDK and make it
          accessible to your network’s users.
        </>
      }
      featured={true}
      link={"/discover/thanos-explorer"}
    />
  );
};

const CrossTradeComponent = () => {
  return (
    <CardComponent
      title={"Cross Trade (Coming Soon)"}
      description={
        <>
          <Text as={"span"} fontWeight={700}>
            Cross Trade
          </Text>{" "}
          enables fast, decentralized withdrawals between L2 and L1 chains, as
          well as L2-L2 transfers. Learn more{" "}
          <Link
            href={
              "https://ethresear.ch/t/canonical-cross-chain-swap-fast-and-decentralized-settlement-for-cross-chain-swap-using-canonical-native-l1-l2-messaging/21638/3"
            }
            target="_blank"
          >
            <Text as={"span"} fontWeight={500} textDecoration={"underline"}>
              here
            </Text>
          </Link>
        </>
      }
      featured={false}
    />
  );
};

const EarnTONComponent = () => {
  return (
    <CardComponent
      title={"Earn TON as Reward (Coming Soon)"}
      description={
        <>
          Register your chain as a{" "}
          <Text as={"span"} fontWeight={700}>
            DAO candidate
          </Text>{" "}
          in the Tokamak Network ecosystem to earn seigniorage rewards
          proportional to the L2 growth. Learn more{" "}
          <Link
            href={
              "https://github.com/tokamak-network/papers/blob/master/cryptoeconomics/tokamak-cryptoeconomics-en.md#222-ton-staking-v2"
            }
            target="_blank"
          >
            <Text as={"span"} fontWeight={500} textDecoration={"underline"}>
              here
            </Text>
          </Link>
        </>
      }
      featured={false}
    />
  );
};

const RandomNumberGenerationComponent = () => {
  return (
    <CardComponent
      title={"Random Number Generation (Coming Soon)"}
      description={
        <>
          <Text as={"span"} fontWeight={700}>
            Random Number Generation
          </Text>{" "}
          Integrate random number generation into your chain with our RNG
          project. Learn more{" "}
          <Link
            href={"https://github.com/tokamak-network/Randomness-Beacon"}
            target="_blank"
          >
            <Text as={"span"} fontWeight={500} textDecoration={"underline"}>
              here
            </Text>
          </Link>
        </>
      }
      featured={false}
    />
  );
};

const MonitoringToolComponent = () => {
  return (
    <CardComponent
      title={"Monitoring Tool"}
      description={
        <>
          Comprehensive monitoring and analytics for your rollup. Track system performance, set up alerts, and gain insights into your network&apos;s health.
        </>
      }
      featured={true}
      link={"/discover/monitoring-tool"}
    />
  );
};

const UptimeKumaComponent = () => {
  return (
    <CardComponent
      title={"Uptime Kuma"}
      description={
        <>
          <Text as={"span"} fontWeight={700}>
            System Pulse
          </Text>{" "}
          provides real-time visibility into platform health and service availability. Monitor uptime and get instant notifications.
        </>
      }
      featured={true}
      link={"/discover/uptime-kuma"}
    />
  );
};

export default function ComponentCarouselComponent() {
  const carouselRef = useRef<Carousel>(null);
  return (
    <Flex flexDir={"column"} gap={"45px"}>
      <Flex
        gap={"24px"}
        alignItems={{ base: "flex-start", md: "center" }}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Text
          fontSize={{ base: "42px", md: "54px" }}
          fontWeight={700}
          lineHeight={"normal"}
          letterSpacing={"-1.62px"}
        >
          Key Integrations
        </Text>
        <Flex>
          <IoIosArrowBack
            className="arrow-icon"
            onClick={() => {
              const nextSlide =
                (carouselRef.current?.state.currentSlide ?? 0) - 1;
              carouselRef.current?.goToSlide(nextSlide);
            }}
          />
          <IoIosArrowForward
            className="arrow-icon"
            onClick={() => {
              const nextSlide =
                (carouselRef.current?.state.currentSlide ?? 0) + 1;
              carouselRef.current?.goToSlide(nextSlide);
            }}
          />
        </Flex>
      </Flex>
      <Carousel
        ref={carouselRef}
        swipeable={false}
        draggable={false}
        responsive={responsive}
        transitionDuration={500}
        itemClass="carousel-item"
        containerClass="carousel-container"
        infinite={true}
        arrows={false}
        rtl={false}
        autoPlay={true}
        autoPlaySpeed={5000}
      >
        <ThanosBridgeComponent />
        <BlockExplorerComponent />
        <MonitoringToolComponent />
        <UptimeKumaComponent />
        <EarnTONComponent />
        <CrossTradeComponent />
        <RandomNumberGenerationComponent />
      </Carousel>
    </Flex>
  );
}
