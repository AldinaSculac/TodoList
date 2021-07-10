import React from 'react';
import { VStack, HStack, Text, IconButton, useColorMode, Spacer } from '@chakra-ui/react';
import { GiMoonOrbit } from 'react-icons/gi';
import { HiSun } from 'react-icons/hi';

const Header = () => {
  // Light/Dark Mode
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack
      bgGradient="linear(to-r, gray.800, purple.400, pink.800)"
      alignItems="stretch"
      p="4"
      boxShadow="md"
    >
      <HStack >
        <Text
          color="whiteAlpha.800"
          fontSize="2xl"
          fontWeight="hairline"
        >Todo App</Text>
        <Spacer />
        <IconButton
          icon={colorMode === "dark" ? <GiMoonOrbit /> : <HiSun />}
          isRound="true"
          size="lg"
          onClick={toggleColorMode}
          backgroundColor="whiteAlpha.100"
          _hover={{ bg: "whiteAlpha.300" }}
          color="whiteAlpha.800"
          //_focus={{ boxShadow: "outline" }}
        />
      </HStack>
    </VStack>
  )
}

export default Header;
