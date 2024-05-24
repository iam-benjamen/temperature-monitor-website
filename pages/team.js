import { Box, Divider, Heading, HStack } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Nav from "../components/NavBar";

const Team = () => {
  return (
    <Box minH={"100vh"}>
      <Nav />

      <Heading
        fontFamily={"monospace"}
        color={"darkblue"}
        textAlign={"center"}
        pt={"2rem"}
      >
        About Team
      </Heading>
      <Divider />

      {/* <Heading  fontSize={"2rem"} pt={"2rem"}>
        Ayoola Mayowa
      </Heading> */}
      <HStack></HStack>
      <Footer />
    </Box>
  );
};

export default Team;
