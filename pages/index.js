import { Heading, Text, Box, VStack, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import RadialGauge from "../components/radialGuage";
import Head from "next/head";
import axios from "axios";
import Chart1 from "../components/Chart1";
import Nav from "../components/NavBar";
import Footer from "../components/Footer";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      axios
        .get("https://temperature-sensor-project.onrender.com/api/items")
        .then(function (response) {
          // console.log(response.data);
          setData(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  console.log(data?.allItems);
  console.log(data?.allItems?.slice(-1)[0].temperature);

  return (
    <div>
      <Head>
        <title>Remote Temperature Monitor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Box
        justifyContent={"space-between"}
        paddingTop={"6vh"}
        paddingX={"3rem"}
        display={"flex"}
        flexDir={"column"}
        // alignItems={'center'}
      >
        <Box
          display={"flex"}
          flexDir={"column"}
          alignSelf={"center"}
          w={"30%"}
          minHeight={"7rem"}
          borderRadius={"2rem"}
          bg={"darkblue"}
          alignItems={"center"}
          p={"1rem"}
        >
          <Text
            fontWeight={700}
            fontFamily={"monospace"}
            fontSize={"1.35rem"}
            color={"white"}
          >
            Current Temperature Reading
          </Text>
          <Text
            pt={".5rem"}
            fontWeight={700}
            fontSize={"1.75rem"}
            color={"white"}
            fontFamily={"monospace"}
          >
            {`${data?.allItems?.slice(-1)[0].temperature || 0}`}°C
          </Text>
        </Box>
        <HStack alignItems={"center"} justifyContent={"center"}>
          <RadialGauge value={data?.allItems?.slice(-1)[0].temperature || 0} />

          <Chart1 chartdata={data?.allItems.slice(-15)} />
        </HStack>
      </Box>
      <Footer />
    </div>
  );
}
