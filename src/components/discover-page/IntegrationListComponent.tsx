"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import { SubProductDetailType } from "@/types/products";
import { IntegrationComponent } from "./IntegrationComponent";
import { useRef, useEffect } from "react";

export const IntegrationListComponent: React.FC<{
  integrations: SubProductDetailType[];
}> = ({ integrations }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > 5 || (Math.abs(e.deltaY) > 5 && e.shiftKey)) {
        e.preventDefault();
        container.scrollLeft += e.deltaX || e.deltaY;
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <Flex flexDir={"column"} gap={"39px"} zIndex={100} id="integration" width={"100%"}>
      <Flex flexDir={"column"} gap={"10px"}>
        <Text
          fontSize={"30px"}
          fontWeight={700}
          lineHeight={"normal"}
          letterSpacing={"-0.9px"}
        >
          Integration
        </Text>
        <Text fontSize={"16px"} fontWeight={400} lineHeight={"20px"}>
          Integrate with other projects.
        </Text>
      </Flex>
      <Box
        ref={scrollRef}
        overflowX={"auto"}
        overflowY={"hidden"}
        pb={"10px"}
        mx={"-10px"}
        px={"10px"}
        css={{
          scrollBehavior: "smooth",
          "&::-webkit-scrollbar": {
            height: "6px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#f1f1f1",
            borderRadius: "3px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#ccc",
            borderRadius: "3px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#aaa",
          },
        }}
      >
        <Flex gap={"20px"} minW={"max-content"}>
          {integrations.map((integration) => (
            <Box key={integration.id} minW={{ base: "280px", md: "300px" }} maxW={"300px"}>
              <IntegrationComponent {...integration} />
            </Box>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};
