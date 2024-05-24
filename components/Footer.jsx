import { Box, Text, VStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box display={"flex"} justifyContent={"center"} w={"100%"} bottom={0} position={'absolute'}>
      <VStack>
        <Text fontFamily={"monospace"} fontSize={"1.25REM"} fontWeight={700}>
          Copyright&copy; 2024
        </Text>
        <Text fontFamily={"monospace"} fontSize={"1.25REM"} fontWeight={700}>
          Ayoola Mayowa & Adegoke Benjamin
        </Text>
      </VStack>
    </Box>
  );
};

export default Footer;
