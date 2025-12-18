"use client";
import { IntegrationListComponent } from "@/components/discover-page/IntegrationListComponent";
import { StackListComponent } from "@/components/discover-page/StackListComponent";
import { SUB_PRODUCT_CATEGORIES } from "@/consts/components";
import { Flex, HStack } from "@chakra-ui/react";
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "@/components/ui/pagination";
import { useEffect, useState } from "react";
import { SubProductDetailType } from "@/types/products";
import { useBreakpoint } from "@/hooks/breakpoint";
export const ProductListContainer: React.FC<{
  category: "all" | "stack" | "integration";
  item: string | null;
}> = ({ category, item }) => {
  const [integrationsToShow, setIntegrationsToShow] = useState<
    SubProductDetailType[]
  >([]);
  const { isMobile } = useBreakpoint();
  const [stacksToShow, setStacksToShow] = useState<SubProductDetailType[]>([]);
  const [currentIntegrationPage, setCurrentIntegrationPage] = useState(1);
  const [currentStackPage, setCurrentStackPage] = useState(1);

  const integrations = SUB_PRODUCT_CATEGORIES["integration"];
  const stacks = SUB_PRODUCT_CATEGORIES["stack"];
  const integrationCountPerPage = isMobile ? 3 : 3;
  const stackCountPerPage = category === "all" ? 2 : 6;

  // Calculate filtered lists
  const filteredIntegrations = item
    ? integrations.filter((integration) => integration.subCategory === item)
    : integrations;
  const filteredStacks = item
    ? stacks.filter((stack) => stack.subCategory === item)
    : stacks;

  useEffect(() => {
    setIntegrationsToShow(
      filteredIntegrations.slice(
        (currentIntegrationPage - 1) * integrationCountPerPage,
        currentIntegrationPage * integrationCountPerPage
      )
    );
  }, [item, currentIntegrationPage, integrationCountPerPage, integrations]);

  useEffect(() => {
    setStacksToShow(
      filteredStacks.slice(
        (currentStackPage - 1) * stackCountPerPage,
        currentStackPage * stackCountPerPage
      )
    );
  }, [item, currentStackPage, stackCountPerPage, stacks]);

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentIntegrationPage(1);
    setCurrentStackPage(1);
  }, [item]);
  return (
    <Flex
      width={"100%"}
      flexDirection={"column"}
      gap={"39px"}
      alignItems={"center"}
    >
      <Flex flexDir={"column"} gap={"90px"} width={"100%"}>
        {(category === "all" || category === "stack") && (
          <Flex
            flexDir={"column"}
            gap={"39px"}
            alignItems={"center"}
            width={"100%"}
          >
            <StackListComponent category={category} stacks={stacksToShow} />
            {category === "stack" && (
              <PaginationRoot
                count={filteredStacks.length}
                pageSize={stackCountPerPage}
                page={currentStackPage}
                onPageChange={(page) => {
                  setCurrentStackPage(page.page);
                }}
              >
                <HStack>
                  <PaginationPrevTrigger />
                  <PaginationItems />
                  <PaginationNextTrigger />
                </HStack>
              </PaginationRoot>
            )}
          </Flex>
        )}
        {(category === "all" || category === "integration") && (
          <Flex flexDir={"column"} gap={"39px"} alignItems={"center"}>
            <IntegrationListComponent integrations={integrationsToShow} />
            <PaginationRoot
              count={filteredIntegrations.length}
              pageSize={integrationCountPerPage}
              page={currentIntegrationPage}
              onPageChange={(page) => {
                setCurrentIntegrationPage(page.page);
              }}
            >
              <HStack>
                <PaginationPrevTrigger />
                <PaginationItems />
                <PaginationNextTrigger />
              </HStack>
            </PaginationRoot>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};
