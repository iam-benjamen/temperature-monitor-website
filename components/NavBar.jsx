import {
  Box,
  Heading,
  VStack,
  HStack,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Image from "next/image";
import logo from "../public/UI LOGO PNG.png";
import { useRef } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const router = useRouter();

  return (
    <Box
      justifyContent={"space-between"}
      boxShadow={"lg"}
      display={"flex"}
      alignItems={"center"}
      width={"100%"}
      position={"static"}
      zIndex={999}
      height={"7rem"}
    >
      <HStack>
        <Box width={"7rem"} cursor={"pointer"} onClick={() => router.push("/")}>
          <Image src={logo} />
        </Box>

        <VStack alignSelf={"center"} justifyContent={"center"}>
          <Heading
            textAlign={"center"}
            fontSize={"2rem"}
            fontFamily={"monospace"}
            color={"darkblue"}
          >
            Remote Temperature Monitor
          </Heading>
        </VStack>
      </HStack>

      <>
        <HamburgerIcon
          w={"3rem"}
          h={"2.25rem"}
          cursor={"pointer"}
          fontWeight={700}
          ref={btnRef}
          onClick={onOpen}
        />

        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader></DrawerHeader>

            <DrawerBody>
              <VStack gap={"3rem"}>
                <Link href={"/"}>
                  <Text
                    fontFamily={"monospace"}
                    color={"darkblue"}
                    fontWeight={700}
                    fontSize={"1.5rem"}
                  >
                    Home
                  </Text>
                </Link>
                <Link href={"/history"}>
                  <Text
                    fontFamily={"monospace"}
                    color={"darkblue"}
                    fontWeight={700}
                    fontSize={"1.5rem"}
                  >
                    History
                  </Text>
                </Link>
                <Link href={"/project"}>
                  <Text
                    fontFamily={"monospace"}
                    color={"darkblue"}
                    fontWeight={700}
                    fontSize={"1.5rem"}
                  >
                    About Project
                  </Text>
                </Link>
                <Link href={"/team"}>
                  <Text
                    fontFamily={"monospace"}
                    color={"darkblue"}
                    fontWeight={700}
                    fontSize={"1.5rem"}
                  >
                    About Team
                  </Text>
                </Link>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    </Box>
  );
};

export default Nav;
