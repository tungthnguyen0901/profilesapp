import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const Testest = ({ text, id }) => (

<FullScreenSection maxWidth="50vw" minHeight="auto" justifyContent="center" alignItems="center"> 
<VStack color ="white" backgroundColor= "burlywood" marginTop = "1vh" width="50vw">
<Heading as="h1" id={id} fontSize={{ base: '24px', md: '40px', lg: '56px' }} >
    {text}
  </Heading>   

  </VStack>
  </FullScreenSection>
)

export default Testest;