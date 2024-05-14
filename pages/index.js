import { Heading, Text, Box, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import RadialGauge from "../components/radialGuage";
import axios from "axios";

export default function Home() {
  const [value, setValue] = useState(25);
  const [data, setData] = useState({});

  useEffect(() => {
    const intervalId = setInterval(() => {
      axios
        .get("https://temperature-sensor-project.onrender.com/api/items")
        .then(function (response) {
          console.log(response.data);
          setData(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  https: return (
    <div className={styles.container}>
      <Head>
        <title>Temperature Monitor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box width={"100vw"} height={"100vh"} padding={"3rem"}>
        <VStack>
          <Heading fontSize={"2.5rem"} fontFamily={"Roboto"} color={"darkblue"}>
            Temperature Monitor
          </Heading>

          <Text fontSize={"1.25rem"}>Project by Ayoola Mayowa</Text>
        </VStack>
        <RadialGauge value={data?.allItems?.slice(-1)[0].temperature || 0} />
      </Box>
    </div>
  );
}
