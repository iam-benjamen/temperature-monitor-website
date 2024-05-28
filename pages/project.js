import { Heading, Divider, Text, Box } from "@chakra-ui/react";


const AboutProject = () => {
  return (
    <Box>
      <Heading
        color={"darkblue"}
        textAlign={"center"}
        fontFamily={"monospace"}
        pt={"2rem"}
      >
        About Project
      </Heading>
      <Divider />

      <Box
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        pt={"2rem"}
      >
        <Text
          w={"70%"}
          fontSize={"1.25rem"}
          textAlign={"justify"}
          lineHeight={"2rem"}
          fontWeight={400}
        >
          The centrality of vital signs (like temperature) monitoring to good
          health and improved health service delivery cannot be overemphasized.
          Generally, a change in body temperature that falls outside the normal
          temperature range at a specific time of the day, is one of the major
          symptoms of ill health in all humans; geographical location, and
          regions of the world notwithstanding. Many illnesses, such as fever,
          chicken pox, rabies, infections, etc, reflect their initial presence
          through an increase in the body temperature. There are several points
          in the body where body vitals, especially temperature can be obtained
          easily and conveniently. Proper monitoring of temperature is,
          therefore, necessary for personal health status monitoring, hence the
          Design and Development of an Upper Arm Remote Temperature Monitor
          (UARTM) Device in Adults.
        </Text>
        <Text
          pt={"2rem"}
          fontSize={"1.25rem"}
          w={"70%"}
          textAlign={"justify"}
          lineHeight={"2rem"}
          fontWeight={400}
        >
          The wearable device will address the limitations of manual tracking
          methods, enable patients to monitor their own health, and provide
          remote access to healthcare professionals for prompt and efficient
          medical intervention. The hardware part of the device is built with
          the use of an ESP32 microcontroller, a DS18B20 temperature sensor, a
          power supply module, a 4.7k resistor, two 3.7v Li-ion batteries, a
          charging jack, and jumper wires; the software implementation for the
          remote monitoring and temperature display on this website was executed
          with Next.js(client) and Node.js(server); and the casing was designed
          with Autodesk Fusion and 3D-printed.
        </Text>
      </Box>
    </Box>
  );
};

export default AboutProject;
