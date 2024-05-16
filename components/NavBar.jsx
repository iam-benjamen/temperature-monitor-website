import { Box } from "@chakra-ui/react";
import Image from "next/image";
import logo from '../public/UI LOGO PNG.png'

const Nav = () => {
    return (
        <Box boxShadow={'lg'} display={"flex"} width={"100vw"} position={"fixed"} height={"7rem"}>
            <Box width={'5rem'}>
                <Image src={logo} />
            </Box>
        </Box>
    );
};

export default Nav;
