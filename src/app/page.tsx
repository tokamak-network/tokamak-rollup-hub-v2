import TitleContainer from "@/containers/landing-page/TitleContainer";
import { Flex } from "@chakra-ui/react";
import SolarContainer from "@/containers/landing-page/SolarContainer";
import DetailContainer from "@/containers/landing-page/DetailContainer";
import { getLatestPlatformRelease } from "@/lib/platform";

export default async function Home() {
  const release = await getLatestPlatformRelease();

  return (
    <Flex
      position={"relative"}
      className="page-section"
      overflow={"hidden"}
      flexDir={"column"}
      backgroundColor={"#FAFBFC"}
    >
      <SolarContainer />
      <TitleContainer release={release} />
      <DetailContainer />
    </Flex>
  );
}
