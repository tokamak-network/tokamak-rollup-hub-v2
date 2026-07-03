"use client";
import { Flex, Text } from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Carousel from "react-multi-carousel";
import CardComponent from "./CardComponent";
import "react-multi-carousel/lib/styles.css";
import { useRef, useEffect } from "react";

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
      iconId={"thanos-bridge"}
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
          accessible to your network&apos;s users.
        </>
      }
      featured={true}
      link={"/discover/thanos-explorer"}
      iconId={"thanos-explorer"}
    />
  );
};

const CrossTradeComponent = () => {
  return (
    <CardComponent
      title={"Cross Trade"}
      description={
        <>
          <Text as={"span"} fontWeight={700}>
            Cross Trade
          </Text>{" "}
          enables fast, decentralized withdrawals between L2 and L1 chains, as
          well as L2-L2 transfers. Included in the DeFi and Full presets.
        </>
      }
      featured={true}
      link={"/discover/cross-trade"}
      iconId={"cross-trade"}
    />
  );
};

const StakingDAOComponent = () => {
  return (
    <CardComponent
      title={"Staking / DAO Candidate Registration"}
      description={
        <>
          Register your chain as a{" "}
          <Text as={"span"} fontWeight={700}>
            DAO candidate
          </Text>{" "}
          in the Tokamak Network ecosystem to earn seigniorage rewards
          proportional to the L2 growth.
        </>
      }
      featured={true}
      link={"/discover/dao-candidate"}
      iconId={"dao-candidate"}
    />
  );
};

const RandomNumberGenerationComponent = () => {
  return (
    <CardComponent
      title={"Random Number Generation"}
      description={
        <>
          <Text as={"span"} fontWeight={700}>
            Random Number Generation
          </Text>{" "}
          brings manipulation-resistant on-chain randomness to your chain via
          the Tokamak Distributed Random Beacon (DRB). Included in the Gaming
          and Full presets.
        </>
      }
      featured={true}
      link={"/discover/rng"}
      iconId={"rng"}
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
      iconId={"monitoring-tool"}
    />
  );
};

const UptimeKumaComponent = () => {
  return (
    <CardComponent
      title={"System Pulse"}
      description={
        <>
          <Text as={"span"} fontWeight={700}>
            System Pulse
          </Text>{" "}
          (powered by Uptime Kuma) provides real-time visibility into platform health and service availability. Monitor uptime and get instant notifications.
        </>
      }
      featured={true}
      link={"/discover/uptime-kuma"}
      iconId={"uptime-kuma"}
    />
  );
};

const AccountAbstractionComponent = () => {
  return (
    <CardComponent
      title={"Account Abstraction"}
      description={
        <>
          <Text as={"span"} fontWeight={700}>
            Account Abstraction
          </Text>{" "}
          (ERC-4337) with a Multi-Token Paymaster lets your users pay gas in
          tokens other than the native TON. Built into every rollup across all
          presets.
        </>
      }
      featured={true}
      link={"/discover/account-abstraction"}
      iconId={"account-abstraction"}
    />
  );
};

export default function ComponentCarouselComponent() {
  const carouselRef = useRef<Carousel>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isScrolling = false;
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey) {
        e.preventDefault();
        if (isScrolling) return;
        isScrolling = true;

        const delta = e.deltaX || e.deltaY;
        if (delta > 0) {
          carouselRef.current?.next(1);
        } else {
          carouselRef.current?.previous(1);
        }

        setTimeout(() => {
          isScrolling = false;
        }, 300);
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <Flex flexDir={"column"} gap={"45px"} ref={containerRef}>
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
        swipeable={true}
        draggable={true}
        responsive={responsive}
        transitionDuration={300}
        itemClass="carousel-item"
        containerClass="carousel-container"
        infinite={true}
        arrows={false}
        rtl={false}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
      >
        <ThanosBridgeComponent />
        <BlockExplorerComponent />
        <MonitoringToolComponent />
        <UptimeKumaComponent />
        <StakingDAOComponent />
        <AccountAbstractionComponent />
        <CrossTradeComponent />
        <RandomNumberGenerationComponent />
      </Carousel>
    </Flex>
  );
}
