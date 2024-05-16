import { Box, Heading, VStack } from "@chakra-ui/react";
import Image from "next/image";
import logo from '../public/UI LOGO PNG.png'

const Nav = () => {
    return (
        <Box boxShadow={'lg'} display={"flex"} alignItems={'center'} width={"100vw"} position={"static"} zIndex={999} height={"7rem"}>
            <Box width={'7rem'}>
                <Image src={logo} />
            </Box>

            <VStack alignSelf={'center'} justifyContent={'center'}>
                <Heading textAlign={'center'} fontSize={"2rem"} fontFamily={"Roboto"} color={"darkblue"}>
                    Remote Temperature Monitor
                </Heading>

                {/* <Text fontSize={"1.5rem"}>Project by Ayoola Mayowa</Text> */}
            </VStack>
        </Box>
    );
};

export default Nav;
