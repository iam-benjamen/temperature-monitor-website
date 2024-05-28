import { Box, Divider, Heading, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import mayowa from "../public/mayowa.jpg";
import ben from "../public/benjamin.jpg";

import lecturer1 from "../public/Michael Obaro Dr.png";
import lecturer2 from "../public/Prof Osita Anyaeche.png";
const Team = () => {
  return (
    <Box>
      <Heading
        fontFamily={"monospace"}
        color={"darkblue"}
        textAlign={"center"}
        pt={"2rem"}
      >
        About Team
      </Heading>
      <Divider />

      <HStack w={"100%"} gap={"2rem"} justifyContent={"center"} pt={"5rem"}>
        <Box w={"max-content"} border={"1px solid darkblue"}>
          <Image src={mayowa} />
          <Text textAlign={"center"} color={"darkblue"} fontSize={"1.25rem"}>
            AYOOLA, Mayowa Johnson
          </Text>
          <Text textAlign={"center"} color={"darkblue"} fontSize={"1rem"}>
            mayowa_ayoola@yahoo.com
          </Text>
        </Box>

        <Box w={"25%"} border={"1px solid darkblue"}>
          <Image src={ben} />
          <Text textAlign={"center"} color={"darkblue"} fontSize={"1.25rem"}>
            ADEGOKE, Benjamin Olusesan
          </Text>
          <Text textAlign={"center"} color={"darkblue"} fontSize={"1rem"}>
            adegokebo35@gmail.com
          </Text>
        </Box>
      </HStack>

      <HStack pt={"3rem"} justifyContent={"center"}>
        <Box w={"30%"} border={"1px solid darkblue"}>
          <Image src={lecturer1} />
          <Text textAlign={"center"} color={"darkblue"} fontSize={"1.25rem"}>
            Dr. MICHAEL, Obaro.
          </Text>
          <Text textAlign={"center"}>
            Lecturer in the Department of Pharmacology and Therapeutics at the
            College of Medicine, University of Ibadan, Nigeria.
          </Text>
          <Text textAlign={"center"} color={"darkblue"} fontSize={"1rem"}>
            micobaro@gmail.com
          </Text>
        </Box>

        <Box w={"30%"} border={"1px solid darkblue"}>
          <Image src={lecturer2} />
          <Text textAlign={"center"} color={"darkblue"} fontSize={"1.25rem"}>
            Prof Osita Christopher Anyaeche
          </Text>
          <Text textAlign={"center"}>
            Department of Industrial and Production Engineering, University of
            Ibadan, Nigeria.
          </Text>
          <Text textAlign={"center"} color={"darkblue"} fontSize={"1rem"}>
            osita.anyaeche@ui.edu.ng; osyanya@yahoo.com
          </Text>
        </Box>
      </HStack>
    </Box>
  );
};

export default Team;
