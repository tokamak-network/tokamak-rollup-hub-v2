import { Flex, Text } from "@chakra-ui/react";
import GithubIcon from "@/assets/icon/github.svg";
import TelegramIcon from "@/assets/icon/telegram.svg";
import DiscordIcon from "@/assets/icon/discord.svg";
import TwitterIcon from "@/assets/icon/twitter.svg";
import MediumIcon from "@/assets/icon/medium.svg";
// import YoutubeIcon from "@/assets/icon/youtube.svg";
import Image from "next/image";
import Link from "next/link";
import {
  DISCORD_URL,
  GITHUB_URL,
  MEDIUM_URL,
  TELEGRAM_URL,
  TWITTER_URL,
  // YOUTUBE_URL,
} from "@/consts/socials";

export default function Footer() {
  return (
    <Flex px={"30px"} py={"24px"} background={"#FAFBFC"}>
      <Flex
        width={"100%"}
        gap={"18px"}
        alignItems={"center"}
        flexDir={{ base: "column", md: "row" }}
      >
        <Text
          fontFamily={"Open Sans"}
          fontSize={"11px"}
          fontWeight={400}
          letterSpacing={"0.55px"}
          lineHeight={"normal"}
          color={"#999"}
        >
          ©2025 
          <Text as={"span"} color={"#1C1C1C"}>
            Tokamak Rollup Hub
          </Text>{" "}
          <Text as={"span"} display={{ base: "none", md: "inline" }}>
            All Rights Reserved.
          </Text>
        </Text>
        <Flex gap={"9px"} alignItems={"center"} justifyContent={"center"}>
          <Link href={MEDIUM_URL} target="_blank" style={{ height: "14px" }}>
            <Image src={MediumIcon} alt="medium" />
          </Link>
          <Link href={TWITTER_URL} target="_blank" style={{ height: "14px" }}>
            <Image src={TwitterIcon} alt="twitter" />
          </Link>
          <Link href={GITHUB_URL} target="_blank" style={{ height: "14px" }}>
            <Image src={GithubIcon} alt="github" />
          </Link>
          {/* <Link href={YOUTUBE_URL} target="_blank" style={{ height: "14px" }}>
            <Image src={YoutubeIcon} alt="youtube" />
          </Link> */}
          <Link href={DISCORD_URL} target="_blank" style={{ height: "14px" }}>
            <Image src={DiscordIcon} alt="discord" />
          </Link>
          <Link href={TELEGRAM_URL} target="_blank" style={{ height: "14px" }}>
            <Image src={TelegramIcon} alt="telegram" />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
