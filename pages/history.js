import {
  Box,
  Heading,
  Divider,
  Table,
  TableContainer,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Spinner,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";

function formatTime(timestamp) {
  const date = new Date(timestamp);

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}

const History = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios
          .get("https://temperature-sensor-project.onrender.com/api/items")
          .then(function (response) {
            setData(response.data);
          });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  if (loading || data == null) {
    return (
      <Box>
        <Heading
          fontFamily={"monospace"}
          color={"darkblue"}
          textAlign={"center"}
          pt={"2rem"}
        >
          Temperature Readings History
        </Heading>
        <Divider />

        <Spinner />
      </Box>
    );
  }
  return (
    <Box>
      <Heading
        fontFamily={"monospace"}
        color={"darkblue"}
        textAlign={"center"}
        pt={"2rem"}
      >
        Temperature Readings History
      </Heading>
      <Divider />

      <Box
        margin={"auto"}
        mt={"2rem"}
        display={"flex"}
        w={"100%"}
        justifyContent={"center"}
      >
        <TableContainer w={"70%"} overflowY={"scroll"} height={"70vh"}>
          <Table variant={"simple"}>
            <Thead>
              <Tr>
                <Th style={{ textAlign: "center" }}>S/N</Th>
                <Th style={{ textAlign: "center" }}>Time Recorded</Th>
                <Th style={{ textAlign: "center" }}>
                  Temperature Reading(Degree Celsius)
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.allItems?.slice(-30).map((item, index) => (
                <Tr key={index}>
                  <Td style={{ textAlign: "center" }}>{index + 1}</Td>
                  <Td style={{ textAlign: "center" }} suppressHydrationWarning>
                    {formatTime(item.time_created)}
                  </Td>
                  <Td style={{ textAlign: "center" }}>{item.temperature}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default History;
