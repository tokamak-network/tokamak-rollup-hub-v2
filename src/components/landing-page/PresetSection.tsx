import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { IntegrationLogo } from "@/components/ui/integration-logo";
import { Tooltip } from "@/components/ui/tooltip";
import { MODULE_LABELS, PRESET_LIST, PRESET_SECTION } from "@/consts/presets";
import { PLATFORM_GUIDE_URL } from "@/consts/urls";

export default function PresetSection() {
  return (
    <Flex flexDir={"column"} gap={"45px"} justifyContent={"center"}>
      <Flex flexDir={"column"} gap={"15px"}>
        <Text
          width={"100%"}
          fontSize={{ base: "42px", md: "54px" }}
          fontWeight={700}
          lineHeight={"normal"}
          letterSpacing={"-1.62px"}
        >
          {PRESET_SECTION.title}
        </Text>
        <Text
          color={"#252525"}
          fontSize={"16px"}
          fontWeight={400}
          lineHeight={"22px"}
          maxW={"760px"}
        >
          {PRESET_SECTION.description}
        </Text>
      </Flex>

      <Flex
        gap={"24px"}
        alignItems={"stretch"}
        flexDir={{ base: "column", lg: "row" }}
      >
        {PRESET_LIST.map((preset) => (
          <Flex
            key={preset.id}
            flex={1}
            flexDir={"column"}
            gap={"18px"}
            p={"24px"}
            border={"1px solid #C8D3DC"}
            borderRadius={"15px"}
            bgColor={"#FFF"}
          >
            <Flex alignItems={"center"} justifyContent={"space-between"} gap={"12px"}>
              <Text
                fontSize={"24px"}
                fontWeight={700}
                lineHeight={"normal"}
                letterSpacing={"-0.72px"}
                color={preset.accent}
              >
                {preset.name}
              </Text>
              <Text
                as={"span"}
                fontSize={"12px"}
                fontWeight={600}
                color={preset.accent}
                bgColor={`${preset.accent}14`}
                px={"10px"}
                py={"4px"}
                borderRadius={"999px"}
                whiteSpace={"nowrap"}
              >
                {preset.deployTime}
              </Text>
            </Flex>

            <Text
              fontSize={"14px"}
              fontWeight={500}
              lineHeight={"20px"}
              color={"#252525"}
              minH={{ base: "auto", lg: "40px" }}
            >
              {preset.tagline}
            </Text>

            <Box w={"100%"} h={"1px"} bgColor={"#E1E8ED"} />

            <Flex flexDir={"column"} gap={"10px"}>
              <Text
                fontSize={"12px"}
                fontWeight={600}
                letterSpacing={"0.5px"}
                textTransform={"uppercase"}
                color={"#9CA3AF"}
              >
                Includes
              </Text>
              <Flex gap={"8px"} flexWrap={"wrap"}>
                {preset.moduleIcons.map((icon) => {
                  const label = MODULE_LABELS[icon] ?? icon;
                  return (
                    <Tooltip
                      key={icon}
                      content={label}
                      openDelay={100}
                      positioning={{ placement: "top", gutter: 8 }}
                      contentProps={{
                        bg: "#1C1C1C",
                        color: "white",
                        px: "10px",
                        py: "6px",
                        borderRadius: "6px",
                        fontSize: "12px",
                        fontWeight: 600,
                        boxShadow: "0 4px 12px rgba(0,0,0,0.18)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <Flex
                        aria-label={label}
                        alignItems={"center"}
                        justifyContent={"center"}
                        w={"36px"}
                        h={"36px"}
                        borderRadius={"9px"}
                        border={"1px solid #E1E8ED"}
                        bgColor={"#FAFBFC"}
                      >
                        <IntegrationLogo name={icon} width={22} height={22} />
                      </Flex>
                    </Tooltip>
                  );
                })}
              </Flex>
              <Text
                fontSize={"12px"}
                fontWeight={400}
                lineHeight={"17px"}
                color={"#6B7280"}
              >
                {preset.extras}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Flex>

      <Link
        href={PLATFORM_GUIDE_URL}
        target="_blank"
        rel="noopener noreferrer"
        alignSelf={"flex-start"}
        fontSize={"16px"}
        fontWeight={600}
        color={"#0070ED"}
        _hover={{ textDecoration: "underline" }}
      >
        Deploy with a preset →
      </Link>
    </Flex>
  );
}
