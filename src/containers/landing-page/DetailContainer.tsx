import BlockComponent from "@/components/landing-page/BlockComponet";
import ComponentCarouselComponent from "@/components/landing-page/ComponentCarouselComponent";
import EndingComponent from "@/components/landing-page/EndingComponent";
import KeyOfferingComponent from "@/components/landing-page/KeyOfferingComponent";
import PresetSection from "@/components/landing-page/PresetSection";
import { Flex } from "@chakra-ui/react";

export default function DetailContainer() {
  return (
    <Flex
      px={{ base: "19px", md: "30px", lg: "88px" }}
      py={"90px"}
      width={"100%"}
    >
      <Flex
        flexDir={"column"}
        gap={"150px"}
        maxW={"1440px"}
        mx={"auto"}
        width={"100%"}
      >
        <BlockComponent />
        <KeyOfferingComponent />
        <PresetSection />
        <ComponentCarouselComponent />
        <EndingComponent />
      </Flex>
    </Flex>
  );
}
