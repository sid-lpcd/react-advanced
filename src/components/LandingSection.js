import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
  <VStack spacing={10} align='center'>
    <VStack spacing={4}>
      <Avatar name='Pete' src='https://i.pravatar.cc/150?img=7' size='xl'/> 
      <Heading as='h6' size='sm'>
        {greeting}
      </Heading>
    </VStack>
    <VStack spacing={4}>
      <Heading as='h2' size='2xl'>
        {bio1}
      </Heading>
      <Heading as='h2' size='2xl'>
        {bio2}
      </Heading>
    </VStack>
  </VStack>
  </FullScreenSection>
);

export default LandingSection;
