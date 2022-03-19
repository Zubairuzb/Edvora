import React, { useState, useEffect } from "react";
import { Box, Flex, Spacer, Button } from "@chakra-ui/react";
import Ride from "./components/Ride";
import Nav from "./components/Nav";
import { FaAlignRight } from "react-icons/fa";

const url = "https://assessment.api.vweb.app/rides";
const user_url = "https://assessment.api.vweb.app/user";

function App() {
  const [rides, setRides] = useState([]);
  const [user, setUser] = useState([]);
  const [nearest, setNearest] = useState();
  let station_code = user.station_code;

  const fetchRides = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setRides(data);
    let closest = data.map((item) => {
      return item.station_path.reduce((prev, current) =>
        Math.abs(current - station_code) < Math.abs(prev - station_code)
          ? current
          : prev
      );
    });
    console.log(closest);
  };

  const fetchUser = async () => {
    const response = await fetch(user_url);
    const user_data = await response.json();
    setUser(user_data);
    console.log(user);
  };

  useEffect(() => {
    fetchRides();
    fetchUser();
  }, []);

  const nearestRides = () => {
    fetchRides();
  };

  const upcomingRides = () => {
    let upcoming = rides.filter((item) => new Date(item.date) - new Date() > 0);
    setRides(upcoming);
  };

  const pastRides = () => {
    let past = rides.filter((item) => new Date(item.date) - new Date() < 0);
    setRides(past);
  };

  return (
    <Box bg="#171717">
      <Nav {...user} />
      <Box p="70px" bg="#232323" fontFamily="inter">
        <Flex gap="20px">
          <Button
            border="none"
            bg="none"
            color="#fff"
            fontWeight="200"
            onClick={() => {
              nearestRides();
            }}
          >
            Nearest Rides
          </Button>
          <Button
            border="none"
            bg="none"
            color="#fff"
            fontWeight="200"
            onClick={() => {
              upcomingRides();
            }}
          >
            Upcoming Rides
          </Button>
          <Button
            border="none"
            bg="none"
            color="#fff"
            fontWeight="200"
            onClick={() => {
              pastRides();
            }}
          >
            Past Rides
          </Button>
          <Spacer />
          <Box>
            <FaAlignRight color="#fff" fontSize="25px" />
          </Box>
        </Flex>
        {rides.slice(0, 4).map((ride) => {
          return <Ride {...ride} />;
        })}
      </Box>
    </Box>
  );
}
export default App;
