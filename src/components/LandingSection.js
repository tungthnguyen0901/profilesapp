import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import logo from '../images/TungNguyenLogo.JPG';

const greeting = "Hello, I am Tung!";
const bio1 = "A newbie frontend developer";
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

<VStack spacing={8}>
      <Avatar src={logo}
      size='2xl'
      name='Tung Nguyen'
      />


      <Heading as='h4' size='md' noOfLiners={1}>{greeting}</Heading>

      <VStack spacing={6}>
        <Heading as='h1' size='3xl' fontSize={{ base: '24px', md: '40px', lg: '56px' }} noOfLines={1}>{bio1}</Heading>
        <Heading as='h1' size='3xl' fontSize={{ base: '24px', md: '40px', lg: '56px' }} noOfLines={1}>{bio2}</Heading>
      </VStack>

    </VStack>
  </FullScreenSection>
);

export default LandingSection;
