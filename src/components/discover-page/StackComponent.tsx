"use client";
import { SubProductDetailType } from "@/types/products";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
export const StackComponent: React.FC<SubProductDetailType> = ({
  name,
  description,
  link,
  subCategory,
  image,
}) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Flex
      cursor={"pointer"}
      flexDir={"column"}
      justifyContent={"space-between"}
      alignItems={"flex-start"}
      width={"100%"}
      p={"30px 24px"}
      borderRadius={"15px"}
      border={"1px solid #C8D3DC"}
      background={"#FFF"}
      height={"246px"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => router.push(link ?? "")}
      position={"relative"}
    >
      <Flex flexDir={"column"} gap={"12px"}>
        <Text fontSize={"13px"} fontWeight={600} lineHeight={"normal"}>
          {subCategory}
        </Text>
        <Flex flexDir={"column"} gap={"9px"}>
          <Text
            fontSize={"24px"}
            fontWeight={700}
            lineHeight={"normal"}
            textOverflow={"ellipsis"}
          >
            {name}
          </Text>
          <Text
            fontSize={"14px"}
            fontWeight={400}
            lineHeight={"normal"}
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
            WebkitLineClamp={2}
          >
            {description}
          </Text>
        </Flex>
      </Flex>
      <Flex alignItems={"center"} gap={"9px"}>
        <BsArrowRightCircleFill
          size={"22px"}
          color={isHovered ? "#0070ED" : "#1C1C1C"}
        />
        <Text
          fontSize={"13px"}
          fontWeight={700}
          lineHeight={"normal"}
          color={isHovered ? "#0070ED" : "#1C1C1C"}
        >
          Find more
        </Text>
      </Flex>
      {image && (
        <Box
          position={"absolute"}
          bottom={0}
          right={0}
          width={"190px"}
          height={"124px"}
        >
          <Image
            src={isHovered ? `${image}-hover.svg` : `${image}.svg`}
            alt={name}
            width={190}
            height={124}
            style={{
              transition: "transform 0.1s ease",
            }}
          />
        </Box>
      )}
    </Flex>
  );
};
