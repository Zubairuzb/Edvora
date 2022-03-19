import { Flex, Image, Box, Spacer } from "@chakra-ui/react";

const Nav = ({ name, url }) => {
  return (
    <Flex color="#fff" flexDirection="row" alignItems="center" w="90%" m="auto">
      <Box fontWeight={700} fontSize="20px">
        Edvora
      </Box>
      <Spacer />
      <Flex alignItems="center" p="10px">
        <h4 mr="30px" fontWeight={800} fontSize="16px">
          {name}
        </h4>
        <Image
          src={url}
          width="50px"
          height="50px"
          alt="profile_image"
          borderRadius="50%"
          ml="20px"
        />
      </Flex>
    </Flex>
  );
};

export default Nav;
