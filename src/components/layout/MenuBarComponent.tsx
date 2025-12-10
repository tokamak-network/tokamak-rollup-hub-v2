"use client";

import { MENUBAR_ITEMS } from "@/consts/menubar";
import { Button, Flex, Text } from "@chakra-ui/react";
import MenuIcon from "@/assets/icon/menu.svg";
import CloseIcon from "@/assets/icon/close.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface MenuBarComponentProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}

export default function MenuBarComponent({
  isMenuOpen,
  setIsMenuOpen,
}: MenuBarComponentProps) {
  const router = useRouter();
  return (
    <>
      <Button
        display={{ base: "flex", md: !isMenuOpen ? "none" : "flex" }}
        cursor={"pointer"}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        position={isMenuOpen ? "absolute" : ""}
        top={22}
        right={22}
        bgColor={"transparent"}
        border={"none"}
      >
        <Image
          src={isMenuOpen ? CloseIcon : MenuIcon}
          alt="menu"
          width={35}
          height={36}
        />
      </Button>
      <Flex
        flexDir={isMenuOpen ? "column" : "row"}
        alignItems={"center"}
        justifyContent={"center"}
        width={isMenuOpen ? "100%" : ""}
        gap={isMenuOpen ? "39px" : "45px"}
        display={{ base: isMenuOpen ? "flex" : "none", md: "flex" }}
        position={"relative"}
      >
        {MENUBAR_ITEMS.map((item) => (
          <Flex
            key={item.label}
            alignItems={"center"}
            justifyContent={"center"}
            position={"relative"}
            gap={isMenuOpen ? "12px" : "8px"}
          >
            {item.isNew && (
              <Text
                fontSize={isMenuOpen ? "16px" : "11px"}
                fontWeight={700}
                color={"#FFFFFF"}
                bg={"#FF0000"}
                px={isMenuOpen ? "12px" : "8px"}
                py={isMenuOpen ? "5px" : "3px"}
                borderRadius={"16px"}
                textTransform={"uppercase"}
                letterSpacing={"0.5px"}
                lineHeight={"normal"}
              >
                NEW
              </Text>
            )}
            <Text
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              color={"#2E2E3A"}
              fontSize={isMenuOpen ? "30px" : "15px"}
              fontWeight={600}
              lineHeight={"normal"}
              textAlign={"center"}
              cursor={"pointer"}
              onClick={() => {
                if (item.href.includes("http")) {
                  window.open(item.href, "_blank");
                } else {
                  router.push(item.href);
                }
                setIsMenuOpen(false);
              }}
              _hover={{ color: "#0070ED" }}
              zIndex={3000}
            >
              {item.label}
            </Text>            
          </Flex>
        ))}
      </Flex>
    </>
  );
}
