import { Box, Text, Spacer, Flex } from "@chakra-ui/react";

const Ride = ({
  id,
  origin_station_code,
  date,
  map_url,
  state,
  city,
  station_path,
  distance,
}) => {
  return (
    <Box
      bg="#171717"
      borderRadius="10px"
      color="#fff"
      display="Flex"
      bn
      hn
      alignItems="center"
      gap="50px"
      mb="10px"
      p="20px"
    >
      <img
        src={map_url}
        alt="map_image"
        width="296px"
        height="153px"
        borde-radius="5px"
      />
      <Box>
        <Text>Id: {id}</Text>
        <Text>Origin station: {origin_station_code}</Text>
        <Text>{`[${station_path}]`}</Text>
        <Text>{date}</Text>
        <Text>{state}</Text>
        <Text>{distance}</Text>
      </Box>
      <Spacer />
      <Flex gap="20px">
        <h3>{city}</h3>
        <h3>{state}</h3>
      </Flex>
    </Box>
  );
};

export default Ride;
