"use client";
import { SubProductDetailType } from "@/types/products";
import { Button, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { IntegrationLogo } from "../ui/integration-logo";

export const IntegrationComponent: React.FC<SubProductDetailType> = ({
  id,
  name,
  description,
  link,
  subCategory,
}) => {
  const router = useRouter();
  return (
    <Flex
      flexDirection={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"100%"}
      padding={"24px 20px"}
      borderRadius={"15px"}
      border={"1px solid #E1E8ED"}
      bgColor={"#FFF"}
      height={"100%"}
      minHeight={"320px"}
    >
      <Flex flexDirection={"column"} gap={"15px"} alignItems={"center"}>
        <IntegrationLogo name={id} width={80} height={80} />
        <Flex flexDirection={"column"} alignItems={"center"}>
          <Text
            fontSize={"16px"}
            fontWeight={700}
            lineHeight={"normal"}
            letterSpacing={"-0.48px"}
          >
            {name}
          </Text>
          <Text
            fontSize={"12px"}
            fontWeight={500}
            lineHeight={"20px"}
            color={"#252525"}
          >
            {subCategory}
          </Text>
        </Flex>
      </Flex>
      <Text
        fontSize={"14px"}
        fontWeight={400}
        lineHeight={"24px"}
        textAlign={"center"}
        color={"#252525"}
        style={{
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
        WebkitLineClamp={3}
      >
        {description}
      </Text>
      <Button
        width={"100%"}
        p={"9px 15px"}
        borderRadius={"17.5px"}
        border={"1px solid #DFE4EE"}
        bgColor={"rgba(255, 255, 255, 0.25)"}
        fontSize={"14px"}
        fontWeight={600}
        lineHeight={"normal"}
        color={"#1C1C1C"}
        _hover={{
          bgColor: "#1C1C1C",
          color: "#FFF",
          border: "1px solid transparent",
        }}
        cursor={"pointer"}
        fontFamily={"Proxima Nova"}
        onClick={() => router.push(link || "")}
      >
        Find more
      </Button>
    </Flex>
  );
};
