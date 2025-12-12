import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { SubProductDetailType } from "@/types/products";
import { IntegrationComponent } from "./IntegrationComponent";

export const IntegrationListComponent: React.FC<{
  integrations: SubProductDetailType[];
}> = ({ integrations }) => {
  return (
    <Flex flexDir={"column"} gap={"39px"} zIndex={100} id="integration">
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
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={"30px"}
      >
        {integrations.map((integration) => (
          <GridItem key={integration.id}>
            <IntegrationComponent {...integration} />
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
};
