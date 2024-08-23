
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import { Button, Heading, VStack, HStack } from "@chakra-ui/react";

const downloadablefile = [
    {
      title: "Resume",
      url: "TungNguyenResume.pdf"
    },
    {
      title: "My Degrees",
      url: "TungNguyenDiplomas.pdf"
    },
    {
      title: "Certifications",
      url: "TungNguyenAllcerts.pdf"
    },
    {
      title: "Reference Letter",
      url: "RecommendationLetters.pdf"
    },
  ];


const DownloadPDF = () => (
    
    <VStack color ="white" backgroundColor="#2A4365" spacing={8}> 
        <Heading as="h1" id="Download-section" fontSize={{ base: '24px', md: '40px', lg: '56px' }} >
          Downloadable stuff
        </Heading>
        <HStack color ="white" backgroundColor="#2A4365" justifyContent='space-between' alignItems='center'>
        {downloadablefile.map((downloadablefile) => (            
           <a classname = 'btn btn-success' key = {downloadablefile.title} href= {downloadablefile.url} target= "blank"><Button> {downloadablefile.title}
            </Button></a>
            
        ))}
        </HStack>
        </VStack>
    );

export default DownloadPDF